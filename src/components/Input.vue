<script setup>
defineProps({
  label: String,
  type: {
    type: String,
    default: "text"
  },
  modelValue: String
})

const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <div style="margin-bottom: 15px; display: flex; flex-direction: column;">
    <label>{{ label }}</label>
    <input
      :type="type"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      style="padding: 8px; border: 1px solid #aaa; border-radius: 5px;"
    >
  </div>
</template>