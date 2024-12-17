import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Personajes from '@/views/Personajes.vue'
import Planetas from '@/views/Planetas.vue'
import Razas from '@/views/Razas.vue'
import InfoPersonajes from '@/views/InfoPersonajes.vue' 
import InfoPlanetas from '@/views/InfoPlanetas.vue'
import InfoRazas from '@/views/InfoRazas.vue'
import Genero from '@/views/Genero.vue'
import Buscador from '@/views/Buscador.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: '',
          component: HomeView
        },
        {
          path: '/characters',
          component: Personajes
        },
        {
          path: '/planetas',
          component: Planetas
        },
        {
          path: '/razas',
          component: Razas
        },
        {
          path: '/characters/:id', // Ruta dinámica
          name: 'character-info',
          component: InfoPersonajes
        },
        
        {
          path: '/planetas/:id',
          name: 'planet-info',
          component: InfoPlanetas
        
        },

        {
          path: '/genero/:id',
          name: 'genero',
          component: Genero
        },

        {
          path: '/buscador',
          component: Buscador
        },
        

        {
          path: '/characters/race/:race',
          name: 'race-info',
          component: InfoRazas,
          props: route=> ({
            race: route.params.race.replace(/_/g, '')
          })
        
        }
      ]
    }
  ]
})

export default router

