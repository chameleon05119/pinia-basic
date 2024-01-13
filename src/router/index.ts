import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import Counter from "@/views/Counter.vue";

// viewsフォルダ内にある各ページのルーティング設定を行う
// RouteRecordRaw型を用いて配列変数routeSettingsを定義
const routeSettings: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Counter",
    component: Counter,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
});

export default router;
