import axios from "axios";
import { ref } from "vue";
import { useGetCookie } from "./useGetCookies";

const Orders = ref<any[]>([]);
const { getCookie } = useGetCookie();

const token = getCookie("authToken");

function fetchOrders() {
  axios
    .get("http://127.0.0.1:8000/api/order", {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
    .then((response) => {
      Orders.value = response.data.orders;
      console.log(Orders.value);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function useOrders() {
  return {
    Orders,
    fetchOrders,
  };
}
