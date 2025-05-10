<template>
    <ion-page>
        <ion-content>
            <div class="flex flex-col h-full font-latoSubTitle ">

                <div   @click="$router.go(-1)" class="m-4 w-full">
                    <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
                </div>
                <div class="mx-8">
                    <div class="border-b-2 border-gray-400 flex my-4 flex-col justify-center items-center  pb-4">
                        <IonIcon class="text-lg" name="cube-outline"></IonIcon>
                        <span class="text-sm">HOME</span>
                </div>

                <div class="flex flex-col mt-8">
                    <div class="flex justify-between pb-1">
                        <span class="text-sm">ADDRESS</span>
                        <IonIcon name="chevron-forward-outline"></IonIcon>
                    </div>
                    <span class="text-sm">Victoria Alicia, Isabela Highway #5 Alicia</span>
                </div>

                <div class="mt-8">
                    <span>Estimated Delivery</span>
                    <div class="flex flex-col mt-2">
                        <div class="flex items-center justify-between w-full">
                            <div class="flex items-center">
                                <IonIcon class="mr-1" name="radio-button-on-outline"></IonIcon>
                                <span class="text-[0.8rem] whitespace-nowrap">Monday 26, May - Wednesday 28, May</span>
                            </div>
                            <span class="text-[0.8rem] whitespace-nowrap">150.00 PHP</span>
                        </div>
                        <span class="text-[0.8rem] ml-5.5 mt-1">Free Shipping for orders over 3,995.00 PHP applies only for full price items</span>
                    </div>
                </div>
            </div>


            <div class="flex mt-auto justify-between items-center">
                <div @click="$router.push('/tabs/AuthorizePaymentPage')" class="m-4 text-center bg-black text-white p-2 w-3/6" >    
                  <span  class="text-sm"> Continue </span> 
                </div>
                <div class="mr-4">
                    <span class="text-sm pr-4"> SHIPPING FREE</span>
                </div>
               </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon, IonCheckbox } from "@ionic/vue";





</script>

