import Vue from "vue";
import VueRouter from "vue-router";
import QuemSouEu from "../views/QuemSouEu.vue";
import OQueFaco from "../views/OQueFaco.vue";
import Hobbies from "../views/Hobbies.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "QuemSouEu", component: QuemSouEu },
  { path: "/oque-faco", name: "OQueFaco", component: OQueFaco },
  { path: "/hobbies", name: "Hobbies", component: Hobbies },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
