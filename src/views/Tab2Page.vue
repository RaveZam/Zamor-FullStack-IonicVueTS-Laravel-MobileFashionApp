<template>
  <ion-page>
    <ion-content :fullscreen="true"> </ion-content>
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
