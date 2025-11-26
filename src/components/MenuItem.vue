<!--
  Componente: MenuItem.vue
  Descripción:
  Representa un ítem individual de un menú, que puede ser seleccionado y resalta visualmente
  en caso de encontrarse activo en la pestaña correspondiente.
  Características:
  - Recibe props: label (String), value (String), active (Boolean).
-->

<template>
  <div
    class="menu-item"
    :class="{ active }"
    role="button"
    tabindex="0"
    @click="$emit('select', value)"
    @keydown.enter="$emit('select', value)"
    @keydown.space.prevent="$emit('select', value)"
  >
    {{ label }}
  </div>
</template>

<script setup>
  defineProps({
    label: { type: String, required: true },   // Texto visible
    value: { type: [String, Number], required: true }, // Valor asociado
    active: { type: Boolean, default: false }  // Estado seleccionado
  });
  defineEmits(["select"]);
</script>

<style scoped>
  .menu-item {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  .menu-item:hover {
    background: #f0f0f0;
    color: #000000ff;
  }

  .menu-item.active {
    background: #0288d1;
    color: white;
  }
</style>
