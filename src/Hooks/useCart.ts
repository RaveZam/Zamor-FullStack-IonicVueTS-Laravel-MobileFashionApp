import axios from "axios";
import { onMounted, ref } from "vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
import { alertController } from "@ionic/vue";
const { getCookie } = useGetCookie();
const token = getCookie("authToken");

interface cartItem {
  id: number;
  product: {
    id: number;
    productName: string;
    productThumbnail: string;
    productPrice: number;
    productQuantity: number;
    productSlug: string;
  };
}

const cart = ref<cartItem[]>([]);

function fetchCart() {
  axios
    .get("http://127.0.0.1:8000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      cart.value = response.data;
      console.log("Cart data fetched successfully:", cart.value);
    })
    .catch((error) => console.log(error));
}

function addToCart(product_id: number | undefined) {
  axios.post("http://127.0.0.1:8000/api/cart", {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    data: {
      product_id: product_id,
      quantity: 1

    })
}


async function removeItem(id: number) {
  const alert = await alertController.create({
    header: "Delete",
    message: "Are you sure you want to delete this Item?",
    buttons: [
      {
        text: "Yes",
        handler: async () => {
          axios
            .delete("http://127.0.0.1:8000/api/cart", {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
              data: {
                id: id,
              },
            })
            .then(() => {
              fetchCart();
            })
            .catch((error) => console.log(error));
        },
      },
      {
        text: "No",
        role: "cancel",
      },
    ],
  });

  await alert.present();
}

export function useCart() {
  return { cart, addToCart, fetchCart, removeItem };
}
