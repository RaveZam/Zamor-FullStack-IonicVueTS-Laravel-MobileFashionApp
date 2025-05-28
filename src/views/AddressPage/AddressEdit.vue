<template>
  <ion-page>
    <ion-content class="font-latoGoogle">
      <Header />
      <div class="mx-4">
        <div class="flex flex-col gap-y-4">
          <span class="text-lg">UPDATE ADDRESS</span>

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
            @click="updateAddress"
            class="border-black py-2 px-8 border-1 text-center w-1/2 hover:cursor-pointer"
          >
            <span class="text-md">UPDATE</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonInput } from "@ionic/vue";
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { alertController } from "@ionic/vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
import Header from "@/components/Header.vue";

const route = useRoute();
const router = useRouter();
const { getCookie } = useGetCookie();
const token = getCookie("authToken");

const addressId = route.params.id;

const addressData = reactive({
  name: "",
  surname: "",
  address: "",
  flatNumber: "",
  province: "",
  postcode: "",
  phoneNumber: "",
});

onMounted(() => {
  fetchAddress();
});

function fetchAddress() {
  axios
    .get(`http://127.0.0.1:8000/api/getSingleAddress/${addressId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      const data = response.data;
      addressData.name = data.name;
      addressData.surname = data.surname;
      addressData.address = data.address;
      addressData.flatNumber = data.flatNumber;
      addressData.province = data.province;
      addressData.postcode = data.postcode;
      addressData.phoneNumber = data.phoneNumber;
    })
    .catch((error) => {
      console.error("Failed to fetch address", error);
    });
}

function updateAddress() {
  axios
    .put(`http://127.0.0.1:8000/api/address/${addressId}`, addressData, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        successAlert();
      }
    })
    .catch((error) => {
      console.error("Failed to update address", error);
    });
}

async function successAlert() {
  const alert = await alertController.create({
    header: "Address Updated",
    message: `Address was successfully updated.`,
    buttons: [
      {
        text: "Back",
        handler: () => {
          router.go(-1);
        },
      },
    ],
  });

  await alert.present();
}
</script>
