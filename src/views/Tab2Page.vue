<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Tab 2</ion-title>
      </ion-toolbar>
    </ion-header> -->
    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header> -->
      <div class="w-full flex justify-center h-full items-center">
        <div class="flex flex-col w-1/2">
          <input
            class="p-4 rounded-md boreder-2 border-black font-roboto"
            type="number"
            placeholder="Enter Number"
          />
          <ion-button class="mt-4 font-roboto" @click="computed()"
            >Compute Grade</ion-button
          >
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

const grade = ref(0);
const computed = () => {
  if (grade.value <= 75) {
    console.log("You Didnt Suck Ass");
  } else {
    console.log("You suck ass");
  }
};
</script>
