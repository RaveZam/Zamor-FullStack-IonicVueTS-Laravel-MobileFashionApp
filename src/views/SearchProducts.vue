<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-full h-full">
        <div class="font-latoGoogle fixed z-50 flex gap-x-4 my-8 mx-4">
          <div>ALL</div>
          <div>MAN</div>
          <div>WOMAN</div>
        </div>

        <div class="border-b flex mx-4 justfiy-center pt-24 border-black">
          <input
            class="w-full focus:outline-none font-latoGoogle justify-center flex text-center py-4"
            placeholder="WHAT ARE YOU LOOKING FOR?"
            type="text"
          />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";
</script>
