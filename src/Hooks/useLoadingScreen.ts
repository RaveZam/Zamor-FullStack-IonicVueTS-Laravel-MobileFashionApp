import router from "@/router";
import { loadingController } from "@ionic/vue";

async function loadingScreen(isLoading: boolean) {
  const loading = await loadingController.create({
    message: "Redirecting...",
    spinner: "crescent",
    cssClass: "custom-loading",
  });

  if (isLoading) {
    await loading.present();
    console.log("Initiating Loading");
  } else {
    if (!isLoading) {
      await loading.dismiss();
      console.log("Dismissing Loading");
    }
  }

  if (!isLoading) {
    loading.dismiss();
    router.push("/tabs/Home");
  }
}

export function useLoadingScreen() {
  return { loadingScreen };
}
