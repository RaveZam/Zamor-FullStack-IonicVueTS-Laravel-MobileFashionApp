import { useGetCookie } from "@/Hooks/useGetCookies";
import axios from "axios";
import { alertController } from "@ionic/vue";
import { ref } from "vue";

interface addressTypes {
  id: number;
  address: string;
  name: string;
  phoneNumber: string;
  postcode: string;
  surname: string;
  province: string;
  flatNumber: string;
  user_id: number;
}

const addressList = ref<addressTypes[]>([]);
const { getCookie } = useGetCookie();
const token = getCookie("authToken");

let selectedAddress = ref<addressTypes | null>(null);

import { useLoadingScreen2 } from "@/Hooks/useLoadingScreen2";
const { loadingScreen } = useLoadingScreen2();

async function fetchAddresses() {
  loadingScreen({
    show: true,
    success: false,
    message: "Fetching Addresses...",
  });
  await axios
    .get("http://127.0.0.1:8000/api/address", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      addressList.value = response.data;

      const selectedAddressID = localStorage.getItem("selectedAddressID");

      if (selectedAddressID) {
        selectedAddress.value =
          addressList.value.find(
            (address) => address.id === Number(selectedAddressID)
          ) ?? null;
        console.log("Selected address from localStorage:", selectedAddress);
      }

      loadingScreen({
        show: false,
        success: true,
        message: "Addresses Fetched",
      });
    })
    .catch((error) => console.log(error));
}

async function deleteAddress(addressID: number) {
  const alert = await alertController.create({
    header: "Delete Address",
    message: "Are You Sure You Want To Remove This Address?",
    cssClass: "custom-alert",
    buttons: [
      {
        text: "Confirm",
        handler: () => {
          axios
            .delete("http://127.0.0.1:8000/api/address", {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
              },
              data: {
                id: addressID,
              },
            })
            .then(() => {
              handleAlertMessage();
              fetchAddresses();
            })
            .catch((error) => console.log(error));
        },
      },
      {
        text: "Cancel",
        role: "cancel",
      },
    ],
  });
  await alert.present();
}

async function handleAlertMessage() {
  const alert = await alertController.create({
    header: "Success",
    message: "Address Deleted",
    cssClass: "custom-alert",
    buttons: [
      {
        text: "Confirm",
      },
    ],
  });
  await alert.present();
}

async function setSelectedAddress(addressID: number) {
  const alert = await alertController.create({
    header: "Set Default Address",
    message: "Are You Sure You Want To Set This As Your Default Address?",
    cssClass: "custom-alert",
    buttons: [
      {
        text: "Confirm",
        handler: () => {
          localStorage.setItem("selectedAddressID", addressID.toString());
          console.log("Selected A Address");
          console.log(localStorage.getItem("selectedAddressID"));
          fetchAddresses();
        },
      },
      {
        text: "Cancel",
        role: "cancel",
      },
    ],
  });
  await alert.present();
}

export function useAddress() {
  return {
    fetchAddresses,
    handleAlertMessage,
    deleteAddress,
    addressList,
    setSelectedAddress,
    selectedAddress,
  };
}
