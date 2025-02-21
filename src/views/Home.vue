<template>
  <ion-page>
    <ion-content>
      <!-- <div>
        <ion-toolbar class="border-0 my-4">
          <div class="flex justify-between items-center">
            <ion-icon
              @click="logMsg()"
              name="menu-sharp"
              class="text-3xl mb-1 mx-4"
            ></ion-icon>
            <span class="font-latoTitle text-[2.2rem] font-[500]">ZAMOR</span>
            <ion-icon
              name="notifications-outline"
              class="text-3xl mx-4"
            ></ion-icon>
          </div>
        </ion-toolbar>
      </div> -->
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

      <div class="grid grid-cols-2">
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
            <ion-img
              @click="console.log(productCard.productName)"
              class="py-2"
              :src="productCard.productThumbnail"
            >
            </ion-img>

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
        <div class="flex whitespace-nowrap animate-scroll mt-2">
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
          :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          class="w-full max-w-[500px]"
        >
          <SwiperSlide
            v-for="(item, index) in duplicatedSlides"
            :key="index"
            class="flex flex-row items-center p-8 pb-4 bg-gray-50"
          >
            <img
              :src="item.productThumbnail"
              :alt="item.productName"
              class="object-cover mb-2"
            />
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

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
} from "@ionic/vue";
import { computed, ref } from "vue";
import Header from "@/components/Header.vue";

function logMsg() {
  console.log("Clicked");
}

type featuredCardTypes = {
  productThumbnail: string;
  brandName: string;
  productPrice: number;
  productName: string;
};

type bannerTypes = {
  bannerImage: string;
};

const bannerImages = ref<bannerTypes[]>([
  {
    bannerImage: "./images/Posters/poster1.webp",
  },
  {
    bannerImage: "./images/Posters/poster2jpg.jpg",
  },
  {
    bannerImage: "./images/Posters/tommyposter.webp",
  },
]);

const mockupDBFeatured = ref<featuredCardTypes[]>([
  {
    productThumbnail: "./images/Clothings/FadedCityGraphicClassicTshirt.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "Faded City Graphic Classic Shirt",
  },
  {
    productThumbnail: "./images/Clothings/OriginalStraightDenimJacket.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "Original Straight Denim Jacket",
  },
  {
    productThumbnail: "./images/Clothings/OriginalStraightFitJeans.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "Original Straight Fit Jeans",
  },
  {
    productThumbnail: "./images/Clothings/OriginalStraightFitJeans.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "Original Straight Fit Jeans",
  },
]);

const duplicatedSlides = computed(() => [
  ...mockupDBFeatured.value,
  ...mockupDBFeatured.value,
]);

const limitedProducts = computed(() => mockUpDBProducts.value.slice(0, 4));
</script>
