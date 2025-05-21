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
        component: () => import("@/views/AccountPages/Account.vue"),
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
      {
        path: "SummaryPage",
        component: () => import("@/views/TransactionScreens/SummaryPage.vue"),
      },
      {
        path: "AuthorizePaymentPage",
        component: () =>
          import("@/views/TransactionScreens/AuthorizePaymentPage.vue"),
      },
      {
        path: "AddressPage",
        component: () => import("@/views/AddressPage/AddressPage.vue"),
      },
      {
        path: "ViewAddressList",
        component: () => import("@/views/AddressPage/ViewAddressList.vue"),
      },
      {
        path: "PaymentOptionScreen",
        component: () =>
          import("@/views/TransactionScreens/PaymentOptionScreen.vue"),
      },
      {
        path: "SuccessfulTransactionPage",
        component: () =>
          import("@/views/TransactionScreens/SuccessfulTransactionPage.vue"),
      },
      {
        path: "SettingsPage",
        component: () => import("@/views/AccountPages/SettingsPage.vue"),
      },
      {
        path: "FavoriteProducts",
        component: () =>
          import("@/views/FavoriteScreenPages/FavoriteProducts.vue"),
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
  const protectedPaths = ["/tabs/Home", "/tabs/CartPage", "/tabs/Account"];

  if (protectedPaths.includes(to.path)) {
    const token = getCookie("authToken");
    const rememberToken = getCookie("rememberMeToken");

    if (token) {
      console.log("Token Found");
      try {
        await axios.get("http://127.0.0.1:8000/api/validate-token", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Token Verified, proceeding...");
        next();
      } catch (error) {
        console.log("Token expired, redirecting...");
        if (rememberToken) {
          console.log("Remember Token Found");
          try {
            await axios
              .get("http://127.0.0.1:8000/api/validate-token", {
                headers: { Authorization: `Bearer ${rememberToken}` },
              })
              .then(
                (response) =>
                  (document.cookie = `authToken=${response.data.token}; path=/; max-age=86400`)
              );
            console.log("Remember Token Verified, proceeding...");
            next();
          } catch (error) {
            console.log("Token expired, redirecting...");
            window.location.href = "/tabs/Authpage";
          }
        }
      }
    } else {
      if (rememberToken) {
        console.log("Remember Token Found");
        try {
          await axios
            .get("http://127.0.0.1:8000/api/validate-token", {
              headers: { Authorization: `Bearer ${rememberToken}` },
            })
            .then(
              (response) =>
                (document.cookie = `authToken=${response.data.token}; path=/; max-age=86400`)
            );
          console.log("Remember Token Verified, proceeding...");
          next();
        } catch (error) {
          console.log("Token expired, redirecting...");
          window.location.href = "/tabs/Authpage";
        }
      } else {
        console.log("No Token Found, redirecting to login page...");

        window.location.href = "/tabs/Authpage";
      }
    }
  } else {
    console.log("No auth check needed for this page.");
    next();
  }
});

export default router;
