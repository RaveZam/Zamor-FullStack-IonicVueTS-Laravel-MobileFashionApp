import axios from "axios";
import { computed, onMounted, ref } from "vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
import { alertController } from "@ionic/vue";
const { getCookie } = useGetCookie();
const token = getCookie("authToken");

interface cartItem {
  id: number;
  quantity: number;
  product: {
    id: number;
    productName: string;
    productThumbnail: string;
    productPrice: number;
    productSlug: string;
  };
}

const cart = ref<cartItem[]>([]);

async function fetchCart() {
  await axios
    .get("http://127.0.0.1:8000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      cart.value = response.data;
    })
    .catch((error) => console.log(error));
}

const total = computed(() =>
  cart.value.reduce(
    (sum, item) => sum + item.quantity * item.product.productPrice,
    0
  )
);

function addToCart(
  product_id: number | undefined,
  productName: string | undefined
) {
  axios
    .post(
      "http://127.0.0.1:8000/api/cart",
      {
        product_id: product_id,
        quantity: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
    .then(() => {
      successAlert(productName);
    });
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

async function successAlert(productName: string | undefined) {
  const alert = await alertController.create({
    header: "Item Added To Cart",
    message: `${productName} Added Successfully`,
    buttons: [
      {
        text: "Continue",
        handler: async () => {},
      },
    ],
  });

  await alert.present();
}

export function useCart() {
  return { cart, addToCart, fetchCart, removeItem, total };
}
