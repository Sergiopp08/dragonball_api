<template>
  <div>
    <!-- Menú de navegación -->
    <nav class="menu">
      <!-- Imagen a la izquierda del menú -->
      <img 
        src="../public/img/dragonballz_titulo.png" 
        alt="Título Dragon Ball"
        class="menu-logo"
      />
      <div class="menu-item">
        <RouterLink to="/">Inicio</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/characters">Personajes</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/planetas">Planetas</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/razas">Razas</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink :to="'/genero/' + someId">Generos</RouterLink>
      </div>
      <div class="menu-item">
        <RouterLink to="/buscador">Buscador</RouterLink>
      </div>
      
      <!-- Botón en la esquina derecha dentro del menú -->
      <div class="info-button">
        <button @click="showInfoAlert">¿Qué es Dragon Ball?</button>
      </div>
    </nav>
    
    <!-- Imagen centrada como título -->
    <header>
      <img 
        src="../public/img/dragonballz_titulo.png" 
        alt="Título Dragon Ball"
        class="title-image"
      />
    </header>

    <!-- Contenido principal -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      someId: 123, // Un ejemplo de ID para el enlace dinámico
    };
  },
  methods: {
    // Función para mostrar la alerta explicando qué es Dragon Ball
    showInfoAlert() {
      Swal.fire({
        title: '¿Qué es Dragon Ball?',
        text: 'Dragon Ball es una famosa serie de anime y manga creada por Akira Toriyama, que sigue las aventuras de Goku mientras busca las Esferas del Dragón, luchando contra poderosos enemigos y defendiendo la Tierra.',
        icon: 'info',
        confirmButtonText: '¡Entendido!'
      });
    }
  }
};
</script>

<style>
@import "assets/styles.scss";

/* Estilo para el contenedor del menú */
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: black;
  color: white;
}

/* Estilo para los elementos del menú */
.menu-item {
  margin-right: 20px;
}

.menu-logo {
  width: 150px;
  height: auto;
}

/* Estilo para el botón en la esquina derecha dentro del menú */
.info-button {
  margin-left: auto; /* Esto empuja el botón hacia la derecha */
}

.info-button button {
  font-family: 'Bangers', sans-serif;
  background-color: #e67e00;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
}

.info-button button:hover {
  background-color: #e67e00;
}
</style>


