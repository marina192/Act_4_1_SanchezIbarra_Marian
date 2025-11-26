<!--
  Componente: CardCurso.vue
  Descripción:
   Tarjeta visual para mostrar información básica de un curso al que se encuentra inscrito
   el alumno actualmente junto con su progreso, cuenta con información como el nombre, 
   grupo y su indicador de progreso. Incluye un ícono únicamente representativo y su barra 
   de progreso.
   Características:
   - Recibe props: name (String), group (String) y progress (Number).
   - Muestra una barra de progreso con animación basada en el porcentaje recibido.
-->

<template>
  <div class="course-card">
    <div class="course-header">
      <div class="icon">
        📘
      </div>

      <div class="info">
        <h3 class="name">{{ name }}</h3>
        <p class="group">Grupo: {{ group }}</p>
      </div>
    </div>

    <div class="progress-container">
      <div class="progress-bar">
        <div
          class="progress-fill"
          :style="{ width: progress + '%' }"
        ></div>
      </div>
      <span class="progress-text">{{ progress }}%</span>
    </div>
  </div>
</template>

<script setup>
    defineProps({
        name: String,
        group: String,
        progress: Number
    });
</script>

<style scoped>
    .course-card {
    width: 320px;
    background: #ffffff;
    border-radius: 16px;
    padding: 1.2rem;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .course-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.18);
    }

    .course-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    }

    .icon {
    font-size: 2.3rem;
    background: #0288d1;
    color: white;
    padding: 0.6rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .info h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 700;
    }

    .info .group {
    margin: 0;
    color: #555;
    font-size: 0.9rem;
    }

    .progress-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    }

    .progress-bar {
    flex: 1;
    height: 10px;
    background: #e0e0e0;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    }

    .progress-fill {
    height: 100%;
    background: #0288d1;
    border-radius: 20px;
    transition: width 0.4s ease;
    }

    .progress-text {
    font-size: 0.9rem;
    font-weight: bold;
    width: 40px;
    text-align: right;
    }
</style>