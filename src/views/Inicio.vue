<template>
  <Encabezado titulo="Cursos Inscritos" />

  <Contenido>
    <BarraBusqueda />

    <div class="cards">
      <CardCurso
        v-for="curso in cursos"
        :key="curso.id"
        :name="curso.name"
        :group="curso.group"
        :progress="curso.progress"
        @verCurso="verCurso(curso)"
      />
    </div>
  </Contenido>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Encabezado from '../components/Encabezado.vue'
import Contenido from '../components/Contenido.vue'
import BarraBusqueda from '../components/BarraBusqueda.vue'
import CardCurso from '../components/CardCurso.vue'

const router = useRouter()

function verCurso(curso) {
  router.push(`/curso/${curso.id}`)
}

const cursos = ref([
  { id: 1, name: "Matemáticas Discretas", group: "3B", progress: 70 },
  { id: 2, name: "Programación Web", group: "2A", progress: 85 },
  { id: 3, name: "Bases de Datos", group: "4C", progress: 40 },
  { id: 4, name: "Redes Avanzadas", group: "5A", progress: 55 },
  { id: 5, name: "Cálculo", group: "7C", progress: 22 },
])
</script>

<style scoped>
.cards {
  margin: 1rem auto;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}
</style>
