<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-full h-full">
        <div class="font-latoGoogle fixed z-50 flex gap-x-4 my-8 mx-4">
          <span>ALL</span>
          <span>MAN</span>
          <span>WOMAN</span>
        </div>

        <div class="border-b flex mx-4 justfiy-center pt-[40%] border-black">
          <input
            class="w-full focus:outline-none font-latoGoogle justify-center flex text-center py-4"
            placeholder="WHAT ARE YOU LOOKING FOR?"
            type="text"
          />
        </div>
        <div class="px-4 my-24 pb-32 font-latoGoogle">
          <span>You Might Be Interested In</span>
          <div class="grid grid-cols-2 gap-x-2">
            <div
              class=""
              v-for="(productCard, index) in mockUpDBProducts"
              :key="index"
            >
              <div class="relative">
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
                  <span class="font-robotoMed">{{
                    productCard.productName
                  }}</span>
                </div>
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
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";
import { useProducts } from "@/Hooks/useProducts";

const { mockUpDBProducts } = useProducts();
</script>
