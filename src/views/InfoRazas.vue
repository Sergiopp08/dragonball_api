<template>
    <div class="info-razas">
      <h1>Personajes de la raza: {{ race }}</h1>
      
      <!-- Mostrar los personajes -->
      <div v-if="characters.length > 0" class="character-list">
        <ComponenteInfoRazas
          v-for="(character, index) in characters"
          :key="index"
          :img="character.image"
          :name="character.name"
          :race="character.race"
          :gender="character.gender"
          :description="character.description"
        />
      </div>
      
      <!-- Mensaje si no hay personajes -->
      <div v-else>
        <p>No hay personajes disponibles para esta raza.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import ComponenteInfoRazas from '@/components/ComponenteInfoRazas.vue';
  
  const route = useRoute();
  const race = route.params.race.replace(/_/g, ' '); // Obtenemos la raza desde la URL
  const characters = ref([]);
  
  // Función para obtener los personajes de la API según la raza
  onMounted(async () => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?race=${race}`);
      const data = await response.json();
      characters.value = data || []; // Asignamos los personajes a la variable
    } catch (error) {
      console.error('Error al cargar los personajes:', error);
      characters.value = []; // Si hay un error, mostramos una lista vacía
    }
  });
  </script>
  
