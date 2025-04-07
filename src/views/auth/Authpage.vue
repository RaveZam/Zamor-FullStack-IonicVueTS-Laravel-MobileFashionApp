<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="font-lato flex flex-col justfiy-center items-center">
        <div class="mt-12 mb-4">
          <h1 class="font-latoTitle">ZAMOR</h1>
        </div>

        <div class="w-full flex flex-col justfiy-center items-center">
          <div class="w-5/6">
            <Login
              v-if="isLogin"
              :isLogin="isLogin"
              @update-login="updateLogin"
            />
            <Register v-else :isLogin="isLogin" @update-login="updateLogin" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonContent } from "@ionic/vue";
import Login from "./authcomponent/Login.vue";
import Register from "./authcomponent/Register.vue";
import { ref } from "vue";

const isLogin = ref(true);

function updateLogin(newValue: boolean) {
  isLogin.value = newValue;
}
</script>
