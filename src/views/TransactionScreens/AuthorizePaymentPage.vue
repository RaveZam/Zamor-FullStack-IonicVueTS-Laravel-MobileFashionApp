<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col font-latoGoogle h-full mx-4 w-full">
        <div
          @click="$router.go(-1)"
          class="mt-8 mb-4 w-full hover:cursor-pointer"
        >
          <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
        </div>
        <div class="mb-4 mt-8">
          <span class="text-[1rem] whitespace-nowrap"
            >{{ estimatedDelivery.toLocaleUpperCase() }} -
            {{ estimatedDelivery2.toLocaleUpperCase() }}</span
          >
          <span class="text-[0.8rem] whitespace-nowrap"></span>
        </div>

        <div>
          <span>Items in Your Cart: {{ selectedCartItems.length }}</span>
          <div class="pr-12">
            <Swiper
              ref="swiperRef"
              :modules="[Pagination]"
              :slides-per-view="1"
              :space-between="10"
              :looped-slides-limit="null"
              :loop-fill-group-with-blank="true"
              class="w-full max-w-[500px]"
            >
              <SwiperSlide
                v-for="(item, index) in selectedCartItems"
                :key="index"
                class="flex flex-row items-center p-8 pb-4 bg-gray-50"
              >
                <img
                  :src="item.product.productThumbnail"
                  :alt="item.product.productName"
                  class="object-cover mb-2"
                />
                <div class="flex flex-col">
                  <span class="text-[0.9rem]">{{
                    item.product.productName
                  }}</span>
                  <span>{{ item.product.productPrice }}PHP</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="font-latoGoogle text-[0.8rem] flex flex-col">
          <span class="text-[1rem]">Home Delivery</span>
          <div class="flex flex-col gap-y-2 mt-1 mb-4">
            <span>RaveZM Zamora</span>
            <span>Highway #5, Victoria Alicia Isabela</span>
            <span>3306 Alicia, Isabela</span>
            <span>Philippines</span>
          </div>
          <span class="text-blue-900 font-bold"
            >Free Shipping over 3,995.00 PHP applies only for full price
            items</span
          >
        </div>

        <div class="flex flex-col gap-y-2 mt-8">
          <span>PAYMENT</span>
          <span class="text-red-400">Select Payment Method</span>
        </div>

        <div class="flex mt-auto justify-between items-center my-4">
          <div
            @click="$router.push('/tabs/AuthorizePaymentPage')"
            class="text-center bg-black text-white p-2 w-3/6"
          >
            <span class="text-sm"> Continue </span>
          </div>
          <div>
            <span class="text-sm pr-18"> Free Shipping </span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useCart } from "@/Hooks/useCart";
import { IonPage, IonContent, IonIcon, IonImg } from "@ionic/vue";
import { computed, onMounted, ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

const { cart } = useCart();

const selectedCartItems = computed(() => {
  return cart.value.filter((item) => item.checked);
});

const estimatedDelivery = ref("");
const estimatedDelivery2 = ref("");

onMounted(() => {
  if (selectedCartItems.value.length == 0) {
    console.log("Empty Cart");
    window.location.href = "/tabs/CartPage";
  }

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7);
  const deliveryDate2 = new Date();
  deliveryDate2.setDate(today.getDate() + 10);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  estimatedDelivery.value = deliveryDate.toLocaleDateString("en-US", options);
  estimatedDelivery2.value = deliveryDate2.toLocaleDateString("en-US", options);
});
</script>
