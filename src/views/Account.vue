<template>
  <ion-page>
    <ion-content>
      <div class="font-lato flex flex-col h-[100%]">
        <div>
          <h1>{{ userData.username }}</h1>

          <h1>Email: {{ userData.email }}</h1>
        </div>

        <div
          @click="terminateSession"
          class="border-2 border-black w-2/4 text-center px-4 py-2 mt-40 mx-4 hover:cursor-pointer"
        >
          <span>END SESSION</span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";

const userData = JSON.parse(localStorage.getItem("userData") || "{}");

function terminateSession() {
  localStorage.clear();
  document.cookie =
    "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie =
    "remember_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

console.log(userData);
</script>
