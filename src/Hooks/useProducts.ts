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
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620438/BrownCoat_iijdvu.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Brown Coat",
      slug: "90s-brown-coat",
    },
    {
      productID: 2,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620438/90sTruckerJacket_i4bnbe.webp",
      brandName: "Kalvin Klein",
      productPrice: 18000,
      productName: "90's TruckerJacket",
      slug: "90s-truckerjacket",
    },
    {
      productID: 3,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620438/Denim90sOverShirt_t1dc3u.webp",
      brandName: "Kalvin Klein",
      productPrice: 12000,
      productName: "90's Denim Over Shirt",
      slug: "90s-denim-over-shirt",
    },
    {
      productID: 4,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620439/LightBlueSlimJacket_jt7ai1.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "Light Blue Slim Jacket",
      slug: "light-blue-slim-jacket",
    },
    {
      productID: 5,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620439/LongCoat_jhvswe.webp",
      brandName: "Kalvin Klein",
      productPrice: 2000,
      productName: "Long Coat",
      slug: "long-coat",
    },
    {
      productID: 6,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744620440/SlimLeggings_ymm7jy.webp",
      brandName: "Kalvin Klein",
      productPrice: 24000,
      productName: "SlimLeggings",
      slug: "slim-leggings",
    },
    {
      productID: 7,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623755/Archive_Logo_Relaxed_Crewneck_T-Shirt_kvyfiw.webp",
      brandName: "Kalvin Klein",
      productPrice: 26000,
      productName: "Archive Logo Relaxed Crewneck T-Shirt",
      slug: "archive-logo-relaxed-crewneck-t-shirt",
    },
    {
      productID: 8,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623750/Liquid_Touch_Crewneck_T-Shirt_thwjgv.webp",
      brandName: "Kalvin Klein",
      productPrice: 20000,
      productName: "Liquid Touch Crewneck T-Shirt",
      slug: "liquid-touch-crewneck-t-shirt",
    },
    {
      productID: 9,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623756/Boucle_Ribbed_Maxi_Dress_tyotln.webp",
      brandName: "Kalvin Klein",
      productPrice: 21000,
      productName: "Boucle Ribbed Maxi Dress",
      slug: "boucle-ribbed-maxi-dress",
    },
    {
      productID: 10,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623756/Boucle_Ribbed_Sleeveless_Midi_Dress_ktf3dl.webp",
      brandName: "Kalvin Klein",
      productPrice: 21000,
      productName: "Boucle Ribbed Sleeveless Midi Dress",
      slug: "boucle-ribbed-sleeveless-midi-dress",
    },
    {
      productID: 11,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623754/Classic_Stretch_Button-Down_Shirt_xrpgpe.webp",
      brandName: "Kalvin Klein",
      productPrice: 21000,
      productName: "Classic Stretch Button-Down Shirt",
      slug: "classic-stretch-button-down-shirt",
    },
    {
      productID: 12,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623758/Cotton_Contour_Rib_Monogram_Logo_Mini_Dress_fhs77d.webp",
      brandName: "Kalvin Klein",
      productPrice: 25000,
      productName: "Cotton Contour Rib Monogram Logo Mini Dress",
      slug: "cotton-contour-rib-monogram-logo-mini-dress",
    },
    {
      productID: 13,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623758/Cotton_Mercerized_T-Shirt_iapckr.webp",
      brandName: "Kalvin Klein",
      productPrice: 20000,
      productName: "Cotton Merceirized T-Shirt",
      slug: "cotton-merceirized-t-shirt",
    },
    {
      productID: 14,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623759/Cotton_Poplin_Sleeveless_Midi_Dress_r36heh.webp",
      brandName: "Kalvin Klein",
      productPrice: 29000,
      productName: "Cotton Poplin Sleeveless Midi Dress",
      slug: "cotton-poplin-sleeveless-midi-dress",
    },
    {
      productID: 15,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623760/Cotton_Stretch_Slim_Button-Down_Shirt_wpouv7.webp",
      brandName: "Kalvin Klein",
      productPrice: 21000,
      productName: "Cotton Stretch Slim Button-Down Shirt",
      slug: "cotton-stretch-slim-button-down-shirt",
    },
    {
      productID: 16,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623761/Emblem_Logo_Graphic_Classic_T-Shirt_cbxyeo.webp",
      brandName: "Kalvin Klein",
      productPrice: 27000,
      productName: "Emblem Logo Graphic Classic T-Shirt",
      slug: "emblem-logo-graphic-classic-t-shirt",
    },
    {
      productID: 17,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623762/Embossed_Logo_Classic_T-Shirt_qto0ic.webp",
      brandName: "Kalvin Klein",
      productPrice: 21000,
      productName: "Embossed Logo Classic T-Shirt",
      slug: "emobossed-logo-classic-t-shirt",
    },
    {
      productID: 18,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623763/Flower_Graphic_Classic_T-Shirt_zwtflr.webp",
      brandName: "Kalvin Klein",
      productPrice: 20000,
      productName: "Flower Graphic Classic T-Shirt",
      slug: "flower-graphic-classic-t-shirt",
    },
    {
      productID: 19,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623751/Solid_SeerSucker_Classic_Button-Down_Shirt_dfq4md.webp",
      brandName: "Kalvin Klein",
      productPrice: 11000,
      productName: "Solid Seesucker Classic Button-Down Shirt",
      slug: "solid-seesucker-classic-button-down-shirt",
    },
    {
      productID: 20,
      productThumbnail:
        "https://res.cloudinary.com/dcdgu2fxc/image/upload/v1744623751/Stripe_Oxford_Relaxed_Button-Down_Shirt_o6ui9p.webp",
      brandName: "Kalvin Klein",
      productPrice: 11000,
      productName: "Stripe Oxford Relaxed Button-Down Shirt",
      slug: "stripe-oxford-relaxed-button-down-shirt",
    },
  ]);

  return { mockUpDBProducts };
}
