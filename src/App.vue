<template>
  <div id="app">
    <nav>
      <div class="nav-left">
        <img src="@/assets/uab.jpeg" alt="Logo" class="nav-uab" />
        <span class="nav-title">Programação Web Avançada</span>
      </div>

      <div class="nav-links">
        <router-link to="/">Quem Sou Eu</router-link> |
        <router-link to="/oque-faco">O Que Faço</router-link> |
        <router-link to="/hobbies">Hobbies</router-link>
      </div>
    </nav>

    <router-view />
    <FooterApp />
  </div>
</template>

<script>
import FooterApp from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    FooterApp,
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
}

#app {
  padding-bottom: 150px;
}

nav {
  background-color: #87ceeb;
  padding: 1rem 2rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/*CSS para o logo*/
.nav-uab {
  width: 50px;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}

.nav-title {
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

.nav-links {
  flex: 1;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 1rem;
}

nav a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}

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
