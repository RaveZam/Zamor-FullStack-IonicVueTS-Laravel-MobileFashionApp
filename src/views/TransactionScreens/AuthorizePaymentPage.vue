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
                  <span>Size: {{ item.size }}</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div class="font-latoGoogle text-[0.8rem] flex flex-col">
          <div class="flex justify-between items-center mr-12">
            <span class="text-[1rem]">Home Delivery</span>
            <IonIcon
              class="hover:cursor-pointer"
              name="chevron-forward-outline"
              @click="$router.push('/tabs/ViewAddressList')"
            ></IonIcon>
          </div>

          <div
            v-if="!selectedAddress"
            class="flex flex-col gap-y-1 mt-3 mb-4 text-[0.9rem]"
          >
            <span class="text-red-400">Please Select An Address</span>
          </div>

          <div v-else class="flex flex-col gap-y-1 mt-3 mb-4 text-[0.9rem]">
            <span
              >{{ selectedAddress?.name }} {{ selectedAddress?.surname }}</span
            >
            <span
              >{{ selectedAddress?.address }} {{ selectedAddress?.province }}
            </span>
            <span
              >{{ selectedAddress?.flatNumber }} {{ selectedAddress?.postcode }}
            </span>
            <span>{{ selectedAddress?.phoneNumber }}</span>
          </div>
          <span class="text-blue-900 font-bold"
            >Free Shipping over 3,995.00 PHP applies only for full price
            items</span
          >
        </div>

        <div class="flex flex-col gap-y-2 my-8">
          <div class="flex justify-between mr-12 items-center">
            <span>PAYMENT</span>
            <IonIcon
              class="hover:cursor-pointer"
              name="chevron-forward-outline"
              @click="$router.push('/tabs/PaymentOptionScreen')"
            ></IonIcon>
          </div>
          <span
            v-if="!paymentMethod"
            @click="$router.push('/tabs/PaymentOptionScreen')"
            class="text-red-400"
            >Select Payment Method</span
          >
          <span v-else>{{ paymentMethod }}</span>
        </div>

        <div
          class="flex mt-auto justify-between items-center my-4 hover:cursor-pointer"
        >
          <div
            @click="authorizePayment()"
            :class="[
              'text-center p-2 w-3/6',
              isConfirmActive ? 'bg-white text-black' : 'bg-black text-white',
            ]"
          >
            <span class="text-sm"> Confirm Payment </span>
          </div>

          <div>
            <span class="text-sm pr-12"> Total: {{ total }} PHP </span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { useCart } from "@/Hooks/useCart";
import {
  IonPage,
  IonContent,
  IonIcon,
  IonImg,
  onIonViewWillEnter,
} from "@ionic/vue";
import { computed, onMounted, ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { useAddress } from "@/Hooks/useAddress";

const { cart, fetchCart } = useCart();
const { fetchAddresses, selectedAddress } = useAddress();

const estimatedDelivery = ref("");
const estimatedDelivery2 = ref("");

function getPaymentMethod() {
  return localStorage.getItem("defaultPaymentMethod");
}

let paymentMethod = ref<string | null>(null);

onIonViewWillEnter(() => {
  fetchAddresses();
  fetchCart();
  paymentMethod.value = getPaymentMethod();
});

const total = computed(() =>
  selectedCartItems.value.reduce(
    (sum, item) => sum + item.quantity * item.product.productPrice,
    0
  )
);

const selectedCartItems = computed(() => {
  return cart.value.filter((item) => item.checked);
});

interface orderItem {
  product_id: number;
  quantity: number;
  size: string;
  price: number;
}

interface AuthorizePayment {
  address_id: number;
  status: string;
  payment_method: string;
  total: number;
  items: orderItem[];
}

import { useCustomAlert } from "@/Hooks/useCustomAlert";
import axios from "axios";

import { useGetCookie } from "@/Hooks/useGetCookies";
import { useRouter } from "vue-router";
const router = useRouter();
const { getCookie } = useGetCookie();
const token = getCookie("authToken");
const { handleErrorMessage } = useCustomAlert();
import { useLoadingScreen } from "@/Hooks/useLoadingScreen";

const { loadingScreen } = useLoadingScreen();

const isConfirmActive = ref(false);

function authorizePayment() {
  const orderItems: orderItem[] = selectedCartItems.value.map((item) => ({
    product_id: item.product.id,
    quantity: item.quantity,
    size: item.size,
    price: item.product.productPrice,
  }));

  const transactionData = ref<AuthorizePayment>({
    address_id: selectedAddress.value?.id ?? 0,
    status: "pending",
    payment_method: paymentMethod.value ?? "",
    total: total.value ?? 0,
    items: orderItems,
  });

  if (!selectedAddress.value) {
    handleErrorMessage("Please select an address");
    return;
  }

  if (!paymentMethod.value) {
    handleErrorMessage("Please select a payment method");
    return;
  }

  loadingScreen({ show: true, success: false, message: "Authorizing..." });
  axios
    .post("http://127.0.0.1:8000/api/order", transactionData.value, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log(response);
      if (response.status == 200) {
        console.log("success");
        localStorage.setItem(
          "transactionData",
          JSON.stringify(selectedCartItems.value)
        );

        loadingScreen({
          show: false,
          success: true,
          message: "Authorizing...",
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

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
