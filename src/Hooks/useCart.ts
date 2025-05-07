import axios from "axios";
import { onMounted, ref } from "vue";
import { useGetCookie } from "@/Hooks/useGetCookies";
const { getCookie } = useGetCookie();
const token = getCookie("authToken");

interface cartItem {
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

function addToCart(item: cartItem) {
  console.log("Initated Push");
  const existingItem = cart.value.find(
    (cartItem) => cartItem.product.id === item.product.id
  );

  if (existingItem) {
    existingItem.product.productQuantity += item.product.productQuantity;
    console.log(cart.value);
  } else {
    cart.value.push(item);
    console.log(cart.value);
  }
}

onMounted(() => {});

export function useCart() {
  return { cart, addToCart, fetchCart };
}
