<template>
  <ion-page>
    <ion-content>
      <div class="flex flex-col mx-4">
        <div
          @click="$router.go(-1)"
          class="mt-8 mb-4 w-full hover:cursor-pointer"
        >
          <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
        </div>
        <div class="flex flex-col">
          <span>PAYMENT</span>
          <span>Select Payment Method</span>

          <div class="grid grid-cols-3 gap-x-4 gap-y-4 mt-4">
            <div
              class="flex flex-col items-center justify-center border-1 border-gray-700 p-2 hover:cursor-pointer"
              @click="setDefaultPaymentMethod('Cash on Delivery')"
            >
              <span class="text-lg font-bold">COD</span>
              <span class="text-[0.7rem] whitespace-nowrap"
                >Cash on Delivery</span
              >
            </div>
            <div
              class="border-1 border-gray-700 p-2 flex flex-col justify-center items-center hover:cursor-pointer"
              @click="setDefaultPaymentMethod('Gcash')"
            >
              <IonImg src="/images/Payment/gcash.png" />
              <span class="text-[0.7rem]">Gcash</span>
            </div>
            <div
              class="border-1 border-gray-700 p-2 flex flex-col justify-center items-center hover:cursor-pointer"
              @click="setDefaultPaymentMethod('BDO')"
            >
              <IonImg src="/images/Payment/bdo.png" />
              <span class="text-[0.7rem] mt-2">BDO</span>
            </div>
            <div
              class="border-1 border-gray-700 p-2 flex flex-col justify-center items-center hover:cursor-pointer"
              @click="setDefaultPaymentMethod('Paypal')"
            >
              <IonImg src="/images/Payment/paypal.webp" />
              <span class="text-[0.7rem]">Paypal</span>
            </div>
            <div
              class="border-1 border-gray-700 p-2 flex flex-col justify-center items-center hover:cursor-pointer"
              @click="setDefaultPaymentMethod('Visa')"
            >
              <IonImg src="/images/Payment/visa.webp" />
              <span class="text-[0.7rem]">Visa</span>
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
  IonIcon,
  IonImg,
  alertController,
} from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();

async function setDefaultPaymentMethod(method: string) {
  const alert = await alertController.create({
    header: "Set Default Payment Method",
    message: `Set ${method} as your default payment method?`,
    cssClass: "custom-alert",
    buttons: [
      {
        text: "Confirm",
        handler: async () => {
          localStorage.setItem("defaultPaymentMethod", method);
          console.log(localStorage.getItem("defaultPaymentMethod"));

          const successAlert = await alertController.create({
            header: "Success",
            message: `${method} has been set as your default payment method.`,
            cssClass: "custom-alert",
            buttons: [
              {
                text: "OK",
                handler: () => {
                  router.push("/tabs/AuthorizePaymentPage");
                },
              },
            ],
          });
          await successAlert.present();
        },
      },
      {
        text: "Cancel",
        role: "cancel",
      },
    ],
  });

  await alert.present();
}
</script>
