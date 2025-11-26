<template>
  <header class="encabezado">
    <div class="encabezado-izquierda">
      <img src="../assets/LogoUaslp.png" alt="Logo" class="encabezado-logo" />
      <h1 class="encabezado-titulo">{{ titulo }}</h1>
    </div>

    <nav v-if="mostrarMenu && !isMobile" class="menu menu-desktop">
      <MenuItem
        v-for="item in items"
        :key="item.value ?? item.label"
        :label="item.label"
        :value="item.value"
        :active="isActive(item)"
        @select="goTo(item)"
      />
    </nav>

    <Hamburguesa v-if="mostrarMenu && isMobile" :items="items" />
  </header>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

  import MenuItem from './MenuItem.vue'
  import Hamburguesa from './Hamburguesa.vue'

  const props = defineProps({
    titulo: { type: String, default: 'Sistema de Tutorías' },
    mostrarMenu: { type: Boolean, default: true },
    items: {
      type: Array,
      default: () => [
        { label: 'Inicio', value: '/inicio' },
        { label: 'Tutores', value: '/tutores' },
        { label: 'Perfil' },
        { label: 'Configuración' }
      ]
    }
  })

  const route = useRoute()
  const router = useRouter()

  const isMobile = ref(false)
  let mq = null

  function updateIsMobile(e) {
    isMobile.value = e ? e.matches : mq.matches
  }

  onMounted(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      mq = window.matchMedia('(max-width: 800px)')
      // update primero
      updateIsMobile(mq)
      // escuchar cambios
      mq.addEventListener ? mq.addEventListener('change', updateIsMobile) : mq.addListener(updateIsMobile)
    } else {
      isMobile.value = false
    }
  })

  onUnmounted(() => {
    if (mq) {
      mq.removeEventListener ? mq.removeEventListener('change', updateIsMobile) : mq.removeListener(updateIsMobile)
    }
  })

  function isActive(item) {
    if (!item || !item.value) return false
    const val = String(item.value)
    if (val.startsWith('/')) {
      return route.path === val || route.path.startsWith(val + '/')
    }
    if (route.name) return String(route.name) === val
    return false
  }

  function goTo(item) {
    if (!item || !item.value) return
    const val = String(item.value)
    if (val.startsWith('/')) router.push(val).catch(()=>{})
    else router.push({ name: val }).catch(()=>{})
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
  padding: 0.5rem 1.25rem;
  background: linear-gradient(90deg,#002E5A 0%,#01497C 100%);
  color: white;
  z-index: 1000;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial;
}

.encabezado-izquierda { display:flex; align-items:center; gap:1rem; }
.encabezado-logo { height:48px; width:auto; object-fit:contain; }
.encabezado-titulo { font-size:1.25rem; font-weight:700; }

.menu-desktop { display:flex; gap:0.6rem; align-items:center; }

@media (max-width: 800px) {
  .menu-desktop { display: none !important; }
  .encabezado-titulo { font-size: 1.05rem; }
  .encabezado-logo { height:40px; }
}
</style>
