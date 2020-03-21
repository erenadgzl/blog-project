import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import PostAdd from "./components/post/PostAdd"

Vue.use(VueRouter);

const routes = [
  { path : "/", component : HelloWorld },
  { path : "/login", component : LoginPage },
  { path : "/register", component : RegisterPage},
  { path : "/post/add", component : PostAdd},
  { path : "*", redirect : "/"}
];

export const router = new VueRouter({
  routes,
  mode : "history"
});