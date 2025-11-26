<!--
  Componente: BarraBusqueda.vue
  Descripción:
  Barra de búsqueda reutilizable que incluye un campo de texto y un botón de acción.
  El texto del placeholder puede personalizarse mediante la prop 'placeholder'.
  Utiliza el componente Boton.vue para el botón, con la variante visual 'secondary'.
  El input se expande automáticamente para ocupar todo el ancho disponible.
-->

<template>
  <div class="search-container">
    <input 
      type="text" 
      class="search-input" 
      :placeholder="placeholder" 
    />
    <Boton variant="secondary">Buscar</Boton>
  </div>
</template>

<script setup>
  import Boton from "./Boton.vue";
  const props = defineProps({
    placeholder: {
      type: String,
      default: "Buscar..."
    }
  });
</script>

<style scoped>
.search-container {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 100%;
}

.search-input {
  flex: 1;
  padding: 0.5rem 0.7rem;
  border-radius: 10px;
  border: 1px solid #ccc;
}
</style>