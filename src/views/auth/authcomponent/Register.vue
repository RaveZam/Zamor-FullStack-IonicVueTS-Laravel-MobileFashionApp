<template>
  <div>
    <div class="text-center mb-8">
      <h1 class="font-latoHeadings opacity-80">Welcome!</h1>
    </div>
    <h1>Sign Up</h1>

    <div class="gap-y-4 flex flex-col mt-8">
      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Email"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Email"
          v-model="userRegistration.email"
        ></ion-input>
      </div>
      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Username"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Username"
          v-model="userRegistration.name"
        ></ion-input>
      </div>
      <span v-if="passwordError" class="text-red-700">
        {{ passwordError }}</span
      >
      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Password"
          label-placement="floating"
          fill="outline"
          placeholder="Enter Password"
          v-model="userRegistration.password"
          type="password"
        ></ion-input>
      </div>

      <div class="border-1 border-black rounded-sm px-4 pb-1">
        <ion-input
          label="Confirm Password"
          label-placement="floating"
          fill="outline"
          placeholder="Confirm Password"
          v-model="userRegistration.password_confirmation"
          type="password"
        ></ion-input>
      </div>

      <div class="items-center">
        <ion-checkbox
          v-model="userRegistration.remember"
          justify="start"
          label-placement="end"
          >Remember Me</ion-checkbox
        >
      </div>

      <div
        @click="handleRegister"
        class="bg-black rounded-md w-full text-center p-4"
      >
        <span class="text-white font-latoSubTitle">Sign Up</span>
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
        <span class="opacity-70">Already have an Account? </span>
        <span @click="goToRegister" class="ml-2 font-bold"> Sign In</span>
      </div>

      <div class="flex justify-center w-full mt-8">
        <div class="border-t-3 w-1/3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IonInput, IonCheckbox, IonImg } from "@ionic/vue";
import axios from "axios";
import { computed, reactive, ref } from "vue";
import { useLoadingScreen } from "@/Hooks/useLoadingScreen";
import { useCustomAlert } from "@/Hooks/useCustomAlert";

const props = defineProps({
  isLogin: {
    type: Boolean,
    required: true,
  },
});

const userRegistration = reactive({
  email: "",
  name: "",
  password: "",
  password_confirmation: "",
  remember: false,
});

const emit = defineEmits(["update-login"]);

function goToRegister() {
  emit("update-login", !props.isLogin);
}

const { loadingScreen } = useLoadingScreen();
const { handleErrorMessage } = useCustomAlert();

const passwordError = ref<string>("");

function validatePassword(password: string, confirm: string): boolean {
  if (password !== confirm) {
    passwordError.value = "Passwords do not match.";
    return false;
  }
  if (password.length < 8) {
    passwordError.value = "Password must be at least 8 characters.";
    return false;
  }
  if (!/[A-Z]/.test(password)) {
    passwordError.value = "Include at least one uppercase letter.";
    return false;
  }
  if (!/[a-z]/.test(password)) {
    passwordError.value = "Include at least one lowercase letter.";
    return false;
  }
  if (!/[0-9]/.test(password)) {
    passwordError.value = "Include at least one number.";
    return false;
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    passwordError.value = "Include at least one symbol.";
    return false;
  }

  passwordError.value = ""; // clear error
  return true;
}

function handleRegister() {
  const isValid = validatePassword(
    userRegistration.password,
    userRegistration.password_confirmation
  );

  if (!isValid) return;

  loadingScreen({
    show: true,
    success: false,
    message: "Signing In...",
  });

  axios
    .post("http://127.0.0.1:8000/api/register", userRegistration)
    .then((response) => {
      if (response.status === 201 || 200)
        document.cookie = `authToken=${response.data.token}; path=/; max-age=3600`;
      let userData = {
        username: response.data.user.name,
        email: response.data.user.email,
      };

      localStorage.setItem("userData", JSON.stringify(userData));

      if (response.data.remember_token) {
        document.cookie = `rememberMeToken=${response.data.remember_token}; path=/; max-age=604800`;
        let userData = {
          username: response.data.user.name,
          email: response.data.user.email,
        };

        localStorage.setItem("userData", JSON.stringify(userData));
      }

      loadingScreen({
        show: false,
        success: true,
        message: "Signing In...",
      });
    })
    .catch((error) => {
      console.log(error);

      const msg = error?.response?.data?.message;
      const errs = error?.response?.data?.errors;

      if (msg === "The password confirmation does not match.") {
        loadingScreen({
          show: false,
          success: false,
          message: "Signing In...",
        });
        handleErrorMessage(msg);
      } else if (error?.response?.status === 500) {
        loadingScreen({
          show: false,
          success: false,
          message: "Please Try again",
        });
        handleErrorMessage("Email Already Exists");
      } else if (error?.response?.status === 422) {
        loadingScreen({
          show: false,
          success: false,
          message: "Please Try again",
        });
        handleErrorMessage("Invalid Email");
      }
    });
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
