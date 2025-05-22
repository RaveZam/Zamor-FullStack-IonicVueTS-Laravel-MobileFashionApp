<template>
  <div class="overflow-auto h-[80%] m-4 font-latoGoogle">
    <!-- <h2 class="text-2xl font-bold">FAVORITES</h2> -->
    <div v-if="favoriteItems.length === 0" class="text-gray-500 text-sm">
      No favorite items yet.
    </div>
    <div class="grid grid-cols-3 gap-4 mb-32">
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
                <span class="text-[0.7rem] text-black">Add To Cart</span>
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
</template>

<script setup lang="ts">
import { IonIcon } from "@ionic/vue";
import { useFavorite } from "@/Hooks/useFavorite";
import { onMounted } from "vue";

const { favoriteItems, removeFavorite, fetchFavorites } = useFavorite();

onMounted(() => {
  fetchFavorites();
});
</script>
