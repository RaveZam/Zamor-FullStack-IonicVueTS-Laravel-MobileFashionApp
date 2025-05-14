import { useLoadingScreen } from "@/Hooks/useLoadingScreen";
const { loadingScreen } = useLoadingScreen();

import { useGetCookie } from "@/Hooks/useGetCookies";
import axios from "axios";
import { alertController } from "@ionic/vue";
import { computed, ref } from "vue";

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

async function fetchAddresses() {
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
    })
    .catch((error) => console.log(error));
}

function deleteAddress(addressID: number) {
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

function setSelectedAddress(addressID: number) {
  localStorage.setItem("selectedAddressID", addressID.toString());
  console.log("Selected A Address");
  console.log(localStorage.getItem("selectedAddressID"));
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
