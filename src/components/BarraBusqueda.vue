<template>
  <div class="search-container">
    <input 
      v-model="search"
      type="text"
      class="search-input"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', search)"
    />
    <button class="search-btn" @click="emitSearch">
      Buscar
    </button>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const props = defineProps({
  modelValue: String,
  placeholder: {
      type: String,
      default: "Buscar..."
  }
  });

  const emit = defineEmits(["update:modelValue", "search"]);

  const search = ref(props.modelValue || "");

  const emitSearch = () => {
  emit("search", search.value);
  };
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

  .search-btn {
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: none;
    background: #0288d1;
    color: white;
    cursor: pointer;
  }
</style>
