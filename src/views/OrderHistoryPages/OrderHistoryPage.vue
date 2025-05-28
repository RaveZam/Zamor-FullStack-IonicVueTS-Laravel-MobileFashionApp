<template>
  <ion-page>
    <ion-content>
      <Header />
      <div v-if="Orders.length > 0" class="p-4 font-latoGoogle bg-gray-100">
        <h1>Order History</h1>

        <div v-for="order in Orders" :key="order.id">
          <div class="flex flex-col my-8 bg-white p-4 rounded-md">
            <div class="flex gap-x-1 my-4 font-bold justify-between">
              <div>
                <span> Order ID #{{ order.id }}</span>
                <span> ({{ order.order_items.length }})</span>
              </div>
              <div>
                <span class="font-light text-[0.8rem]">
                  Placed On
                  {{
                    dayjs(order.created_at).format("MMMM D, YYYY h:mm A")
                  }}</span
                >
              </div>
            </div>
            <div v-for="order_items in order.order_items">
              <div class="flex w-max my-4">
                <IonImg
                  class="h-32 w-32"
                  :src="order_items.product.productThumbnail"
                ></IonImg>
                <div class="flex flex-col">
                  <span class="font-bold">{{
                    order_items.product.brandName
                  }}</span>
                  <span class="text-gray-600 text-[0.8rem]">{{
                    order_items.product.productName
                  }}</span>
                  <span class="text-[0.9rem]"
                    >Size: {{ order_items.size }}</span
                  >
                  <span class="text-gray-600 text-[0.8rem]"
                    >Quantity : {{ order_items.quantity }}</span
                  >
                  <span> ₱{{ order_items.price }} </span>
                </div>
              </div>
            </div>
            <div class="ml-auto">
              <span> Total ₱{{ order.total_amount }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="bg-gray-50 my-12 mx-4">
          <span class="text-gray-600">No Orders Here</span>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, onIonViewWillEnter, IonImg } from "@ionic/vue";
import dayjs from "dayjs";
import { useOrders } from "@/Hooks/useOrders";
import Header from "@/components/Header.vue";
const { fetchOrders, Orders } = useOrders();

onIonViewWillEnter(() => {
  fetchOrders();
});
</script>

<!-- 
<span> Order#{{ order.id }} </span>
<span> ({{ order.order_items.length }})</span>
<div>
  <span>{{}}</span>
  <div>
    <span>{{ order_items.product.productName }}</span>
    <IonImg
      class="h-32 w-32"
      :src="order_items.product.productThumbnail"
    ></IonImg>
  </div>

       class="text-ellipsis inline-block max-w-[220px] whitespace-nowrap overflow-hidden"
</div> -->
