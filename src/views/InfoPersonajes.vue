<template>
    <div class="info-personajes">
      <div class="info-container" v-if="character">
        <ComponentePersonajes
        :name="character.name"
        :race="character.race"
        :img="character.image"
        :gender="character.gender"
        :description="character.description"
      />
  
        <!-- Carrusel de transformaciones -->
        <div v-if="character.transformations && character.transformations.length > 0" class="transformation-carousel">
          <h3>Transformaciones:</h3>
          <splide :options="splideOptions">
            <splide-slide v-for="(transformation, index) in character.transformations" :key="index">
              <img :src="transformation.image" :alt="transformation.name" class="transformation-image" />
              <p>{{ transformation.name }}</p>
            </splide-slide>
          </splide>
        </div>
  
        <!-- Mensaje si no hay transformaciones -->
        <p v-else>No tiene transformaciones disponibles.</p>
      </div>
      <p v-else>Cargando datos del personaje...</p>
    </div>
  </template>
  
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import ComponentePersonajes from '@/components/ComponentePersonajes.vue';
  
  const character = ref(null);
  const route = useRoute();
  
  onMounted(async () => {
    const id = route.params.id; // Obtener el ID de la URL
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters/${id}`);
      if (response.ok) {
        character.value = await response.json();
      } else {
        console.error('Error fetching character data: ', response.status);
        character.value = null;
      }
    } catch (error) {
      console.error('Error fetching character data:', error);
      character.value = null;
    }
  });
  </script>
  
