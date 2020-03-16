import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld"
import LoginPage from "./components/LoginPage"

Vue.use(VueRouter);

const routes = [
  { path : "/", component : HelloWorld },
  { path : "/login", component : LoginPage },
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  routes,
  mode : "history"
});