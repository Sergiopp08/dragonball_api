<template>
    <div class="info_planets">
      <p>{{ name }}</p>
      <p>{{ description }}</p>
      <router-link :to="{ name: 'planet-info', params: { id } }">
        <img :src="img" :alt="name">
      </router-link>
     
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    img: String,
    name: String,
    description: String,
  });
  </script>