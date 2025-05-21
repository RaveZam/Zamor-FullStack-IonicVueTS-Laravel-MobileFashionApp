<template>
  <ion-page>
    <ion-content>
      <Header />
      <div class="mt-8 mx-4">
        <div class="flex flex-col gap-4 font-latoGoogle text-sm mr-4">
          <h1>SETTINGS</h1>
          <div
            @click="$router.push('/tabs/account')"
            class="flex item-center justify-between hover:cursor-pointer"
          >
            <span>PROFILE</span> <ion-icon name="chevron-forward-outline" />
          </div>
          <div class="flex item-center justify-between hover:cursor-pointer">
            <span>PURCHASES</span>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div
            @click="$router.push('/tabs/PaymentOptionScreen')"
            class="flex item-center justify-between hover:cursor-pointer"
          >
            <span>PAYMENT METHODS</span>
            <ion-icon name="chevron-forward-outline" />
          </div>
          <div
            @click="$router.push('/tabs/FavoriteProducts')"
            class="flex item-center justify-between mt-8 hover:cursor-pointer"
          >
            <div class="flex item-center gap-x-2">
              <span>FAVORITES</span>
              <IonIcon class="text-lg" name="bookmark-outline" />
            </div>

            <ion-icon name="chevron-forward-outline" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import HomeHeader from "@/components/HomeHeader.vue";
import Header from "@/components/Header.vue";
</script>
