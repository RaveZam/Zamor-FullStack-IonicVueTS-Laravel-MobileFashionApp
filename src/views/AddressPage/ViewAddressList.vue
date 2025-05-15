<template>
  <ion-page>
    <ion-content>
      <div class="font-latoGoogle flex flex-col mx-6 h-full">
        <div @click="$router.go(-1)" class="mt-8 w-full hover:cursor-pointer">
          <IonIcon class="text-xl" name="arrow-back-sharp"></IonIcon>
        </div>

        <h1>Addresses</h1>

        <div class="" v-for="address in addressList" :key="address.id">
          <div
            class="flex flex-col my-4 px-1 w-full border-b-1 border-black pb-4"
          >
            <div class="flex items-stretch">
              <div
                class="hover:cursor-pointer"
                @click="setSelectedAddress(address.id)"
              >
                <span class="text-lg"
                  >{{ address.name }} {{ address.surname }}</span
                >
                <div class="text-gray-800 flex flex-col">
                  <span>{{ address.flatNumber }} </span>
                  <span>{{ address.postcode }} {{ address.address }} </span>
                  <span>+63 {{ address.phoneNumber }}</span>
                </div>

                <div
                  v-if="selectedAddress?.id == address.id"
                  class="border-1 border-black py-2 mt-1 w-1/2 text-center"
                >
                  <span>Invoicing</span>
                </div>
              </div>
              <div class="flex flex-auto items-center justify-end mr-8">
                <div class="text-lg hover:cusor-pointer z-10">
                  <IonIcon
                    class="text-lg hover:cusor-pointer"
                    @click="deleteAddress(address.id)"
                    name="trash-outline"
                  ></IonIcon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          @click="$router.push(`/tabs/AddressPage`)"
          class="mt-auto flex mb-12 w-full justify-center hover:cursor-pointer"
        >
          <div class="border-1 border-black py-4 px-12">
            <span>Add Address</span>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage, IonIcon, onIonViewWillEnter } from "@ionic/vue";
import { useAddress } from "@/Hooks/useAddress";

const {
  fetchAddresses,
  addressList,
  deleteAddress,
  setSelectedAddress,
  selectedAddress,
} = useAddress();

onIonViewWillEnter(() => {
  fetchAddresses();
});
</script>
