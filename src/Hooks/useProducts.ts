import { ref } from "vue";

export function useProducts() {
  type productCardTypes = {
    productThumbnail: string;
    brandName: string;
    productPrice: number;
    productName: string;
  };

  const mockUpDBProducts = ref<productCardTypes[]>([
    {
      productThumbnail: "./images/Clothings/BrownCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
    },
    {
      productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
    },
    {
      productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
    },
    {
      productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
    },
    {
      productThumbnail: "./images/Clothings/LongCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 2000,
      productName: "Long Coat",
    },
    {
      productThumbnail: "./images/Clothings/SlimLeggings.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "SlimLeggings",
    },
    {
      productThumbnail: "./images/Clothings/BrownCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
    },
    {
      productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
    },
    {
      productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
    },
    {
      productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
    },
  ]);

  return { mockUpDBProducts };
}
