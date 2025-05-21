import axios from "axios";
import { ref, onMounted } from "vue";

export function useProducts() {
  type Product = {
    id: number;
    productThumbnail: string;
    brandName: string;
    productPrice: number;
    productName: string;
    slug: string;
    stock: number;
  };

  const mockUpDBProducts = ref<Product[]>([]);
  const shuffledProducts = ref<Product[]>([]);
  const isLoading = ref(true);
  const error = ref<string | null>(null);

  async function fetchProducts() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/product");
      const availableProducts: Product[] = response.data.filter(
        (product: Product) => product.stock > 0
      );
      mockUpDBProducts.value = availableProducts;
      shuffledProducts.value = [...availableProducts]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);
    } catch (err: any) {
      error.value = err.message || "Failed to load products";
    } finally {
      isLoading.value = false;
    }
  }

  onMounted(() => {
    fetchProducts();
  });

  return {
    mockUpDBProducts,
    shuffledProducts,
    isLoading,
    error,
    refetch: fetchProducts,
  };
}
