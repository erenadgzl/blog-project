import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import PostAdd from "./components/post/PostAdd"
import PostList from "./components/post/PostList"
import PostDetail from "./components/post/PostDetail"

Vue.use(VueRouter);

const routes = [
  { path : "/post", component : PostList },
  { path : "/post/add", component : PostAdd},
  { path : "/post/:id", component : PostDetail},
  { path : "/login", component : LoginPage },
  { path : "/register", component : RegisterPage},
  { path : "*", redirect : "/post"}
];

export const router = new VueRouter({
  routes,
  mode : "history"
});