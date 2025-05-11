<template>
  <ion-page>
    <ion-content>
      <Header />

      <div class="p-8 flex flex-col gap-y-2">
        <span class="font-latoGoogle text-[1.5rem]">Find Your Clothes</span>
        <div
          class="h-28 overflow-hidden rounded-md items-center flex justify-center"
        >
          <IonImg
            class="mt-auto"
            src="./images/Posters/poster2jpg.jpg"
          ></IonImg>
          <span class="font-latoGoogle text-[1.5rem] absolute text-white">
            SALES</span
          >
        </div>
        <div
          class="h-28 overflow-hidden rounded-md items-center flex justify-center"
        >
          <IonImg src="./images/Posters/poster1.webp"></IonImg>
          <span class="font-latoGoogle text-[1.5rem] absolute text-white">
            EXPLORE</span
          >
        </div>
        <div
          class="h-28 overflow-hidden rounded-md flex items-center justify-center text-center"
        >
          <IonImg
            class="mt-auto"
            src="./images/Posters/tommyposter.webp"
          ></IonImg>
          <span class="font-latoGoogle text-[1.5rem] absolute text-white">
            FEATURES</span
          >
        </div>

      </div>
 
    
        <div class="flex whitespace-nowrap animate-scroll">
          <h1 class="font-bermirs mx-4">Featured</h1>
          <h1 class="font-bermirs mx-4">Featured</h1>
          <h1 class="font-bermirs mx-4">Featured</h1>
          <h1 class="font-bermirs mx-4">Featured</h1>
          <h1 class="font-bermirs mx-4">Featured</h1>
          <h1 class="font-bermirs mx-4">Featured</h1>
        </div>

        <Swiper
          ref="swiperRef"
          :modules="[Autoplay, Pagination]"
          :slides-per-view="1"
  
          :space-between="10"
          loopedSlidesLimit: null
          :loopFillGroupWithBlank="true"
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :init="false"
          class="w-full max-w-[500px]"
        >
          <SwiperSlide
            v-for="(item, index) in duplicatedSlides"
            :key="index"
            class="flex flex-row items-center p-8 pb-4 bg-gray-50"
          >
          <router-link :to="`/product/${item.slug}`">
            <img
              :src="item.productThumbnail"
              :alt="item.productName"
              class="object-cover mb-2"
            />
          </router-link>
            <p class="text-lg font-bold">{{ item.brandName }}</p>
            <p class="text-md">{{ item.productName }}</p>
            <p class="text-sm text-gray-600">
              ₱{{ item.productPrice.toLocaleString() }}
            </p>
          </SwiperSlide>
        </Swiper>

        <div class="flex whitespace-nowrap animate-scroll">
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
          <h1 class="font-bermirs mx-4">Explore</h1>
        </div>
      <div class="grid grid-cols-2 mx-2">
        <div
          class="font-roboto"
          v-for="(productCard, index) in limitedProducts"
          :key="index"
        >
          <div class="p-2 relative">
            <div
              class="absolute right-1 mr-4 mt-4 bg-white px-4 pt-4 pb-2 rounded-md opacity-70"
            >
              <ion-icon name="heart-outline" class="text-2xl"></ion-icon>
            </div>
            <router-link :to="`/product/${productCard.slug}`">
              <ion-img
                @click="console.log(productCard.productName)"
                class="py-2"
                :src="productCard.productThumbnail"
              >
              </ion-img>
            </router-link>
            <div>
              <div class="flex justify-between">
                <span>{{ productCard.brandName }}</span>
                <span class="font-roboto">
                  ₱{{ productCard.productPrice }}</span
                >
              </div>
              <span class="font-robotoMed">{{ productCard.productName }}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="mx-8 mb-12">
          <h1 class="font-latoTitle">Categories</h1>
          <div
            class="border-1 border-black p-4 mt-4 flex items-center justify-center"
          >
            <span class="font-latoGoogle text-[1.2rem]">Tote Bags</span>

            <ion-icon
              class="text-[1.3rem]"
              name="chevron-forward-outline"
            ></ion-icon>
          </div>
          <div
            class="border-1 border-black p-4 text-center flex items-center justify-center"
          >
            <span class="font-latoGoogle text-[1.2rem]">Dresses</span>
            <ion-icon
              class="text-[1.3rem]"
              name="chevron-forward-outline"
            ></ion-icon>
          </div>
          <div
            class="border-1 border-black p-4 text-center flex items-center justify-center"
          >
            <span class="font-latoGoogle text-[1.2rem]">Tops</span>
            <ion-icon
              class="text-[1.3rem]"
              name="chevron-forward-outline"
            ></ion-icon>
          </div>
          <div
            class="border-1 border-black p-4 text-center flex items-center justify-center"
          >
            <span class="font-latoGoogle text-[1.2rem]">Coats & Jackets</span>
            <ion-icon
              class="text-[1.3rem]"
              name="chevron-forward-outline"
            ></ion-icon>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useProducts } from "@/Hooks/useProducts";

const { mockUpDBProducts } = useProducts();

import { IonPage, IonContent, IonIcon, IonImg } from "@ionic/vue";
import { computed, onMounted, ref } from "vue";
import Header from "@/components/Header.vue";

type featuredCardTypes = {
  productThumbnail: string;
  brandName: string;
  productPrice: number;
  productName: string;
  slug: string;
};

const mockupDBFeatured = ref<featuredCardTypes[]>([
  {
    productThumbnail:
      "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620438/BrownCoat_iijdvu.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Brown Coat",
    slug: "90s-brown-coat",
  },
  {
    productThumbnail:
      "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623761/Emblem_Logo_Graphic_Classic_T-Shirt_cbxyeo.webp",
    brandName: "Kalvin Klein",
    productPrice: 27000,
    productName: "Emblem Logo Graphic Classic T-Shirt",
    slug: "emblem-logo-graphic-classic-t-shirt",
  },
  {
    productThumbnail:
      "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623751/Solid_SeerSucker_Classic_Button-Down_Shirt_dfq4md.webp",
    brandName: "Kalvin Klein",
    productPrice: 11000,
    productName: "Solid Seesucker Classic Button-Down Shirt",
    slug: "solid-seesucker-classic-button-down-shirt",
  },
  {
    productThumbnail:
      "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623760/Cotton_Stretch_Slim_Button-Down_Shirt_wpouv7.webp",
    brandName: "Kalvin Klein",
    productPrice: 21000,
    productName: "Cotton Stretch Slim Button-Down Shirt",
    slug: "cotton-stretch-slim-button-down-shirt",
  },
  {
    productThumbnail:
      "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623754/Classic_Stretch_Button-Down_Shirt_xrpgpe.webp",
    brandName: "Kalvin Klein",
    productPrice: 21000,
    productName: "Classic Stretch Button-Down Shirt",
    slug: "classic-stretch-button-down-shirt",
  },
  {
    productThumbnail:
      "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623756/Boucle_Ribbed_Sleeveless_Midi_Dress_ktf3dl.webp",
    brandName: "Kalvin Klein",
    productPrice: 21000,
    productName: "Boucle Ribbed Sleeveless Midi Dress",
    slug: "boucle-ribbed-sleeveless-midi-dress",
  },
]);

const duplicatedSlides = computed(() => [
  ...mockupDBFeatured.value,
  ...mockupDBFeatured.value,
  ...mockupDBFeatured.value,
  ...mockupDBFeatured.value,
]);

const limitedProducts = computed(() => {
  const shuffled = [...mockUpDBProducts.value].sort(() => Math.random() - 0.5);
  return shuffled.slice(-4);
});
</script>

Add Checkout Function,
