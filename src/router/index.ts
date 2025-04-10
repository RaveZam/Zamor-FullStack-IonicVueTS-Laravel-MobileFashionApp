import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import TabsPage from "../views/TabsPage.vue";
import axios from "axios";
import { useGetCookie } from "@/Hooks/useGetCookies";

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
        meta: { requiresAuth: true },
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
        path: "CartPage",
        component: () => import("@/views/CartPage.vue"),
      },
      {
        path: "Account",
        component: () => import("@/views/Account.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/product/:slug",
        props: (route) => ({ slug: route.params.slug }),
        component: () => import("@/views/ProductPage.vue"),
      },
      {
        path: "Authpage",
        component: () => import("@/views/auth/Authpage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

const { getCookie } = useGetCookie();

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = getCookie("authToken");
    const rememberToken = getCookie("rememberMeToken");
    console.log("Checking for token...");
    if (!token) {
      console.log("Token not found redirecting...");
      next("/tabs/Authpage");
      return;
    }

    try {
      await axios.get("http://127.0.0.1:8000/api/validate-token", {
        headers: { Authorization: `Bearer ${rememberToken}` },
      });
      console.log("Token Verified Redirecting...");
      next();
    } catch (error) {
      console.log(token);
      console.log("Token Has Expired Redirecting...");
      next("/tabs/Authpage");
    }
  } else {
    console.log("Token not Required For This Page");
    next();
  }
});

export default router;

//remove the function that it needs to be checked per page reload.
