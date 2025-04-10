import router from "@/router";
import { loadingController } from "@ionic/vue";

interface LoadingOptions {
  show: boolean;
  success: boolean;
}

let loading: HTMLIonLoadingElement | null = null;

async function loadingScreen(options: LoadingOptions) {
  const { show, success } = options;

  if (show) {
    loading = await loadingController.create({
      message: "Redirecting...",
      spinner: "crescent",
      cssClass: "custom-loading",
    });

    await loading.present();
    console.log("Initiating Loading");
  } else {
    if (loading) {
      await loading.dismiss();
      console.log("Dismissing Loading");
      loading = null;
    }
    if (success) {
      router.push("/tabs/Home");
    }
  }
}

export function useLoadingScreen() {
  return { loadingScreen };
}
