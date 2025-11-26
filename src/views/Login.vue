<template>
  <!-- Encabezado sin menú -->
  <Encabezado :mostrarMenu="false" />

  <Contenido>
    <div class="login-wrapper">
      <div class="login-card">
        <h2>Iniciar Sesión</h2>

        <Input label="Correo" v-model="email" class="input-space" />
        <Input label="Contraseña" type="password" v-model="password" class="input-space" />

        <Boton class="btn-login" @click="login">Entrar</Boton>
      </div>
    </div>
  </Contenido>
</template>

<script setup>
import { ref } from 'vue'
import Encabezado from '../components/Encabezado.vue'
import Contenido from '../components/Contenido.vue'
import Input from '../components/Input.vue'
import Boton from '../components/Boton.vue'
import { useRouter } from 'vue-router'

const email = ref("")
const password = ref("")
const router = useRouter()

function login() {
  router.push("/inicio")
}
</script>

<style scoped>
.login-wrapper {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: #ffffff;
  padding: 40px 45px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 360px;
}

.login-card h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 26px;
  font-weight: 600;
}

.input-space {
  margin-bottom: 18px;
}

.btn-login {
  width: 100%;
  margin-top: 10px;
}
</style>
