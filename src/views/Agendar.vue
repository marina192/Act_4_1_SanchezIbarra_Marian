<template>
  <Encabezado titulo="Agendar Tutoría" />

  <Contenido>
    <div class="agendar-layout">

      <!-- IZQUIERDA: CARD DEL TUTOR -->
      <div class="tutor-info">
        <h2>Agendando con:</h2>

        <CardTutor
          v-if="tutor"
          :name="tutor.name"
          :subject="tutor.subject"
          :description="tutor.description"
          :availability="tutor.availability"
        />

        <p v-else class="no-encontrado">
          Tutor no encontrado.
        </p>
      </div>

      <!-- DERECHA: CALENDARIO -->
      <div class="calendario">
        <Calendario />
      </div>

    </div>
  </Contenido>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import Encabezado from "../components/Encabezado.vue";
import Contenido from "../components/Contenido.vue";
import CardTutor from "../components/CardTutor.vue";
import Calendario from "../components/Calendario.vue";

const route = useRoute();
const tutorId = Number(route.params.id);

// Misma lista de tutores que Inicio.vue
const tutores = [
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
    description: "Ingeniera en telecomunicaciones, certificada en CCNA.",
    availability: "Sábados"
  },
  {
    id: 6,
    name: "Sofía Hernández",
    subject: "Tendencias Sociales",
    description: "Socióloga con enfoque en cultura digital y movimientos sociales.",
    availability: "Miércoles y Viernes"
  }
];

// Busca el tutor según el ID
const tutor = tutores.find(t => t.id === tutorId);
</script>

<style scoped>
.agendar-layout {
  margin-top: 2rem;
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: flex-start;
}

/* IZQUIERDA */
.tutor-info {
  flex: 0 0 300px;
}

.tutor-info h2 {
  margin-bottom: 0.5rem;
}

/* DERECHA */
.calendario {
  flex: 0 0 400px;
}
</style>
