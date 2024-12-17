<template>
  <div class="home">
    <!-- Introducción a la API -->
    <section class="intro">
      <p>
        <span class="highlight">Descubre información completa</span> sobre los personajes, planetas y razas del universo de Dragon Ball.
      </p>
      <p>
        Esta API está diseñada para ser <span class="highlight">fácil de usar</span> y te permitirá acceder a una base de datos <span class="highlight">rica en detalles</span> de esta icónica serie.
      </p>
    </section>

    <!-- Características principales -->
    <section class="features">
      <div class="features-box">
        <h3>Características Principales</h3>
        <ul>
          <li>🎯 Información detallada de más de 100 personajes.</li>
          <li>🌎 Datos de los planetas más emblemáticos como Namek y la Tierra.</li>
          <li>📜 Conoce las diferentes razas del universo Dragon Ball.</li>
        </ul>
      </div>
    </section>

    <!-- Imagen o representación visual -->
    <section class="visual">
      <img 
        src="C:\Users\sergio.perez.paez_al\Desktop\vue\dragonball_api\public\img\logodg.png" 
        alt="Logo Dragon Ball Z"
        class="logo"
      />
    </section>

    <!-- Botones para compartir en redes sociales -->
    <section class="social-share">
      <vue-social-sharing
        class="social-buttons"
        url="https://www.example.com" 
        title="Dragon Ball API"
        description="Información completa sobre los personajes, planetas y razas del universo de Dragon Ball."
      >
        <!-- Botones con enlaces a redes sociales -->
        <a slot="facebook" href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fdragonballsuper%2F%3Fhl%3Des&is_from_rle" target="_blank">
          <button>Instagram</button>
        </a>
        <a slot="twitter" href="https://x.com/DB_official_en?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
          <button>Twitter</button>
        </a>
        <a slot="youtube" href="https://www.youtube.com/@MundoDragonBallOficial77" target="_blank">
          <button>Youtube</button>
        </a>
      </vue-social-sharing>
    </section>
  </div>
</template>



<style>
/* Estilos para los botones de compartir */


</style>



  
 