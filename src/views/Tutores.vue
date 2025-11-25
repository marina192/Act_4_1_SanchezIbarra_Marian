<template>
  <Encabezado titulo="Tutores" />

  <Contenido>
    <BarraBusqueda />

    <div class="cards">
      <CardTutor
        v-for="tutor in tutores"
        :key="tutor.id"
        :name="tutor.name"
        :subject="tutor.subject"
        :description="tutor.description"
        :availability="tutor.availability"
        @agendar="agendar(tutor)"
      />
    </div>
  </Contenido>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'   // ← IMPORTANTE

import Encabezado from '../components/Encabezado.vue'
import Contenido from '../components/Contenido.vue'
import BarraBusqueda from '../components/BarraBusqueda.vue'
import CardTutor from '../components/CardTutor.vue'

const router = useRouter() // ← SIN ESTO NO FUNCIONA

function agendar(tutor) {
  router.push(`/agendar/${tutor.id}`)
}

// Lista de tutores (ejemplo)
const tutores = ref([
  {
    id: 1,
    name: "Ana García",
    subject: "Matemáticas",
    description: "Especialista en álgebra, cálculo y geometría.",
    availability: "Lunes a Viernes"
  },
  {
    id: 2,
    name: "Carlos Pérez",
    subject: "Programación",
    description: "Experto en C++, JS y estructuras de datos.",
    availability: "Fin de semana"
  },
  {
    id: 3,
    name: "Laura Martínez",
    subject: "Administración de Proyectos",
    description: "Certificada en PMP, con experiencia en metodologías ágiles y gestión.",
    availability: "Martes y Jueves"
  },
  {
    id: 4,
    name: "José Ramírez",
    subject: "Sistemas Operativos",
    description: "Especialista en Linux, Windows Server y virtualización.",
    availability: "Lunes y Viernes"
  },
  {
    id: 5,
    name: "María López",
    subject: "Redes",
    description: "Ingeniera en telecomunicaciones, certificada en CCNA. Experta en configuración de routers, switches y seguridad de redes.",
    availability: "Sábados"
  },
  {
    id: 6,
    name: "Sofía Hernández",
    subject: "Tendencias Sociales",
    description: "Socióloga con enfoque en análisis de comportamiento colectivo, cultura digital y movimientos sociales contemporáneos.",
    availability: "Miércoles y Viernes"
  }
])
</script>

<style scoped>
.cards {
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>