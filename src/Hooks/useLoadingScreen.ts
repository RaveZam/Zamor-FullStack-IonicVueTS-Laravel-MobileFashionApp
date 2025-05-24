import router from "@/router";
import { loadingController } from "@ionic/vue";

interface LoadingOptions {
  show: boolean;
  success: boolean;
  message: string;
}

let loading: HTMLIonLoadingElement | null = null;

async function loadingScreen(options: LoadingOptions) {
  const { show, success, message } = options;

  if (show) {
    loading = await loadingController.create({
      message: message,
      spinner: "crescent",
      cssClass: "custom-loading",
    });

    await loading.present();
  } else {
    if (loading) {
      await loading.dismiss();
      loading = null;
    }
    if (success) {
      if (message === "Signing In...") {
        router.push("/tabs/Home");
      } else if (message === "Authorizing...") {
        router.push("/tabs/SuccessfulTransactionPage");
      }
    }
  }
}

export function useLoadingScreen() {
  return { loadingScreen };
}
