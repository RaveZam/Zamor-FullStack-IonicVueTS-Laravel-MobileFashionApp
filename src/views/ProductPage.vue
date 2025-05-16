<template>
  <ion-page>
    <ion-content>
      <Header />
      <div class="flex flex-col w-full h-full font-latoGoogle">
        <div class="p-4">
          <ion-img loading="lazy" :src="product?.productThumbnail"> </ion-img>
          <div class="mt-4 flex flex-col">
            <div class="flex flex-col gap-y-4">
              <span class="font-latoGoogle text-[2.5rem] tracking-tighter">{{
                product?.productName
              }}</span>
              <span class="text-[1.2rem] font-semibold"
                >₱{{ product?.productPrice }}</span
              >
            </div>

            <div class="mt-4">
              <span>Available Sizes</span>
              <Swiper
                ref="swiperRef"
                :modules="[Pagination]"
                :slides-per-view="4"
                :space-between="8"
                :looped-slides-limit="null"
                :loop-fill-group-with-blank="true"
                class="w-full flex flex-row max-w-[500px] mt-1"
              >
                <SwiperSlide>
                  <div
                    @click="
                      selectedSize = selectedSize === 'XS' ? '' : 'XS';
                      console.log(selectedSize);
                    "
                    :class="
                      selectedSize === 'XS'
                        ? 'bg-black text-white'
                        : 'bg-gray-100'
                    "
                    class="hover:cursor-pointer p-4 transition-all duration-300"
                  >
                    <span>XS</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    @click="
                      selectedSize = selectedSize === 'S' ? '' : 'S';
                      console.log(selectedSize);
                    "
                    :class="
                      selectedSize === 'S'
                        ? 'bg-black text-white'
                        : 'bg-gray-100'
                    "
                    class="hover:cursor-pointer p-4 transition-all duration-300"
                  >
                    <span>S</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    @click="
                      selectedSize = selectedSize === 'M' ? '' : 'M';
                      console.log(selectedSize);
                    "
                    :class="
                      selectedSize === 'M'
                        ? 'bg-black text-white'
                        : 'bg-gray-100'
                    "
                    class="hover:cursor-pointer p-4 transition-all duration-300"
                  >
                    <span>M</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    @click="
                      selectedSize = selectedSize === 'L' ? '' : 'L';
                      console.log(selectedSize);
                    "
                    :class="
                      selectedSize === 'L'
                        ? 'bg-black text-white'
                        : 'bg-gray-100'
                    "
                    class="hover:cursor-pointer p-4 transition-all duration-300"
                  >
                    <span>L</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    @click="
                      selectedSize = selectedSize === 'XL' ? '' : 'XL';
                      console.log(selectedSize);
                    "
                    :class="
                      selectedSize === 'XL'
                        ? 'bg-black text-white'
                        : 'bg-gray-100'
                    "
                    class="hover:cursor-pointer p-4 transition-all duration-300"
                  >
                    <span>XL</span>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    @click="
                      selectedSize = selectedSize === 'XXL' ? '' : 'XXL';
                      console.log(selectedSize);
                    "
                    :class="
                      selectedSize === 'XXL'
                        ? 'bg-black text-white '
                        : 'bg-gray-100'
                    "
                    class="hover:cursor-pointer p-4 transition-all duration-300"
                  >
                    <span>XXL</span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="mt-4">
              <span class="text-gray-700">{{ product?.stock }} in stock</span>
            </div>
            <div class="flex gap-x-1 my-4 hover:cursor-pointer">
              <div
                @click="handleAddToCart()"
                :class="[
                  'w-full p-4 rounded-md text-center transition-all duration-200',
                  isAddToCartActive
                    ? 'bg-white text-black border-1 border-black'
                    : 'bg-black text-white border-1 border-black ',
                ]"
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
            </div>
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
  IonImg,
  IonIcon,
  onIonViewWillLeave,
} from "@ionic/vue";

import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

import { useProducts } from "@/Hooks/useProducts";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useCart } from "@/Hooks/useCart";
import Header from "@/components/Header.vue";
import { useCustomAlert } from "@/Hooks/useCustomAlert";

const { handleErrorMessage } = useCustomAlert();
const { mockUpDBProducts, shuffledProducts } = useProducts();
const { addToCart } = useCart();

const route = useRoute();

const selectedSize = ref<string>("");
const isAddToCartActive = ref(false);

const product = computed(() =>
  mockUpDBProducts.value.find((p) => p.slug === route.params.slug)
);

function handleAddToCart() {
  if (product?.value?.stock === 0) {
    handleErrorMessage("Out of stock");
    return;
  }

  if (selectedSize.value === "") {
    handleErrorMessage("Please select a size");
    return;
  }

  isAddToCartActive.value = !isAddToCartActive.value;
  addToCart(
    product?.value?.id,
    product?.value?.productName,
    selectedSize.value
  );
}

onIonViewWillLeave(() => {
  selectedSize.value = "";
});
</script>
