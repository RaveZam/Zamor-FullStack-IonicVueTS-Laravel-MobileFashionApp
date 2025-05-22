import axios from "axios";

import { useGetCookie } from "@/Hooks/useGetCookies";
import { useCustomAlert } from "@/Hooks/useCustomAlert";
import { alertController } from "@ionic/vue";

const { getCookie } = useGetCookie();
const { handleErrorMessage } = useCustomAlert();

const token = getCookie("authToken");

let wasAdded = false;

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
    .then(() => {
      wasAdded = true;
      fetchFavorites();
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

import { onMounted, ref } from "vue";
import { useLoadingScreen2 } from "./useLoadingScreen2";

const { loadingScreen } = useLoadingScreen2();

async function removeFavorite(id: number | null) {
  const alert = await alertController.create({
    header: "Remove From Favorites?",
    message: "Confirm to remove this item from your favorites",
    buttons: [
      {
        text: "Continue",
        handler: () => {
          console.log(id);
          axios
            .delete(`http://127.0.0.1:8000/api/favorite`, {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
              data: {
                product_id: id,
              },
            })
            .then((response) => {
              fetchFavorites();
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
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

const favoriteItems = ref<any[]>([]);
function fetchFavorites() {
  loadingScreen({
    show: true,
    success: false,
    message: "Loading Items...",
  });
  axios
    .get("http://127.0.0.1:8000/api/favorite", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      favoriteItems.value = response.data;
      loadingScreen({
        show: false,
        success: true,
        message: "Fetched",
      });

      if (wasAdded) {
        successAlert();
        wasAdded = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  fetchFavorites();
});

export function useFavorite() {
  return {
    handleAddToFavorites,
    removeFavorite,
    favoriteItems,
    fetchFavorites,
  };
}
