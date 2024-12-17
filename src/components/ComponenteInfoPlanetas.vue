<template>
    <div class="inhabitant-card">
      <img :src="image" :alt="name" class="inhabitant-image" />
      <p class="inhabitant-name">{{ name }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    image: String,
    name: String,
  });
  </script>