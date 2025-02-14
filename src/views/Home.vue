<template>
  <ion-page>
    <ion-content>
      <div>
        <ion-toolbar class="border-0 my-4">
          <div class="flex justify-between items-center">
            <ion-icon
              @click="logMsg()"
              name="settings-outline"
              class="text-3xl mx-4"
            ></ion-icon>
            <span class="font-bermirs text-[2.2rem] font-[500]">Zamor</span>
            <ion-icon
              name="notifications-outline"
              class="text-3xl mx-4"
            ></ion-icon>
          </div>
        </ion-toolbar>
      </div>
      <div class="mx-4 mt-4 flex flex-col -space-y-2">
        <span class="font-robotoTitle">For You</span>
        <span class="font-roboto opacity-80">Explore Brands To your taste</span>
      </div>

      <!-- Products Container -->

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
          <h1 class="font-bermirs mx-8">Featured</h1>
          <h1 class="font-bermirs mx-8">Featured</h1>
          <h1 class="font-bermirs mx-8">Featured</h1>
          <h1 class="font-bermirs mx-8">Featured</h1>
          <h1 class="font-bermirs mx-8">Featured</h1>
          <h1 class="font-bermirs mx-8">Featured</h1>
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
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
          <h1 class="font-bermirs mx-8">Explore</h1>
        </div>

        <div class="grid grid-cols-2">
          <div
            class="font-roboto"
            v-for="(productCard, index) in remainingProducts"
            :key="index"
          >
            <div class="p-2 relative">
              <div
                class="absolute right-1 mr-4 mt-4 bg-white px-4 pt-4 pb-2 rounded-md opacity-70"
              >
                <ion-icon name="heart-outline" class="text-2xl"></ion-icon>
              </div>
              <ion-img class="py-2" :src="productCard.productThumbnail">
              </ion-img>

              <div>
                <div class="flex justify-between">
                  <span>{{ productCard.brandName }}</span>
                  <span class="font-roboto">
                    ₱{{ productCard.productPrice }}</span
                  >
                </div>
                <span class="font-robotoMed">{{
                  productCard.productName
                }}</span>
              </div>
            </div>
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

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonImg,
} from "@ionic/vue";
import { computed, nextTick, onMounted, onUnmounted, ref } from "vue";

function logMsg() {
  console.log("Clicked");
}

type productCardTypes = {
  productThumbnail: string;
  brandName: string;
  productPrice: number;
  productName: string;
};
type featuredCardTypes = {
  productThumbnail: string;
  brandName: string;
  productPrice: number;
  productName: string;
};

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

const mockUpDBProducts = ref<productCardTypes[]>([
  {
    productThumbnail: "./images/Clothings/BrownCoat.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Brown Coat",
  },
  {
    productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
    brandName: "Kalvin Klein",
    productPrice: 18000,
    productName: "90's TruckerJacket",
  },
  {
    productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Denim Over Shirt",
  },
  {
    productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
    brandName: "Kalvin Klein",
    productPrice: 24000,
    productName: "Light Blue Slim Jacket",
  },
  {
    productThumbnail: "./images/Clothings/LongCoat.webp",
    brandName: "Kalvin Klein",
    productPrice: 2000,
    productName: "Long Coat",
  },
  {
    productThumbnail: "./images/Clothings/SlimLeggings.webp",
    brandName: "Kalvin Klein",
    productPrice: 24000,
    productName: "SlimLeggings",
  },
  {
    productThumbnail: "./images/Clothings/BrownCoat.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Brown Coat",
  },
  {
    productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
    brandName: "Kalvin Klein",
    productPrice: 18000,
    productName: "90's TruckerJacket",
  },
  {
    productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Denim Over Shirt",
  },
  {
    productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
    brandName: "Kalvin Klein",
    productPrice: 24000,
    productName: "Light Blue Slim Jacket",
  },
]);

const limitedProducts = computed(() => mockUpDBProducts.value.slice(0, 4));
const remainingProducts = computed(() => mockUpDBProducts.value.slice(4));
</script>
