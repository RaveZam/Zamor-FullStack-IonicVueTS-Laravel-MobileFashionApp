<template>
  <ion-page>
    <div class="h-full w-full z-20 bg-white flex flex-col">
      <div
        class="text-left items-center mt-auto mb-[20rem] flex flex-col gap-4 z-20"
      >
        <div class="w-4/5 flex flex-col items-center">
          <h1 class="font-latoTitle text-white">FASHION AT YOUR FINGERTIPS</h1>
          <div>
            <p class="font-latoSubTitle opacity-90">
              Shop from a wide selection of brands and style
            </p>
          </div>
        </div>
        <div
          @click="toMenu"
          class="text-center border-1 text-white border-white py-4 w-4/6"
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
import { IonPage, IonButton, IonImg } from "@ionic/vue";
import { onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useGetCookie } from "@/Hooks/useGetCookies";
import { useLoadingScreen } from "@/Hooks/useLoadingScreen";

// const {l}

import axios from "axios";

const { getCookie } = useGetCookie();
const router = useRouter();

const toMenu = () => {
  console.log("Finding Remember Me Token");
  const remember = getCookie("rememberMeToken");

  if (!remember) {
    console.log("No Remember Me Token Found");
  } else {
    console.log("Remember Token Found Verifying...");
    try {
      axios.get("http://127.0.0.1:8000/api/validate-token", {
        headers: { Authorization: `Bearer ${remember}` },
      });
      console.log("Token Verified...");
      router.push("/tabs/Authpage");
    } catch (error) {
      console.log("Token Has Expired Requiring Login Again...");
    }
  }
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

const stillLoggedIn = ref<boolean>(true);

onMounted(() => {
  intervalId = window.setInterval(swapVideo, 2000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>
