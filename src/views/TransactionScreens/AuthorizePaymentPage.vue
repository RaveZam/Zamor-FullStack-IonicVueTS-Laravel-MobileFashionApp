<template>
    <ion-page>
        <ion-content>
            <div class="flex flex-col font-latoGoogle h-full mx-4 w-full">
                <div   @click="$router.go(-1)" class="mt-8 mb-4 w-full">
                    <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
                </div>
                <div class="mb-4 mt-8">
                    <span class="text-[1rem] whitespace-nowrap ">{{ estimatedDelivery.toLocaleUpperCase() }} - {{ estimatedDelivery2.toLocaleUpperCase() }}</span> 
                    <span class="text-[0.8rem] whitespace-nowrap"></span>
                </div>

                <div class="h-[35%] w-full grid grid-cols-3 gap-4 overflow-auto">
                <div class="w-full" v-for="item in selectedCartItems" :key="item.id">
                    <div class="flex flex-col ">
                        <ion-img class="w-full h-52 object-cover" :src="item.product.productThumbnail" > </ion-img>
                        <div class="flex flex-col text-[0.7rem]" >
                            <span>{{ item.product.productName }}</span>
                            <span>{{ item.product.productPrice }} PHP</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="font-latoGoogle text-[0.8rem] flex flex-col ">
                <span class="text-[1rem]">Home Delivery</span>
                <div class="flex flex-col gap-y-2 mt-1 mb-4">
                    <span>RaveZM Zamora</span>
                    <span>Highway #5, Victoria Alicia Isabela</span>
                    <span>3306 Alicia, Isabela</span>
                    <span>Philippines</span>
                </div>
                <span class="text-blue-900 font-bold">Free Shipping over 3,995.00 PHP applies only for full price items</span>
            </div>

            <div class="flex flex-col gap-y-2 mt-8">
                <span>PAYMENT</span>
                <span class="text-red-400">Select Payment Method</span>
            </div>

            <div class="flex mt-auto justify-between items-center my-4">
                <div @click="$router.push('/tabs/AuthorizePaymentPage')" class=" text-center bg-black text-white p-2 w-3/6" >    
                  <span  class="text-sm"> Continue </span> 
                </div>
                <div >
                    <span class="text-sm pr-18 "> Free Shipping </span>
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

const { cart } = useCart();

const selectedCartItems = computed(() => {
    return cart.value.filter(item => item.checked);
});



const estimatedDelivery = ref('');
const estimatedDelivery2 = ref('');

onMounted(() => {
  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7);
  const deliveryDate2 = new Date();
  deliveryDate2.setDate(today.getDate() + 10);

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long', 
    day: 'numeric',  
    month: 'long'    
  };

  estimatedDelivery.value = deliveryDate.toLocaleDateString('en-US', options);
  estimatedDelivery2.value = deliveryDate2.toLocaleDateString('en-US', options);
});


</script>

