import axios from "axios";
import { ref } from "vue";

export function useProducts() {
  type productCardTypes = {
    productID: number;
    productThumbnail: string;
    brandName: string;
    productPrice: number;
    productName: string;
    slug: string;
  };

  const mockUpDBProducts = ref<productCardTypes[]>([]);

  axios.get("http://127.0.0.1:8000/api/product").then((response) => {
    mockUpDBProducts.value = response.data;
  });

  return { mockUpDBProducts };
}
