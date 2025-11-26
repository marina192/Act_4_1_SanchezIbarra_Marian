<!--
  Componente: Contenido.vue
  Descripción:
  Contenedor genérico con estilo de tarjeta usado únicamente para uniformar ciertos estilos
  como el color y tamaño de la fuente usada en todo el contenido de una vista.
-->

<template>
  <div class="contenido">
    <slot />
  </div>
</template>

<style scoped>
  .contenido {
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 80px;
    padding: 2rem;
    font-family: sans-serif;
    font-size: 1rem;
  }
</style>