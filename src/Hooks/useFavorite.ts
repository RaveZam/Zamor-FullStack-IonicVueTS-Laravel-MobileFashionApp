import axios from "axios";

import { useGetCookie } from "@/Hooks/useGetCookies";
import { useCustomAlert } from "@/Hooks/useCustomAlert";
import { alertController } from "@ionic/vue";

const { getCookie } = useGetCookie();
const { handleErrorMessage } = useCustomAlert();

const token = getCookie("authToken");

function addToFavorites(id: number | null) {
  axios
    .post(
      "http://127.0.0.1:8000/api/favorite",
      {
        product_id: id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
    .then((response) => {
      successAlert();
    })
    .catch((error) => {
      if (error.status === 400) {
        handleErrorMessage("Item already in favorites");
      }
    });
}

async function handleAddToFavorites(id: number | null) {
  const alert = await alertController.create({
    header: "Add To Favorites?",
    message: "Confirm to add this item to your favorites",
    buttons: [
      {
        text: "Continue",
        handler: () => {
          addToFavorites(id);
        },
      },
      {
        text: "Cancel",
        role: "cancel",
      },
    ],
  });

  await alert.present();
}

async function successAlert() {
  const alert = await alertController.create({
    header: "Item Added To Favorites",
    message: "Added Successfully",
    buttons: [
      {
        text: "Continue",
      },
    ],
  });
  await alert.present();
}

export function useFavorite() {
  return {
    handleAddToFavorites,
  };
}
