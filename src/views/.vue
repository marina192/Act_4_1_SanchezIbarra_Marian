<template>
    <Encabezado/>
    <Contenido>
        <div>
        <h1>Inicio</h1>
        <button @click="$router.push('/tutores')">Tutores</button>
        </div>
    </Contenido>
    <Calendario />
</template>

<script setup>
    import Encabezado from '../components/Encabezado.vue'
    import Contenido from '../components/Contenido.vue'
    import Calendario from '../components/Calendario.vue'
</script>

<style scoped>

</style>
