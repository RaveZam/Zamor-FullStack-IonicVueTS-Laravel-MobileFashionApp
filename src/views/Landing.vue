<template>
  <ion-page
    ><div class="bg-white h-screen font-lato">
      <h1 class="text-black">Fashion At Your Fingertips</h1>
      <button
        @click="console.log(message)"
        class="text-black border-2 border-black"
      >
        LET'S SHOP!
      </button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from "@ionic/vue";

const message = "push";
</script>
