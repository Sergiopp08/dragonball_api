<template>
    <div class="planetas">
      <div class="header-container">
        <button 
          @click="previousPage" 
          :disabled="currentPage <= 1" 
          class="pagination-button"
        >
          Atrás
        </button>
        <h2>Planetas de Dragon Ball</h2>
        <button 
          @click="nextPage" 
          :disabled="currentPage >= maxPages" 
          class="pagination-button"
        >
          Adelante
        </button>
      </div>
  
      <div class="planets-list">
        <div v-if="loading" class="loading">Cargando...</div>
        <div v-if="error" class="error">Error al cargar los planetas: {{ error }}</div>
        
        <div v-for="planet in planets" :key="planet.id" class="planet-item">
    <router-link :to="{ name: 'planet-info', params: { id: planet.id } }" class="planet-link">
      <div class="planet-card">
        <img :src="planet.image" :alt="planet.name" class="planet-image" />
        <p class="planet-name">{{ planet.name }}</p>
      </div>
    </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const planets = ref([]);
  const loading = ref(true);
  const error = ref(null);
  const currentPage = ref(1);
  const maxPages = 5; // Número máximo de páginas basado en el total de 20 planetas y 4 por página.
  
  const fetchPlanets = async () => {
    try {
      loading.value = true;
      const response = await fetch(`https://dragonball-api.com/api/planets?page=${currentPage.value}&limit=4`);
      const data = await response.json();
      planets.value = data.items;
      loading.value = false;
    } catch (err) {
      error.value = err.message;
      loading.value = false;
    }
  };
  
  const nextPage = () => {
    if (currentPage.value < maxPages) {
      currentPage.value++;
      fetchPlanets();
    }
  };
  
  const previousPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--;
      fetchPlanets();
    }
  };
  
  onMounted(fetchPlanets);
  </script>
  