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
            v-model="search"
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
              v-for="(productCard, index) in filteredItems"
              :key="index"
            >
              <div class="relative font-latoGoogle">
                <div
                  @click="handleAddToFavorites(productCard.id)"
                  class="absolute right-1 mr-4 mt-4 bg-white px-4 pt-4 pb-2 rounded-md opacity-70 hover:cursor-pointer"
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
                    <span class="font-bold">{{ productCard.brandName }}</span>
                    <span class="font-lato">
                      ₱{{ productCard.productPrice }}</span
                    >
                  </div>
                  <span class="font-lato">{{ productCard.productName }}</span>
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
import { IonPage, IonContent, IonIcon, IonImg } from "@ionic/vue";
import { computed, ref } from "vue";
import { useProducts } from "@/Hooks/useProducts";
import { useFavorite } from "@/Hooks/useFavorite";

const { mockUpDBProducts } = useProducts();
const { handleAddToFavorites } = useFavorite();

const search = ref<string>("");

const filteredItems = computed(() =>
  mockUpDBProducts.value.filter((item) =>
    item.productName.toLocaleLowerCase().includes(search.value.toLowerCase())
  )
);
</script>
