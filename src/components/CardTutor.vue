<!--
  Componente: CardTutor.vue
  Descripción:
  Tarjeta visual para mostrar información básica e importante de un tutor académico, 
  esta información incluye su nombre, materia que imparten, una descripción breve y la
  disponibilidad con la que más cuentan regularmente junto con un boton en caso de que
  se desee agendar.
  Características:
  - Recibe props: name (String), subject (String), description (String), 
    availability (String), mostrarBoton (Boolean).
  - Emite el evento "agendar" cuando se hace clic en el botón.
  - Permite ocultar el botón para cuando se muestre en otras vistas donde solo se
    necesita la información del tutor.
-->

<template>
  <div class="card">
    
    <div class="photo"></div>

    <h3 class="name">{{ name }}</h3>
    <p class="subject"><strong>Materia:</strong> {{ subject }}</p>
    <p class="description">{{ description }}</p>
    <p class="availability">
      <strong>Disponibilidad:</strong> {{ availability }}
    </p>

    <nav v-if="mostrarBoton">
      <Boton @click="emit('agendar')">Agendar</Boton>
    </nav>
  </div>
</template>

<script setup>
  import Boton from "./Boton.vue";
  defineProps({
    name: String,
    subject: String,
    description: String,
    availability: String,
    mostrarBoton: {
      type: Boolean,
      default: true
    },
  });

  const emit = defineEmits(['agendar'])
</script>

<style scoped>
  .card {
    width: 260px;
    padding: 1rem;
    border-radius: 15px;
    border: 1px solid #ddd;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .photo {
    width: 90px;
    height: 90px;
    background: #bbb;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .subject, .description, .availability {
    font-size: 0.9rem;
    text-align: center;
  }
</style>
