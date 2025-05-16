<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col items-center justify-center mt-10 h-[95%]">
        <span class="font-latoGoogle text-[2.2rem]">ZAMOR</span>
        <ion-icon
          @click="logValues"
          name="checkmark-circle-outline"
          class="text-6xl my-4"
        ></ion-icon>
        <h2 class="text-xl font-semibold mb-2">Order Placed Successfully!</h2>
        <p class="text-sm text-gray-500 mb-6 text-center">
          Thank you for shopping with us. Here’s what you purchased:
        </p>
        <span class="text-sm text-gray-500">Estimated Delivery</span>
        <p>
          {{ estimatedDelivery.toLocaleUpperCase() }} -
          {{ estimatedDelivery2.toLocaleUpperCase() }}
        </p>
        <div class="w-full border-gray-700 pt-8 h-[50%] overflow-auto">
          <div
            v-for="(item, index) in transactionData"
            :key="index"
            class="flex justify-between gap-4 mb-4 pb-2 mx-4 items-center"
          >
            <ion-img
              :src="item.product.productThumbnail"
              alt="Product"
              class="w-[120px] h-[120px]"
            />
            <div class="flex flex-col w-full">
              <span class="font-medium text-sm">{{
                item.product.productName
              }}</span>
              <span class="text-sm text-gray-500"
                >₱{{ item.product.productPrice }}</span
              >
            </div>
            <div class="text-sm text-gray-500 ml-8">{{ item.quantity }}x</div>
          </div>
        </div>
        <div class="mt-4">
          <div
            @click="$router.push(`/tabs/Home`)"
            class="items-center border-1 border-black py-4 px-12 hover:cursor-pointer"
          >
            <span>Continue Shopping</span>
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
  alertController,
  onIonViewDidEnter,
} from "@ionic/vue";
import { ref } from "vue";

const transactionData = ref<any[] | null>(null);

function getTransactionData() {
  transactionData.value = JSON.parse(
    localStorage.getItem("transactionData") || "{}"
  );
}

function logValues() {
  console.log(transactionData.value);
}

const estimatedDelivery = ref("");
const estimatedDelivery2 = ref("");

onIonViewDidEnter(() => {
  getTransactionData();

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
