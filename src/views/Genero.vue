<template>
    <div>
      
      
      <!-- Botones para filtrar por género -->
      <div class="button-container">
        <button @click="setGender('Male')" :class="{ active: selectedGender === 'Male' }">Hombres</button>
        <button @click="setGender('Female')" :class="{ active: selectedGender === 'Female' }">Mujeres</button>
      </div>
  
      <!-- Listado de personajes -->
      <div v-if="filteredCharacters.length > 0">
        <div class="character-list">
          <div v-for="character in paginatedCharacters" :key="character.id" class="character-item">
            <img :src="character.imageUrl" :alt="character.name" />
            <div class="race-name">{{ character.name }}</div>
          </div>
        </div>
  
        <!-- Botón de paginación -->
        <div v-if="filteredCharacters.length > charactersPerPage" class="pagination">
          <button @click="nextPage" :disabled="currentPage >= totalPages">Siguiente</button>
        </div>

        
      </div>
  
      <!-- Mensaje si no hay personajes -->
      <p v-else>No se encontraron personajes para este género.</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedGender: 'Male', // El género seleccionado por defecto
        characters: [], // Lista de personajes vacía inicialmente
        currentPage: 1,
        charactersPerPage: 4 // Número de personajes por página
      };
    },
    computed: {
      // Filtrar los personajes por género
      filteredCharacters() {
        return this.characters.filter(character => character.gender === this.selectedGender);
      },
      // Total de páginas necesarias para mostrar los personajes
      totalPages() {
        return Math.ceil(this.filteredCharacters.length / this.charactersPerPage);
      },
      // Obtener los personajes de la página actual
      paginatedCharacters() {
        const startIndex = (this.currentPage - 1) * this.charactersPerPage;
        return this.filteredCharacters.slice(startIndex, startIndex + this.charactersPerPage);
      }
    },
    methods: {
      // Cambiar género seleccionado
      setGender(gender) {
        this.selectedGender = gender;
        this.currentPage = 1; // Resetear a la primera página cuando se cambia el género
        this.fetchCharacters(); // Re-cargar los personajes cuando se cambia el género
      },
      // Avanzar a la siguiente página
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      // Obtener los personajes desde la API
      async fetchCharacters() {
        try {
          const response = await fetch(`https://dragonball-api.com/api/characters?gender=${this.selectedGender}`);
          const data = await response.json();
          this.characters = data.map(character => ({
            id: character.id,
            name: character.name,
            gender: character.gender,
            imageUrl: character.image // Asegúrate de que este campo sea correcto según la respuesta de la API
          }));
        } catch (error) {
          console.error('Error al obtener personajes:', error);
        }
      }
    },
    mounted() {
      // Cargar los personajes cuando el componente se monta
      this.fetchCharacters();
    }
  };
  </script>
  

  