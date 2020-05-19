import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/register.vue"),
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },

  {
    path: "/",
    name: "btnav",
    redirect: "/index",
    component: () => import("../views/index/btnav.vue"),

    children: [
      { path: "index", name: "首页", component: () => import("../views/index/index.vue") },
      { path: "list", name: "分类", component: () => import("../views/index/list.vue") },
      { path: "cart", name: "购物车", component: () => import("../views/index/cart.vue") },
      { path: "search", name: "搜索", component: () => import("../views/index/search.vue") },
      { path: "mine", name: "我的", component: () => import("../views/index/mine.vue"), meta: { requireLogin: true } },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
