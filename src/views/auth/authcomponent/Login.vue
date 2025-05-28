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
          class="flex justify-center"
          type="password"
          label="Password"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Password"
          v-model="userCredentials.password"
        >
          <ion-input-password-toggle
            v-if="userCredentials.password"
            color="dark"
            slot="end"
          ></ion-input-password-toggle
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

      <div
        @click="signIn"
        class="bg-black rounded-md w-full text-center p-4 hover:cursor-pointer"
      >
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
        <span @click="goToRegister" class="ml-2 font-bold hover:cursor-pointer">
          Sign Up</span
        >
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
  IonInputPasswordToggle,
} from "@ionic/vue";
import { computed, reactive } from "vue";
import axios from "axios";
import { useLoadingScreen } from "@/Hooks/useLoadingScreen";
import { useCustomAlert } from "@/Hooks/useCustomAlert";

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

const { loadingScreen } = useLoadingScreen();
const { handleErrorMessage } = useCustomAlert();

function signIn() {
  loadingScreen({ show: true, success: false, message: "Signing In..." });
  if (userCredentials.email == "" || userCredentials.password == "") {
    return;
  } else {
    document.cookie =
      "rememberMeToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    axios
      .post("http://127.0.0.1:8000/api/login", userCredentials)
      .then((response) => {
        if (response.status == 200) {
          document.cookie = `authToken=${response.data.token}; path=/; max-age=86400`;

          let userData = {
            username: response.data.user.name,
            email: response.data.user.email,
          };

          localStorage.setItem("userData", JSON.stringify(userData));

          if (response.data.remember_token) {
            document.cookie = `rememberMeToken=${response.data.remember_token}; path=/; max-age=604800`;

            // let userData = {
            //   username: response.data.user.name,
            //   email: response.data.user.email,
            // };

            // localStorage.setItem("userData", JSON.stringify(userData));
          }
          loadingScreen({
            show: false,
            success: true,
            message: "Signing In...",
          });
        }
      })
      .catch((error) => {
        if (error.response.status == 401) {
          let message = "Invalid Password";
          loadingScreen({
            show: false,
            success: false,
            message: "Invalid Password",
          });
          handleErrorMessage(message);
        } else if (error.response.status == 404) {
          let message = "User Does Not Exist";
          loadingScreen({
            show: false,
            success: false,
            message: "User Does Not Exist",
          });
          handleErrorMessage(message);
        }
      });
  }
}

const emit = defineEmits(["update-login"]);

function goToRegister() {
  emit("update-login", !props.isLogin);
}
</script>
