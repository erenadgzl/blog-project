import Vue from "vue";
import HelloWorld from "./components/HelloWorld"
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path : "/", component : HelloWorld },
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  mode : "history",
  routes
});