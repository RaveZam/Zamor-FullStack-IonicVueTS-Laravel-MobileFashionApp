<template>
  <ion-page>
    <ion-content>
      <Header />
      <div class="font-latoGoogle flex flex-col mx-6 h-[90%]">
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
                <div
                  class="text-lg flex gap-y-18 flex-col hover:cusor-pointer z-10"
                >
                  <IonIcon
                    name="pencil-outline"
                    class="text-lg hover:cusor-pointer"
                    @click="goToUpdatePage(address.id)"
                  >
                  </IonIcon>
                  <IonIcon
                    class="text-lg hover:cusor-pointer pb-2"
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
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const {
  fetchAddresses,
  addressList,
  deleteAddress,
  setSelectedAddress,
  selectedAddress,
} = useAddress();
function goToUpdatePage(id: number | string) {
  router.push(`/update-address/${id}`);
}

onIonViewWillEnter(() => {
  fetchAddresses();
});
</script>
