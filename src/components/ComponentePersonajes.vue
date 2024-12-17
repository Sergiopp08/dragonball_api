<template>
  <div class="character-details">
    <h1>{{ name }}</h1>
    <img :src="img" alt="Character Image" />
    <p><strong>Nombre:</strong> {{ name }}</p>
    <p><strong>Raza:</strong> {{ race }}</p>
    <p><strong>Género:</strong> {{ gender }}</p>
    <p><strong>Descripción:</strong> {{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  img: String,
  name: String,
  race: String,
  gender: String,
  description: String,
});
</script>
