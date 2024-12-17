<template>
  <div class="razas">
    <h2>Razas de Dragon Ball</h2>
    <Splide :options="splideOptions">
      <SplideSlide v-for="(race, index) in races" :key="index" aria-label="Dragon Ball Races">
        <!-- Usamos router-link para redirigir a la ruta '/characters/race/race:' -->
        <router-link :to="{ name: 'race-info', params: { race: race.name.replace(/ /g, '_') } }">
          <img :src="race.image" :alt="race.name" class="race-image" />
        </router-link>
        <p class="race-name">{{ race.name }}</p>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

// Datos de las razas
const races = [
  { name: 'Android', image: 'public/img/androides.jpg' },
  { name: 'Angel', image: 'public/img/angeles.jpg' },
  { name: 'God', image: 'public/img/dioses.jpg' },
  { name: 'Frieza Race', image: 'public/img/ejercitofreezer.jpg' },
  { name: 'Human', image: 'public/img/humanos.jpg' },
  { name: 'Nucleico', image: 'public/img/kaio.jpg' },
  { name: 'Nucleico Benigno', image: 'public/img/kaioshin.jpg' },
  { name: 'Majin', image: 'public/img/majinbuu.jpg' },
  { name: 'Namekian', image: 'public/img/namekianos.jpg' },
  { name: 'Saiyan', image: 'public/img/saiyans.jpg' },
];

// Configuración de Splide
const splideOptions = {
  type: 'row',
  perPage: 4,
  perMove: 1,
  pagination: false,
  arrows: true,
  gap: '10px',
  width: '140%',
};
</script>

  

  
  