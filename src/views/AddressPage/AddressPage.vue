<template>
  <ion-page>
    <ion-content class="font-latoGoogle">
      <div class="mx-4">
        <div
          @click="$router.go(-1)"
          class="mt-8 mb-4 w-full mx-4 hover:cursor-pointer"
        >
          <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
        </div>

        <div class="flex flex-col gap-y-4">
          <span class="text-lg">NEW ADDRESS</span>

          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle text-lg"
              type="text"
              label="NAME"
              label-placement="floating"
              fill="outline"
              v-model="addressData.name"
            ></ion-input>
          </div>
          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle text-lg"
              type="text"
              label="SURNAME"
              label-placement="floating"
              fill="outline"
              v-model="addressData.surname"
            ></ion-input>
          </div>
          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle text-lg"
              type="text"
              label="ADDRESS"
              label-placement="floating"
              fill="outline"
              v-model="addressData.address"
            ></ion-input>
          </div>
          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle text-lg"
              type="text"
              label="FLATNUMBER"
              label-placement="floating"
              fill="outline"
              v-model="addressData.flatNumber"
            ></ion-input>
          </div>
          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle"
              type="text"
              label="STATE OR PROVINCE"
              label-placement="floating"
              fill="outline"
              v-model="addressData.province"
            ></ion-input>
          </div>
          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle text-lg"
              type="text"
              label="POST CODE"
              label-placement="floating"
              fill="outline"
              v-model="addressData.postcode"
            ></ion-input>
          </div>
          <div class="border-b-1 border-black">
            <ion-input
              class="font-latoGoogle text-lg"
              type="text"
              label="PHONE NUMBER"
              label-placement="floating"
              fill="outline"
              v-model="addressData.phoneNumber"
            ></ion-input>
          </div>
          <div
            @click="saveAddress"
            class="border-black py-2 px-8 border-1 text-center w-1/2 hover:cursor-pointer"
          >
            <span class="text-md">SAVE</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonIcon, IonInput } from "@ionic/vue";
import axios from "axios";
import { reactive } from "vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
import { alertController } from "@ionic/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { getCookie } = useGetCookie();
const token = getCookie("authToken");

const addressData = reactive({
  name: "",
  surname: "",
  address: "",
  flatNumber: "",
  province: "",
  postcode: "",
  phoneNumber: "",
});

function saveAddress() {
  console.log("Pushing with", token);
  axios
    .post("http://127.0.0.1:8000/api/address", addressData, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (response.status === 201) {
        successAlert();
      }
    })
    .catch((error) => console.log(error));
}

async function successAlert() {
  const alert = await alertController.create({
    header: "Address Saved",
    message: `Address Succesfully Saved`,
    buttons: [
      {
        text: "Continue",
        handler: async () => {
          router.push("/tabs/Account");
        },
      },
    ],
  });

  await alert.present();
}
</script>
