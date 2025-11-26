<template>
  <button
    class="btn-rounded"
    :class="variant"
    @click="$emit('click')"
    type="button"
  >
    <slot />
  </button>
</template>

<script setup>
  defineProps({
    variant: {
      type: String,
      default: "primary" // estilos: primary, secondary, etc.
    }
  });
  const emit = defineEmits(['click'])
</script>

<style scoped>
.btn-rounded {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 999px; /* esquinas totalmente redondeadas */
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
}

/* Variantes */
.btn-rounded.primary {
  background: #0288d1;
  color: white;
}
.btn-rounded.primary:hover {
  background: #0277bd;
}

.btn-rounded.secondary {
  background: #e0f7fa;
  color: #0288d1;
}
.btn-rounded.secondary:hover {
  background: #b2ebf2;
}
</style>
