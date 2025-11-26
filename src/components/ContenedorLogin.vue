<!--
  Componente: ContenedorLogin.vue
  Descripción:
  Contenedor genérico con estilo de tarjeta usado únicamente para uniformar ciertos estilos
  como el color y tamaño de la fuente usada en todo el contenido de la vista del login.
-->

<template>
  <div 
    style="
      background: white;
      padding: 30px;
      border-radius: 10px;
      width: 300px;
      margin: auto;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    "
  >
    <slot />
  </div>
</template>