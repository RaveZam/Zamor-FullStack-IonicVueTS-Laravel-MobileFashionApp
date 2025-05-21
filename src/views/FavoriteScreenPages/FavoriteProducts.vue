<template>
  <ion-page>
    <ion-content>
      <Header />
      <div class="mx-4 mt-8 font-latoGoogle">
        <span class="text-2xl">FAVORITES</span>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, onIonViewWillEnter } from "@ionic/vue";
import Header from "@/components/Header.vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
import axios from "axios";

const { getCookie } = useGetCookie();
const token = getCookie("authToken");

function fetchFavorites() {
  axios
    .get("http://127.0.0.1:8000/api/favorite", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

onIonViewWillEnter(() => {
  fetchFavorites();
});
</script>
