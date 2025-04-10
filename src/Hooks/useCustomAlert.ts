import { alertController } from "@ionic/vue";

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

export function useCustomAlert() {
  return { handleErrorMessage };
}
