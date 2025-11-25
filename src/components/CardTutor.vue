<script setup>
    import Boton from "./Boton.vue";
    defineProps({
    name: String,
    subject: String,
    description: String,
    availability: String
    });

    const emit = defineEmits(['agendar'])
</script>

<template>
  <div class="card">
    
    <!-- Foto -->
    <div class="photo"></div>

    <!-- Info -->
    <h3 class="name">{{ name }}</h3>
    <p class="subject"><strong>Materia:</strong> {{ subject }}</p>
    <p class="description">{{ description }}</p>
    <p class="availability">
      <strong>Disponibilidad:</strong> {{ availability }}
    </p>

    <!-- Botón -->
    <Boton @click="emit('agendar')">Agendar</Boton>

  </div>
</template>

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

/* Foto circular */
.photo {
  width: 90px;
  height: 90px;
  background: #bbb;
  border-radius: 50%;
  margin-bottom: 0.5rem;
}

/* Textos */
.name {
  font-size: 1.2rem;
  font-weight: bold;
}

.subject, .description, .availability {
  font-size: 0.9rem;
  text-align: center;
}
</style>
