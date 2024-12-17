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
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  const characters = ref([]);
  const loading = ref(false);
  const error = ref('');
  
  // Función para buscar personajes en tiempo real
  const searchCharacter = async () => {
    if (!searchQuery.value.trim()) {
      characters.value = []; // Limpiar resultados si no hay texto
      return;
    }
  
    loading.value = true;
    error.value = '';
    characters.value = [];
  
    try {
      // Llamar a la API para obtener todos los personajes
      const response = await fetch('https://dragonball-api.com/api/characters');
      const data = await response.json();
  
      // Filtrar los personajes que coincidan con el nombre ingresado
      const filteredCharacters = data.items.filter(character =>
        character.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
  
      // Verificamos si hay personajes encontrados
      if (filteredCharacters.length > 0) {
        characters.value = filteredCharacters;
      } else {
        error.value = 'No se encontraron personajes con ese nombre.';
      }
    } catch (err) {
      error.value = 'Hubo un error al realizar la búsqueda.';
    } finally {
      loading.value = false;
    }
  };
  </script>