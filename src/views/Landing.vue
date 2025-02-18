<template>
  <ion-page>
    <div
      class="h-full w-full font-lato z-20 bg-white flex justify-center items-center flex-col"
    >
      <div
        class="text-center items-center mt-auto mb-16 flex flex-col gap-4 z-20"
      >
        <div class="w-3/4 justify-center flex flex-col items-center">
          <h1 class="font-latoTitle">FASHION AT YOUR FINGERTIPS</h1>
          <div class="w-3/4">
            <p class="font-latoSubTitle">
              Shop from a wide selection of brands and style
            </p>
          </div>
        </div>
        <div
          @click="toMenu"
          class="bg-white text-black py-4 rounded-full w-4/6"
        >
          <p class="font-latoSubTitle">LET'S SHOP</p>
        </div>
      </div>
      <video
        class="absolute inset-0 z-10 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
      >
        <!-- ADD MORE VIDEOS TO PLAY THROUGH  -->
        <!-- ADD MORE VIDEOS TO PLAY THROUGH  -->
        <!-- ADD MORE VIDEOS TO PLAY THROUGH  -->
        <!-- ADD MORE VIDEOS TO PLAY THROUGH  -->
        <!-- ADD MORE VIDEOS TO PLAY THROUGH  -->
        <source src="/video/background.mp4" type="video/mp4" />
      </video>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonButton } from "@ionic/vue";
import { useRouter } from "vue-router";
const router = useRouter();

const toMenu = () => {
  router.push("/tabs/Home");
};
</script>
