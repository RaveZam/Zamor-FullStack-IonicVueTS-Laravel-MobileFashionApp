import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";
import { alertController } from "@ionic/vue";
import { useLoadingScreen } from "@/Hooks/useLoadingScreen";
import { useGetCookie } from "@/Hooks/useGetCookies";
const { getCookie } = useGetCookie();
const token = getCookie("authToken");

interface cartItem {
  id: number;
  quantity: number;
  size: string;
  product: {
    id: number;
    productName: string;
    productThumbnail: string;
    productPrice: number;
    slug: string;
    stock: number;
  };
}

interface cartItemWithCheckbox extends cartItem {
  checked: boolean;
}

const cart = ref<cartItemWithCheckbox[]>([]);

const { loadingScreen } = useLoadingScreen();

async function fetchCart() {
  loadingScreen({ show: true, success: false, message: "Loading Items..." });

  await axios
    .get("http://127.0.0.1:8000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      const savedCheckbox = JSON.parse(
        localStorage.getItem("checkedItem") || "{}"
      );

      cart.value = response.data.map((item: cartItemWithCheckbox) => ({
        ...item,
        checked: savedCheckbox[item.id] || false,
      }));
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loadingScreen({ show: false, success: true, message: "Cart Loaded" });
    });
}

function addToCart(
  product_id: number | undefined,
  productName: string | undefined,
  size: string | undefined
) {
  axios
    .post(
      "http://127.0.0.1:8000/api/cart",
      {
        product_id: product_id,
        quantity: 1,
        size: size,
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

async function removeItem(id: number, productName: string | undefined) {
  const alert = await alertController.create({
    header: "Delete",
    message: `Are you sure you want to delete ${productName}?`,
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

const increaseQuantity = (item: any) => {
  item.quantity++;

  axios
    .put(
      "http://127.0.0.1:8000/api/increaseQuantity",
      {
        id: item.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
    .then(() => fetchCart());
};
const decreaseQuantity = (item: any) => {
  if (item.quantity > 1) item.quantity--;

  axios
    .put(
      "http://127.0.0.1:8000/api/decreaseQuantity",
      {
        id: item.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      }
    )
    .then(() => fetchCart());
};

export function useCart() {
  return {
    cart,
    addToCart,
    fetchCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  };
}
