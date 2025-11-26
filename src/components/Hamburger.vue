<template>
  <button
    class="hamburger"
    :class="[{ active: modelValue }, size, variant]"
    :aria-label="ariaLabel"
    :aria-expanded="modelValue ? 'true' : 'false'"
    :aria-controls="controlsId"
    type="button"
    @click="toggle"
  >
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: { type: Boolean, default: false }, // estado abierto/cerrado
    size: { type: String, default: 'md' },         // xs | sm | md | lg
    variant: { type: String, default: 'default' }, // default | primary | contrast
    ariaLabel: { type: String, default: 'Abrir menú' },
    controlsId: { type: String, default: '' }      // id del panel que controla
  });
  const emit = defineEmits(['update:modelValue', 'toggle']);

  const toggle = () => {
    emit('update:modelValue', !props.modelValue);
    emit('toggle', !props.modelValue);
  };
</script>

<style scoped>
:root {
  --hamburger-size-xs: 18px;
  --hamburger-size-sm: 22px;
  --hamburger-size-md: 28px;
  --hamburger-size-lg: 34px;

  --hamburger-color-default: #2b2b2b;
  --hamburger-color-primary: #0288d1;
  --hamburger-color-contrast: #111;
}

/* Base */
.hamburger {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: var(--hamburger-size-md);
  height: var(--hamburger-size-md);
  padding: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.hamburger .bar {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--hamburger-color-default);
  border-radius: 2px;
  transition: transform 200ms ease, opacity 200ms ease, background 200ms ease;
}

/* Size variants */
.hamburger.xs { width: var(--hamburger-size-xs); height: var(--hamburger-size-xs); }
.hamburger.sm { width: var(--hamburger-size-sm); height: var(--hamburger-size-sm); }
.hamburger.md { width: var(--hamburger-size-md); height: var(--hamburger-size-md); }
.hamburger.lg { width: var(--hamburger-size-lg); height: var(--hamburger-size-lg); }

/* Color variants */
.hamburger.primary .bar { background: var(--hamburger-color-primary); }
.hamburger.contrast .bar { background: var(--hamburger-color-contrast); }

/* Active (animación a “X”) */
.hamburger.active .bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.active .bar:nth-child(2) { opacity: 0; }
.hamburger.active .bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Focus visible */
.hamburger:focus-visible {
  outline: 2px solid #0288d1;
  outline-offset: 2px;
}
</style>
