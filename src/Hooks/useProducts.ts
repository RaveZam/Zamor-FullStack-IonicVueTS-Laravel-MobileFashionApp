import axios from "axios";
import { ref } from "vue";

export function useProducts() {
  type productCardTypes = {
    id: number;
    productThumbnail: string;
    brandName: string;
    productPrice: number;
    productName: string;
    slug: string;
    stock: number;
  };

  let shuffledProducts = ref<productCardTypes[]>([]);

  const mockUpDBProducts = ref<productCardTypes[]>([]);

  axios.get("http://127.0.0.1:8000/api/product").then((response) => {
    const filteredProducts = response.data.filter(
      (product: productCardTypes) => product.stock > 0
    );
    mockUpDBProducts.value = filteredProducts;

    shuffledProducts.value = filteredProducts
      .sort(() => 0.5 - Math.random())
      .splice(0, 4);
  });

  return { mockUpDBProducts, shuffledProducts };
}
