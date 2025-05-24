<template>
  <div class="m-4 font-latoGoogle">
    <!-- <h2 class="text-2xl font-bold">FAVORITES</h2> -->
    <div v-if="favoriteItems.length === 0" class="text-gray-500 text-sm mb-24">
      No favorite items yet.
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in favoriteItems" :key="item.id">
        <div class="flex flex-col">
          <img
            :src="item.product.productThumbnail"
            alt="Product Image"
            class="w-36 h-full object-cover"
          />
          <span
            class="text-[0.8rem] whitespace-nowrap overflow-hidden text-ellipsis text-gray-700 font-medium inline-block max-w-full"
          >
            {{ item.product.productName }}
          </span>

          <div class="flex justify-between my-2">
            <router-link :to="`/product/${item.product.slug}`">
              <div
                class="flex items-center gap-x-2 justify-center border-1 border-black px-4 py-1"
              >
                <span class="text-[0.7rem] whitespace-nowrap text-black"
                  >Add To Cart</span
                >
              </div>
            </router-link>
            <IonIcon
              @click="removeFavorite(item.product.id)"
              class="text-xl hover:cursor-pointer"
              name="bookmark-sharp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="m-4 mt-24">
    <h1>You May Also Like</h1>
    <div class="grid grid-cols-2 gap-x-4 m-4">
      <div
        class=""
        v-for="(productCard, index) in shuffledProducts"
        :key="index"
      >
        <div class="relative">
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
              <span class="font-lato"> ₱{{ productCard.productPrice }}</span>
            </div>
            <span class="font-lato">{{ productCard.productName }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonIcon } from "@ionic/vue";
import { useFavorite } from "@/Hooks/useFavorite";
import { onMounted } from "vue";
import { useProducts } from "@/Hooks/useProducts";
const { shuffledProducts } = useProducts();

const { favoriteItems, removeFavorite, fetchFavorites } = useFavorite();

onMounted(() => {
  fetchFavorites();
});
</script>
