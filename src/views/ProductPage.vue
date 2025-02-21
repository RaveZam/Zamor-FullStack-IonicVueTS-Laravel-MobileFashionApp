<template>
  <ion-page>
    <ion-content>
      <Header />
      <div class="flex flex-col w-full h-full font-lato">
        <div class="p-4">
          <ion-img :src="product?.productThumbnail"> </ion-img>
          <h1>{{ product?.productName }}</h1>
          <span>{{ product?.productPrice }}</span>
          <span>Size: </span>
          <div>
            <div><span>xs</span></div>
            <div><span>s</span></div>
            <div><span>m</span></div>
            <div><span>l</span></div>
            <div><span>xl</span></div>
            <div><span>xxl</span></div>
          </div>

          <div>
            <div><span>Add To Cart</span></div>
            <div>
              <ion-icon></ion-icon>
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
const route = useRoute();
const product = computed(() =>
  mockUpDBProducts.value.find((p) => p.slug === route.params.slug)
);
</script>
