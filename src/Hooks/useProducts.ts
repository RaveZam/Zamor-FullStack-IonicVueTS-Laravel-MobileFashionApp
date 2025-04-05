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

  const mockUpDBProducts = ref<productCardTypes[]>([
    {
      productID: 1,
      productThumbnail: "./images/Clothings/BrownCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
      slug: "90s-brown-coat",
    },
    {
      productID: 2,
      productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
      slug: "90s-truckerjacket",
    },
    {
      productID: 3,
      productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
      slug: "90s-denim-over-shirt",
    },
    {
      productID: 4,
      productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
      slug: "light-blue-slim-jacket",
    },
    {
      productID: 5,
      productThumbnail: "./images/Clothings/LongCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 2000,
      productName: "Long Coat",
      slug: "long-coat",
    },
    {
      productID: 6,
      productThumbnail: "./images/Clothings/SlimLeggings.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "SlimLeggings",
      slug: "slim-leggings",
    },
    {
      productID: 7,
      productThumbnail: "./images/Clothings/BrownCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
      slug: "90s-brown-coat",
    },
    {
      productID: 8,
      productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
      slug: "90s-truckerjacket",
    },
    {
      productID: 9,
      productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
      slug: "90s-denim-over-shirt",
    },
    {
      productID: 10,
      productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
      slug: "light-blue-slim-jacket",
    },
    {
      productID: 11,
      productThumbnail: "./images/Clothings/LongCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 2000,
      productName: "Long Coat",
      slug: "long-coat",
    },
    {
      productID: 12,
      productThumbnail: "./images/Clothings/SlimLeggings.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "SlimLeggings",
      slug: "slim-leggings",
    },
  ]);

  return { mockUpDBProducts };
}
