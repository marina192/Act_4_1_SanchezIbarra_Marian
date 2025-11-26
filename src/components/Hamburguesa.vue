<template>
  <div class="hamburger-menu">
    <!-- Botón hamburguesa -->
    <button class="hamburger" @click="toggleMenu">
      ☰
    </button>

    <!-- Menú móvil desplegable -->
    <nav v-if="isOpen" class="menu-mobile">
      <MenuItem
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :active="isActive(item)"
        @select="goTo(item)"
      />
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import MenuItem from "./MenuItem.vue";

const props = defineProps({
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

const isOpen = ref(false);
function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.hamburger {
  font-size: 1.8rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.menu-mobile {
  position: absolute;
  top: 100%;
  right: 0;
  background: #002E5A;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

@media (min-width: 801px) {
  .hamburger {
    display: none;
  }
  .menu-mobile {
    display: none;
  }
}
</style>
