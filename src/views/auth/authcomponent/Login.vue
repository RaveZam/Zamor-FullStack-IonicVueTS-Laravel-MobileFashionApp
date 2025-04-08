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
          v-model="userCredentials.email"
        ></ion-input>
      </div>
      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Password"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Password"
          v-model="userCredentials.password"
        ></ion-input>
      </div>

      <div class="items-center">
        <ion-checkbox
          v-model="userCredentials.remember"
          justify="start"
          label-placement="end"
          >Remember Me</ion-checkbox
        >
      </div>

      <div @click="signIn" class="bg-black rounded-md w-full text-center p-4">
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
import {
  IonInput,
  IonCheckbox,
  IonImg,
  alertController,
  loadingController,
} from "@ionic/vue";
import { reactive } from "vue";
import axios from "axios";

const props = defineProps({
  isLogin: {
    type: Boolean,
    required: true,
  },
});

const userCredentials = reactive({
  email: "",
  password: "",
  remember: false,
});

function signIn() {
  if (userCredentials.email == "" || userCredentials.password == "") {
    return;
  } else {
    axios
      .post("http://127.0.0.1:8000/api/login", userCredentials)
      .then((response) => {
        if (response.status == 200) {
          loadingScreen();
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          let message = "Invalid Password";
          handleErrorMessage(message);
        } else if ((error.response.status = 404)) {
          let message = "User Does Not Exist";
          handleErrorMessage(message);
        }
      });
  }
}
const emit = defineEmits(["update-login"]);

function goToRegister() {
  emit("update-login", !props.isLogin);
}

async function loadingScreen() {
  const loading = await loadingController.create({
    message: "Redirecting...",
    duration: 3000,
    spinner: "crescent",
    cssClass: "custom-loading",
  });

  await loading.present();
}

async function handleErrorMessage(message: string) {
  const alert = await alertController.create({
    header: "Oops!",
    message: message,
    cssClass: "custom-alert",
    buttons: [
      {
        text: "Confirm",
      },
    ],
  });
  await alert.present();
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

.custom-alert .alert-wrapper {
  gap: 8px;
}

.custom-alert .alert-message {
  font-size: 1rem;
  opacity: 0.8;
}

ion-loading {
  --spinner-color: red;
}
</style>
