<template>
  <ion-page>
    <div class="h-screen w-screen z-20 bg-white flex flex-col font-latoGoogle">
      <div
        class="text-left items-center mt-auto mb-[40%] flex flex-col gap-4 z-20"
      >
        <h1
          class="font-latoLandingGoogle font-bold mix-blend-difference text-white"
        >
          ZAMOR
        </h1>
        <div class="w-4/5 flex flex-col mt-[10%]">
          <h1 class="font-latoGoogle text-2xl text-white">
            FASHION AT YOUR FINGERTIPS
          </h1>
          <div class="mr-12">
            <p class="font-latoSubTitle opacity-90">
              Shop from a wide selection of brands and style
            </p>
          </div>
        </div>
        <div
          @click="toMenu"
          class="text-center border-1 mt-4 text-white border-white py-4 w-4/6"
        >
          <p class="font-lato">LET'S SHOP</p>
        </div>
      </div>

      <video
        v-for="(video, index) in videos"
        :key="video"
        :src="video"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        autoplay
        muted
        loop
        playsinline
        :class="{
          'opacity-100': index === activeVideo,
          'opacity-0': index !== activeVideo,
        }"
      />
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from "@ionic/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const toMenu = () => {
  router.push("/tabs/Home");
};

const videos = [
  "/video/background2.mp4",
  "/video/background.mp4",
  "/video/background4.mp4",
  "/video/background3.mp4",
];

const activeVideo = ref(0);
let intervalId: number | null = null;

const swapVideo = () => {
  activeVideo.value = (activeVideo.value + 1) % videos.length;
};

onMounted(() => {
  intervalId = window.setInterval(swapVideo, 2000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>
