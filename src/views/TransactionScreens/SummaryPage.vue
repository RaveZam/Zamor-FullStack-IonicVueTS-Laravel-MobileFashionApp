<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col h-full font-latoSubTitle">
        <div
          @click="$router.go(-1)"
          class="mt-8 mb-4 w-full mx-4 hover:cursor-pointer"
        >
          <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
        </div>
        <div class="mx-8">
          <div
            class="border-b-2 border-gray-400 flex my-4 flex-col justify-center items-center pb-4"
          >
            <IonIcon class="text-lg" name="cube-outline"></IonIcon>
            <span class="text-sm">HOME</span>
          </div>

          <div class="flex flex-col mt-8">
            <div class="flex justify-between pb-1">
              <span class="text-sm">ADDRESS</span>
              <IonIcon
                @click="$router.push(`/tabs/ViewAddressList`)"
                name="chevron-forward-outline"
              ></IonIcon>
            </div>
            <span class="text-sm" v-if="selectedAddress">
              {{ selectedAddress?.address }}
              {{ selectedAddress?.flatNumber }}
            </span>
            <span
              v-else
              @click="$router.push('/tabs/ViewAddressList')"
              class="text-sm hover:cursor-pointer text-red-500"
            >
              No address selected
            </span>
          </div>

          <div class="mt-8">
            <span>Estimated Delivery</span>
            <div class="flex flex-col mt-2">
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                  <IonIcon
                    class="mr-1"
                    name="radio-button-on-outline"
                  ></IonIcon>
                  <span class="text-[0.8rem] whitespace-nowrap"
                    >{{ estimatedDelivery }} - {{ estimatedDelivery2 }}</span
                  >
                </div>
                <span class="text-[0.8rem] whitespace-nowrap"
                  >{{ shippingFree ? "Free" : "150.00" }} PHP</span
                >
              </div>
              <span class="text-[0.8rem] ml-5.5 mt-1"
                >Free Shipping for orders over 3,995.00 PHP applies only for
                full price items</span
              >
            </div>
          </div>
        </div>

        <div class="h-full w-full grid grid-cols-3 gap-4 p-4 overflow-auto">
          <div class="w-full" v-for="item in selectedCartItems" :key="item.id">
            <div class="flex flex-col">
              <ion-img
                class="w-full h-full"
                :src="item.product.productThumbnail"
              >
              </ion-img>
              <div class="flex flex-col text-[0.7rem]">
                <span>{{ item.product.productName }}</span>
                <div class="flex justify-between mr-2">
                  <span>{{ item.product.productPrice }} PHP</span>
                  <span>Size: {{ item.size }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex mt-auto justify-between items-center">
          <div
            @click="handleContinue()"
            class="m-4 text-center bg-black text-white p-2 w-3/6 hover:cursor-pointer"
          >
            <span class="text-sm"> Continue </span>
          </div>
          <div class="mr-4">
            <span class="text-sm pr-4"> Total: {{ total }} PHP </span>
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
} from "@ionic/vue";

import { useCart } from "@/Hooks/useCart";
import { computed, onMounted, ref, watch } from "vue";
import { useAddress } from "@/Hooks/useAddress";
import { useRouter } from "vue-router";
import { useCustomAlert } from "@/Hooks/useCustomAlert";
const { handleErrorMessage } = useCustomAlert();

const { cart, fetchCart } = useCart();
const { fetchAddresses, selectedAddress } = useAddress();

const router = useRouter();

function handleContinue() {
  if (!selectedAddress.value) {
    handleErrorMessage("Please select an address");
  } else {
    router.push("/tabs/AuthorizePaymentPage");
  }
}

onIonViewWillEnter(() => {
  fetchCart();
  fetchAddresses();
});

const selectedCartItems = computed(() => {
  return cart.value.filter((item) => item.checked);
});

const estimatedDelivery = ref("");
const estimatedDelivery2 = ref("");

const total = computed(() =>
  selectedCartItems.value.reduce(
    (sum, item) => sum + item.quantity * item.product.productPrice,
    0
  )
);

const shippingFree = computed(() => {
  return (
    selectedCartItems.value.reduce(
      (sum, item) => sum + item.product.productPrice,
      0
    ) >= 3995
  );
});

onMounted(() => {
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
