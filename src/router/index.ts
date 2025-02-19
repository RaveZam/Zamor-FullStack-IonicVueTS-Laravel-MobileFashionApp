import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",

    redirect: "/tabs/Landing",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/Landing",
      },
      {
        path: "Home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "Landing",
        name: "Landing",
        component: () => import("@/views/Landing.vue"),
      },
      {
        path: "SearchProducts",
        component: () => import("@/views/SearchProducts.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3Page.vue"),
      },
      {
        path: "Account",
        component: () => import("@/views/Account.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
