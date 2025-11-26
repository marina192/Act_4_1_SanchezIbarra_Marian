<template>
  <header class="encabezado">
    <div class="encabezado-izquierda">
      <img src="../assets/LogoUaslp.png" alt="Logo" class="encabezado-logo" />
      <h1 class="encabezado-titulo">{{ titulo }}</h1>
    </div>

    <nav v-if="mostrarMenu" class="menu">
      <MenuItem
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :active="isActive(item)"
        @select="goTo(item)"
      />
    </nav>
  </header>
</template>

<script setup>
  import { useRoute, useRouter } from "vue-router";
  import MenuItem from "./MenuItem.vue";

  const props = defineProps({
    titulo: {
      type: String,
      default: "Sistema de Tutorías"
    },

    mostrarMenu: {
      type: Boolean,
      default: true
    },

    items: {
      type: Array,
      default: () => [
        { label: "Inicio", value: "/inicio" },
        { label: "Tutores", value: "/tutores" },
        { label: "Perfil" },
        { label: "Configuración" }
      ]
    }
  });

  const route = useRoute();
  const router = useRouter();

  function isActive(item) {
    return route.path.startsWith(item.value);
  }

  function goTo(item) {
    router.push(item.value);
  }
</script>

<style scoped>
  .encabezado {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.5rem 2rem;
    border-bottom: 2px solid #ccc;
    background: #002E5A;
    color: white;

    z-index: 1000;
    font-family: sans-serif;
    font-size: 1rem;
  }

  .encabezado-izquierda {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .encabezado-logo {
    height: 50px;
  }

  .encabezado-titulo {
    font-size: 1.6rem;
    font-weight: bold;
  }

  .menu {
    display: flex;
    gap: 1rem;
  }
</style>