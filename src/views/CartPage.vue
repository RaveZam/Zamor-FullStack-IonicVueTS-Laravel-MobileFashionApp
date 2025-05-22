<template>
  <ion-page>
    <ion-content>
      <div
        class="w-full h-[100%] flex flex-col font-lato overflow-hidden slide-up"
      >
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
        <div class="gap-x-4 flex m-4">
          <span
            @click="selectedTab = 'cart'"
            :class="[
              'text-[0.8rem] hover:cursor-pointer ',
              selectedTab === 'cart' ? 'text-black' : 'text-gray-400',
            ]"
            >SHOPPING BAG</span
          >
          <span
            @click="selectedTab = 'favorites'"
            :class="[
              'text-[0.8rem] hover:cursor-pointer ',
              selectedTab === 'favorites' ? 'text-black' : 'text-gray-400',
            ]"
            >FAVOURITES</span
          >
        </div>

        <div v-if="selectedTab === 'cart'" class="overflow-auto h-[80%]">
          <div
            class="flex h-full justify-center items-center"
            v-if="cart.length === 0"
          >
            <span class="text-gray-500">No items in cart</span>
          </div>
          <div v-else class="flex flex-col">
            <div class="flex items-center gap-x-4 ml-4 py-4">
              <ion-checkbox justify="start" v-model="selectAll"> </ion-checkbox>
              <span class="text-[0.8rem]">{{
                selectAll ? "Deselect All" : "Select All"
              }}</span>
            </div>
            <div
              class="m-4 flex flex items-stretch"
              v-for="(item, index) in cart"
              :key="index"
            >
              <div class="flex items-stretch my-auto mr-4">
                <ion-checkbox justify="start" v-model="item.checked">
                </ion-checkbox>
              </div>

              <IonImg
                class="w-120 h-full"
                :src="item.product.productThumbnail"
              />

              <div class="flex flex-col m-4 w-full">
                <div class="flex flex-col mb-auto w-full h-full gap-y-1">
                  <router-link :to="`/product/${item.product.slug}`">
                    <span class="font-lato text-[0.9rem] text-black">{{
                      item.product.productName
                    }}</span>
                  </router-link>
                  <span class="font-lato text-[0.9rem]"
                    >₱{{ item.product.productPrice }}</span
                  >
                  <span class="font-lato text-[0.9rem]"
                    >Size: {{ item.size }}</span
                  >
                </div>

                <div v-if="item.quantity > 1" class="flex gap-2">
                  <div
                    @click="decreaseQuantity(item)"
                    class="w-6 h-6 flex items-center justify-center bg-gray-200 rounded text-sm font-bold cursor-pointer"
                  >
                    -
                  </div>

                  <span class="text-sm font-medium">{{ item.quantity }}</span>

                  <div
                    @click="increaseQuantity(item)"
                    class="w-6 h-6 flex items-center justify-center bg-gray-200 rounded text-sm font-bold cursor-pointer"
                  >
                    +
                  </div>
                </div>

                <div class="flex justify-between w-full hover:cursor-pointer">
                  <span
                    @click="removeItem(item.id, item.product.productName)"
                    class="font-lato text-[0.8rem]"
                    >DELETE</span
                  >
                  <IonIcon name="bookmark-outline" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="selectedTab === 'favorites'" class="overflow-auto h-[80%]">
          <FavoriteProducts />
        </div>

        <div class="w-full p-4 flex items-center justify-between relative">
          <div
            @click="
              selectedCartItems.length > 0 && $router.push('/tabs/SummaryPage')
            "
            class="bg-black py-2 w-3/6 text-center text-white cursor-pointer"
          >
            <span class="font-lato text-[0.9rem]">Checkout</span>
          </div>
          <div class="flex flex-col text-right">
            <span class="text-[0.8rem]">{{ total }} PHP</span>
            <span class="text-[0.8rem]">+ VAT Included</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonIcon,
  IonImg,
  onIonViewWillEnter,
  IonCheckbox,
} from "@ionic/vue";

import { useCart } from "@/Hooks/useCart";
import { computed, ref, watch } from "vue";
import FavoriteProducts from "./FavoriteScreenPages/FavoriteProducts.vue";
import { useRoute } from "vue-router";
const { cart, fetchCart, removeItem, increaseQuantity, decreaseQuantity } =
  useCart();

const route = useRoute();

onIonViewWillEnter(() => {
  if (route.query.fromAccounts) {
    selectedTab.value = "favorites";
  }
  fetchCart();
});

const selectedCartItems = computed(() => {
  return cart.value.filter((item) => item.checked);
});

const total = computed(() =>
  selectedCartItems.value.reduce(
    (sum, item) => sum + item.quantity * item.product.productPrice,
    0
  )
);

const selectAll = computed({
  get: () => cart.value.length > 0 && cart.value.every((item) => item.checked),
  set: (value) => {
    cart.value.forEach((item) => {
      item.checked = value;
    });
  },
});

const selectedTab = ref("cart");

watch(
  cart,
  () => {
    const checkedMap: Record<number, boolean> = {};
    cart.value.forEach((item) => {
      checkedMap[item.id] = item.checked;
    });
    localStorage.setItem("checkedItem", JSON.stringify(checkedMap));
  },
  { deep: true }
);
</script>

<style scoped>
.slide-up {
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
