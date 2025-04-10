import router from "@/router";
import { loadingController } from "@ionic/vue";

async function loadingScreen() {
  const loading = await loadingController.create({
    message: "Redirecting...",
    duration: 3000,
    spinner: "crescent",
    cssClass: "custom-loading",
  });

  await loading.present();

  await loading.onDidDismiss();
  router.push("/tabs/Home");
}

export function useLoadingScreen() {
  return { loadingScreen };
}
