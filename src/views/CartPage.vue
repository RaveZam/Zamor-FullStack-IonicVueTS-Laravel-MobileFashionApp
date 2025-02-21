<template>
  <ion-page>
    <ion-content>
      <div class="w-full h-full flex flex-col font-lato">
        <div class="flex justify-between w-full opacity-50">
          <ion-icon
            @click="$router.go(-1)"
            class="my-5 mx-6 text-3xl"
            name="close-outline"
          ></ion-icon>
          <ion-icon
            class="my-6 mr-8 text-2xl"
            name="chatbox-outline"
          ></ion-icon>
        </div>
        <div class="gap-x-4 flex mx-4">
          <span class="text-[0.8rem] opacity-100">SHOPPING BAG</span>
          <span class="text-[0.8rem] opacity-40">FAVOURITES</span>
        </div>
        <div class="mt-4">
          <div
            class="mx-4 my-3 flex"
            v-for="(item, index) in cart"
            :key="index"
          >
            <IonImg class="w-48 h-full" :src="item.productThumbnail" />
            <div class="flex flex-col m-4">
              <div class="flex flex-col">
                <span class="font-lato text-[0.9rem]">{{
                  item.productName
                }}</span>
                <span class="font-lato text-[0.9rem]"
                  >₱{{ item.productPrice }}</span
                >
              </div>
              <div class="mt-auto flex">
                <span class="font-lato text-[0.8rem]">DELETE</span>
                <IonIcon name="bookmark-outline" />
              </div>
            </div>
          </div>
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
  IonIcon,
  IonImg,
} from "@ionic/vue";

import { useProducts } from "@/Hooks/useProducts";

const { mockUpDBProducts } = useProducts();

const cart = [
  {
    productThumbnail: "./images/Clothings/BrownCoat.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Brown Coat",
    slug: "90s-brown-coat",
  },
  {
    productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
    brandName: "Kalvin Klein",
    productPrice: 18000,
    productName: "90's TruckerJacket",
    slug: "90s-truckerjacket",
  },
  {
    productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
    brandName: "Kalvin Klein",
    productPrice: 12000,
    productName: "90's Denim Over Shirt",
    slug: "90s-denim-over-shirt",
  },
];
</script>
