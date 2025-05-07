<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar class="h-12" :hidden="isHidden" slot="bottom">
        <ion-tab-button
          class="my-4"
          :style="{
            '--color-selected': 'black',
          }"
          tab="Home"
          href="/tabs/Home"
        >
          <ion-icon aria-hidden="true" :icon="homeOutline" />
        </ion-tab-button>

        <ion-tab-button
          class="my-4"
          :style="{
            '--color-selected': 'black',
          }"
          tab="SearchProducts"
          href="/tabs/SearchProducts"
        >
          <ion-icon aria-hidden="true" :icon="searchOutline" />
        </ion-tab-button>
        <ion-tab-button
          class="my-4"
          :style="{
            '--color-selected': 'black',
          }"
          tab="SearchProducts"
          href="/tabs/SearchProducts"
        >
          <h1 class="font-latoSubTitle pb-2">Menu</h1>
        </ion-tab-button>

        <ion-tab-button
          class="my-4"
          :style="{
            '--color-selected': 'black',
          }"
          tab="CartPage"
          href="/tabs/CartPage"
        >
          <ion-icon aria-hidden="true" :icon="cartOutline" />
        </ion-tab-button>

        <ion-tab-button
          class="my-4"
          :style="{
            '--color-selected': 'black',
          }"
          tab="Account"
          href="/tabs/Account"
        >
          <ion-icon aria-hidden="true" :icon="personOutline" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {
  ellipse,
  square,
  homeOutline,
  searchOutline,
  cartOutline,
  personOutline,
} from "ionicons/icons";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isHidden = computed(
  () =>
    route.path === "/tabs/CartPage" ||
    route.path === "/tabs/Landing" ||
    route.path === "/tabs/Authpage"
);
</script>
