<template>
  <ion-page>
    <ion-content>
      <div class="font-lato flex flex-col h-[100%] mx-2">
        <div class="flex flex-col m-4 mt-12 gap-y-4">
          <span class="text-2xl"
            >Hi {{ userData.username.toUpperCase() }}!</span
          >
          <div class="flex flex-col gap-y-1">
            <span class=""> Email</span>
            <span class="text-lg"> {{ userData.email }}</span>
          </div>
          <div class="flex flex-col gap-y-1 pr-4">
            <div class="flex flex-row justify-between">
              <span>Address</span>
              <IonIcon
                @click="router.push('/tabs/AddressPage')"
                class="hover:cursor-pointer"
                name="chevron-forward-outline"
              ></IonIcon>
            </div>
            <span class="text-lg"> Victoria Alicia, Isabela</span>
          </div>
          <div class="flex flex-col gap-y-1">
            <span>Password</span>
            <span class="text-lg"> *********</span>
          </div>
        </div>

        <div
          @click="terminateSession"
          class="border-2 border-black w-2/4 text-center px-4 py-2 mt-20 mx-4 hover:cursor-pointer"
        >
          <span>END SESSION</span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import router from "@/router";
import { IonPage, IonContent, alertController, IonIcon } from "@ionic/vue";
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
