<template>
  <ion-page>
    <div>
      <ion-toolbar class="border-0">
        <div class="flex justify-between items-center my-4">
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
    <ion-content>
      <div class="mx-4 mt-4 flex flex-col -space-y-2">
        <span class="font-robotoTitle">For You</span>
        <span class="font-roboto opacity-80">Explore Brands To your taste</span>
      </div>

      <!-- Products Container -->
      <div class="grid grid-cols-2 overflow-y-hidden overflow-x-auto">
        <div
          class="font-roboto"
          v-for="(productCard, index) in mockUpDBProducts"
          :key="index"
        >
          <div class="p-2">
            <ion-img class="py-2" :src="productCard.productThumbnail">
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
import { ref } from "vue";

function logMsg() {
  console.log("Clicked");
}

type productCardTypes = {
  productThumbnail: string;
  brandName: string;
  productPrice: number;
  productName: string;
};

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
]);
</script>
