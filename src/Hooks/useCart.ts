import axios from "axios";
import { computed, onMounted, ref, watch } from "vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
import { alertController } from "@ionic/vue";
import { useLoadingScreen } from "@/Hooks/useLoadingScreen";
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

interface cartItemWithCheckbox extends cartItem {
  checked: boolean;
}

const cart = ref<cartItemWithCheckbox[]>([]);


const { loadingScreen } = useLoadingScreen();

async function fetchCart() {
  loadingScreen({ show: true, success: false, message: "Loading Cart..." });


  await axios
    .get("http://127.0.0.1:8000/api/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      const savedCheckbox = JSON.parse(localStorage.getItem("checkedItem") || "{}");

      cart.value = response.data.map((item: cartItemWithCheckbox) => ({
        ...item,
        checked: savedCheckbox[item.id] || false,
      })) ;
      loadingScreen({ show: false, success: true, message: "Cart Loaded" });
    })
    .catch((error) => console.log(error));
}



// const total = computed(() =>
//   cart.value.reduce(
//     (sum, item) => sum + item.quantity * item.product.productPrice,
//     0
//   )
// );

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

export function useCart() {
  return { cart, addToCart, fetchCart, removeItem };
}
