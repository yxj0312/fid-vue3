import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { App } from 'vue'

import Home from "../views/Home.vue";

// import common from '@/router/common'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/dashboard',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index.vue'),
    meta: {
      title: '首页'
    },
  }
]

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHistory(),
  routes,
});

export default router;
