<template>
  <div id="app">
    <!-- Barra de navegação principal -->
    <nav>
      <div class="nav-left">
        <!-- Logótipo e título -->
        <img src="@/assets/uab.jpeg" alt="Logo" class="nav-uab" />
        <span class="nav-title">Programação Web Avançada</span>
      </div>

      <!-- Links de navegação -->
      <div class="nav-links">
        <router-link to="/">Quem Sou Eu</router-link> |
        <router-link to="/oque-faco">O Que Faço</router-link> |
        <router-link to="/hobbies">Hobbies</router-link>
      </div>
    </nav>

    <!-- Área onde o conteúdo das páginas é exibido -->
    <router-view />

    <!-- Rodapé da aplicação -->
    <FooterApp />
  </div>
</template>

<script>
// Importa o componente do rodapé
import FooterApp from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    FooterApp,
  },
};
</script>

<style>
/* Estilos gerais da aplicação */
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

/* Espaço extra no final para o footer fixo */
#app {
  padding-bottom: 150px;
}

/* Barra de navegação */
nav {
  background-color: #87ceeb;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Lado esquerdo da navegação */
.nav-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* Logótipo da UAb */
.nav-uab {
  width: 50px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

/* Título da aplicação */
.nav-title {
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

/* Links do menu */
.nav-links {
  flex: 1;
  text-align: right;
  margin-right: 2rem;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}

/* Destaque do link ativo */
nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

/* Responsividade para ecrãs pequenos */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-left {
    width: 100%;
    justify-content: center;
  }

  .nav-links {
    width: 100%;
  }
}
</style>
