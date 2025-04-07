<template>
  <div>
    <div class="text-center mb-8">
      <h1 class="font-latoHeadings opacity-80">Welcome Back!</h1>
    </div>
    <h1>Sign In</h1>

    <div class="gap-y-4 flex flex-col mt-8">
      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Email/Username"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Email"
        ></ion-input>
      </div>
      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Password"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Password"
        ></ion-input>
      </div>

      <div class="items-center">
        <ion-checkbox justify="start" label-placement="end"
          >Remember Me</ion-checkbox
        >
      </div>

      <div class="bg-black rounded-md w-full text-center p-4">
        <span class="text-white font-latoSubTitle">Sign In</span>
      </div>

      <span class="text-center opacity-70 mt-4"> Forgot Password? </span>

      <div class="flex justify-center mt-4">
        <div class="border-t-1 w-1/3 mt-3 opacity-70"></div>
        <span class="px-4">OR</span>
        <div class="border-t-1 w-1/3 mt-3 opacity-70"></div>
      </div>

      <span class="text-center font-latoSubTitle">Sign In With</span>

      <div class="flex justify-center mt-4">
        <IonImg class="w-20" src="./images/brandLogos/apple.png"></IonImg>
        <IonImg class="w-20" src="./images/brandLogos/fb.png"></IonImg>
        <IonImg class="w-20" src="./images/brandLogos/google.png"></IonImg>
      </div>

      <div class="justify-center flex">
        <span class="opacity-70">Dont have an Account? </span>
        <span @click="goToRegister" class="ml-2 font-bold"> Sign Up</span>
      </div>

      <div class="flex justify-center w-full mt-8">
        <div class="border-t-3 w-1/3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonInput, IonCheckbox, IonImg } from "@ionic/vue";

const props = defineProps({
  isLogin: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update-login"]);

function goToRegister() {
  emit("update-login", !props.isLogin);
}
</script>

<style>
ion-checkbox {
  --size: 20px;
  --checkbox-background-checked: #000000;
  --transition: background-color 0.3s ease, border-color 0.3s ease;
}
ion-checkbox::part(container) {
  border-radius: 6px;
  border: 1px solid #000000;
}

ion-checkbox::part(label) {
  padding-bottom: 4px;
  opacity: 0.8;
}
</style>
