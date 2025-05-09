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
import { IonPage, IonContent, alertController } from "@ionic/vue";

const userData = JSON.parse(localStorage.getItem("userData") || "{}");

async function terminateSession() {
  const alert = await alertController.create({
    header: userData.username.toUpperCase(),
    message: "Are you sure you want to log out of Zamor?",
    buttons: [
      {
        text: "Yes",
        handler: async () => {
          localStorage.clear();
          document.cookie =
            "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          document.cookie =
            "rememberMeToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

          window.location.href = "/tabs/Authpage";
        },
      },
      {
        text: "No",
        role: "cancel",
      },
    ],
  });

  await alert.present();
}
</script>
