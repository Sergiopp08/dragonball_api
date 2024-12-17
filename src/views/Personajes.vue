<template>
  <div class="personajes">
    <!-- Contenedor del título y los botones -->
    <div class="header-container">
      <button 
        @click="previousPage" 
        :disabled="currentPage <= 1" 
        class="pagination-button"
      >
        Atrás
      </button>

      <h2>Personajes de Dragon Ball</h2>

      <button 
        @click="nextPage" 
        :disabled="characters.length < 10" 
        class="pagination-button"
      >
        Adelante
      </button>
    </div>

    <div class="characters-list">
      <div v-if="loading" class="loading">Cargando...</div>
      <div v-if="error" class="error">Error al cargar los personajes: {{ error }}</div>
      
      <!-- Muestra los personajes -->
        <div v-for="character in characters" :key="character.id" class="character-item">
          <router-link :to="{name: 'character-info', params: { id: character.id }}"> 
          <img :src="character.image" :alt="character.name" class="character-image" />
      </router-link>
        <p class="character-name">{{ character.name }}</p>
      </div>
      
    </div>
  </div>
</template>

  <script setup>
  import { ref, onMounted } from 'vue';
  
  const characters = ref([]); // Lista de personajes
  const loading = ref(true); // Estado de carga
  const error = ref(null); // Estado de error
  const currentPage = ref(1); // Página actual
  
  // Función para obtener los personajes de la API con paginación
  const fetchCharacters = async (page = 1) => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
      const data = await response.json();
      characters.value = data.items; // Los personajes de la página actual
      loading.value = false;
    } catch (err) {
      error.value = err.message;
      loading.value = false;
    }
  };
  
  // Llamar a la función de obtención de personajes al montar el componente
  onMounted(() => {
    fetchCharacters(currentPage.value);
  });
  
  // Función para ir a la página anterior
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchCharacters(currentPage.value);
    }
  };
  
  // Función para ir a la siguiente página
  const nextPage = () => {
    currentPage.value++;
    fetchCharacters(currentPage.value);
  };
  </script>
  