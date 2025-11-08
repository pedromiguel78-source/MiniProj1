// Configuração principal das rotas da aplicação
import Vue from "vue";
import VueRouter from "vue-router";
import QuemSouEu from "../views/QuemSouEu.vue";
import OQueFaco from "../views/OQueFaco.vue";
import Hobbies from "../views/Hobbies.vue";

Vue.use(VueRouter);

// Definição das rotas principais da SPA
const routes = [
  { path: "/", name: "QuemSouEu", component: QuemSouEu },
  { path: "/oque-faco", name: "OQueFaco", component: OQueFaco },
  { path: "/hobbies", name: "Hobbies", component: Hobbies },
];

// Criação e exportação do router
const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
