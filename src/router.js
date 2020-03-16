import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"

Vue.use(VueRouter);

const routes = [
  { path : "/", component : HelloWorld },
  { path : "/login", component : LoginPage },
  { path : "/register", component : RegisterPage},
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  routes,
  mode : "history"
});