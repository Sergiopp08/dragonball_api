<template>
    <router-link to="/planetas" class="navigation2">
      <button class="back-button">Atrás</button>
    </router-link>
  
    <div class="container_personajes">



      <!-- Mostrar habitantes si existen -->
      <div v-if="inhabitantsList.length > 0">
        <InhabitantCard 
        v-for="inhabitant in inhabitantsList" 
        :key="inhabitant.id" 
        :image="inhabitant.image" 
        :name="inhabitant.name" 
      />

      </div>
      <!-- Mostrar mensaje si no hay habitantes -->
      <div v-else class="no-personajes">
        <p>No se han encontrado personajes en este planeta.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import InhabitantCard  from '../components/ComponenteInfoPlanetas.vue';

  
  // Obtener el ID desde los parámetros de la ruta
  const route = useRoute();
  const id = route.params.id;
  
  // Lista de habitantes
  const inhabitantsList = ref([]);
  
  onMounted(async () => {
    try {
      // Obtener los datos del planeta
      const response = await fetch(`https://dragonball-api.com/api/planets/${id}`);
      const data = await response.json();
      // Asignar habitantes a la lista
      inhabitantsList.value = data.characters || [];
    } catch (error) {
      console.error('Error al cargar los datos del planeta:', error);
      inhabitantsList.value = [];
    }
  });
  </script>
  
  
  