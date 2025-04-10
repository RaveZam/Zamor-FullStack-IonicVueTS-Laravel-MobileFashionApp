import { ref } from "vue";

interface cartItem {
  productID: number;
  productName: string;
  productThumbnail: string;
  productPrice: number;
  productQuantity: number;
  productSlug: string;
}

const cart = ref<cartItem[]>([]);

function addToCart(item: cartItem) {
  console.log("Initated Push");
  const existingItem = cart.value.find(
    (cartItem) => cartItem.productID === item.productID
  );

  if (existingItem) {
    existingItem.productQuantity += item.productQuantity;
    console.log(cart.value);
  } else {
    cart.value.push(item);
    console.log(cart.value);
  }
}

export function useCart() {
  return { cart, addToCart };
}
