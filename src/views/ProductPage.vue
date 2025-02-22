<template>
  <ion-page>
    <ion-content>
      <Header />
      <div class="flex flex-col w-full h-full font-latoGoogle">
        <div class="p-4">
          <ion-img :src="product?.productThumbnail"> </ion-img>
          <div class="mt-4 flex flex-col">
            <div class="flex flex-col gap-y-4">
              <span class="font-latoTitle tracking-tighter">{{
                product?.productName
              }}</span>
              <span class="text-[1.2rem] font-semibold"
                >₱{{ product?.productPrice }}</span
              >
            </div>

            <div class="mt-4">
              <span>SIZE </span>
              <div class="flex gap-x-1 w-full overflow-x-auto my-4">
                <div class="bg-gray-100 px-8 py-4"><span>XS</span></div>
                <div class="bg-gray-100 px-8 py-4"><span>S</span></div>
                <div class="bg-gray-100 px-8 py-4"><span>M</span></div>
                <div class="bg-gray-100 px-8 py-4"><span>L</span></div>
                <div class="bg-gray-100 px-8 py-4"><span>XL</span></div>
                <div class="bg-gray-100 px-8 py-4"><span>XXL</span></div>
              </div>
            </div>

            <div class="flex gap-x-1 my-4">
              <div
                class="bg-black text-white w-full p-4 rounded-md text-center"
              >
                <span>Add To Cart</span>
              </div>
              <div
                class="bg-black text-white flex items-center justify-center p-4 rounded-md"
              >
                <ion-icon
                  name="heart-outline"
                  class="text-2xl font-bold"
                ></ion-icon>
              </div>
            </div>

            <div>
              <h1>You May Also Like</h1>
              <div class="grid grid-cols-2 gap-x-4 m-4">
                <div
                  class=""
                  v-for="(productCard, index) in shuffled"
                  :key="index"
                >
                  <div class="relative">
                    <div
                      class="absolute right-1 mr-4 mt-4 bg-white px-4 pt-4 pb-2 rounded-md opacity-70"
                    >
                      <ion-icon
                        name="heart-outline"
                        class="text-2xl"
                      ></ion-icon>
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
                        <span class="font-bold">{{
                          productCard.brandName
                        }}</span>
                        <span class="font-lato">
                          ₱{{ productCard.productPrice }}</span
                        >
                      </div>
                      <span class="font-lato">{{
                        productCard.productName
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonImg, IonIcon } from "@ionic/vue";

import { useProducts } from "@/Hooks/useProducts";
import { useRoute } from "vue-router";
import { computed } from "vue";
import Header from "@/components/Header.vue";

const { mockUpDBProducts } = useProducts();

const shuffled = mockUpDBProducts.value
  .sort(() => 0.5 - Math.random())
  .splice(0, 2);

const route = useRoute();
const product = computed(() =>
  mockUpDBProducts.value.find((p) => p.slug === route.params.slug)
);

</script>


<!-- Do The Cart Section, Make everything clickable slugs

and then move everything to laravel -->