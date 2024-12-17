<template>
    <div class="ComponenteInfoRazas">
      
      <img :src="img" alt="Character Image" />
      <p><strong>Nombre:</strong> {{ name }}</p>
      
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    img: String,
    name: String,
   
  });
  </script>