<template>
  <div class="buscador">
    <!-- Barra de búsqueda -->
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        @input="searchCharacter"
        placeholder="Buscar personaje..."
        class="search-input"
      />
    </div>

    <!-- Mostrar resultados -->
    <div v-if="loading" class="loading">Cargando...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="characters.length" class="search-results">
      <div v-for="character in characters" :key="character.id" class="search-item">
        <router-link :to="{ name: 'character-info', params: { id: character.id } }">
          <img :src="character.image" :alt="character.name" class="character-image" />
        </router-link>
        <p>{{ character.name }}</p>
      </div>
    </div>

    <!-- Mensaje si no se encuentran resultados -->
    <div v-if="!characters.length && !loading && !error">
      <p>No se encontraron personajes.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchQuery = ref("");
const characters = ref([]);
const loading = ref(false);
const error = ref("");

// Función para buscar personajes en todas las páginas
const searchCharacter = async () => {
  if (!searchQuery.value.trim()) {
    characters.value = []; // Limpiar resultados si no hay texto
    return;
  }

  loading.value = true;
  error.value = "";
  characters.value = [];

  try {
    let currentPage = 1;
    let totalPages = 1;
    const allCharacters = [];

    // Iterar sobre todas las páginas
    do {
      const response = await fetch(
        `https://dragonball-api.com/api/characters?page=${currentPage}&limit=10`
      );
      const data = await response.json();

      // Agregar personajes de la página actual
      allCharacters.push(...data.items);

      // Actualizar el número total de páginas
      totalPages = data.meta.totalPages;

      currentPage++;
    } while (currentPage <= totalPages);

    // Filtrar los personajes que coincidan con el nombre ingresado
    characters.value = allCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );

    // Si no se encontraron personajes
    if (!characters.value.length) {
      error.value = "No se encontraron personajes con ese nombre.";
    }
  } catch (err) {
    error.value = "Hubo un error al realizar la búsqueda.";
  } finally {
    loading.value = false;
  }
};
</script>