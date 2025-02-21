import { ref } from "vue";

export function useProducts() {
  type productCardTypes = {
    productThumbnail: string;
    brandName: string;
    productPrice: number;
    productName: string;
    slug: string;
  };

  const mockUpDBProducts = ref<productCardTypes[]>([
    {
      productThumbnail: "./images/Clothings/BrownCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
      slug: "90s-brown-coat",
    },
    {
      productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
      slug: "90s-truckerjacket",
    },
    {
      productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
      slug: "90s-denim-over-shirt",
    },
    {
      productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
      slug: "light-blue-slim-jacket",
    },
    {
      productThumbnail: "./images/Clothings/LongCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 2000,
      productName: "Long Coat",
      slug: "long-coat",
    },
    {
      productThumbnail: "./images/Clothings/SlimLeggings.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "SlimLeggings",
      slug: "slim-leggings",
    },
    {
      productThumbnail: "./images/Clothings/BrownCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
      slug: "90s-brown-coat",
    },
    {
      productThumbnail: "./images/Clothings/90sTruckerJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
      slug: "90s-truckerjacket",
    },
    {
      productThumbnail: "./images/Clothings/Denim90sOverShirt.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
      slug: "90s-denim-over-shirt",
    },
    {
      productThumbnail: "./images/Clothings/LightBlueSlimJacket.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
      slug: "light-blue-slim-jacket",
    },
    {
      productThumbnail: "./images/Clothings/LongCoat.webp",
      brandName: "Kalvin Klein",
      productPrice: 2000,
      productName: "Long Coat",
      slug: "long-coat",
    },
    {
      productThumbnail: "./images/Clothings/SlimLeggings.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "SlimLeggings",
      slug: "slim-leggings",
    },
  ]);

  return { mockUpDBProducts };
}
