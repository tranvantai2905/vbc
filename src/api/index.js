import axios from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";
import store from "../state";

const getToken = async () => {
  let storeData = store.getState();
  if (storeData?.user?.data?.accessToken) {
    // let currentTime = moment(new Date()).valueOf();
    // if (
    //   currentTime - moment(storeData.userState.expiresIn).valueOf() <
    //   1209600
    // ) {
    //   return storeData.userState.token;
    // } else {
    //   store.dispatch(logOut());
    //   return;
    // }
    return storeData.userState.token;
  } else {
    return "";
  }
};

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_CORE_ENDPOINT,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

axiosClient.interceptors.request.use(async (config) => {
  let token = await getToken();
  if (token) {
    config.headers = {
      Authorization: token,
    };
  }
  config.timeout = 15000;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  (error) => {
    store.dispatch(toggle({ status: false }));
    // Handle errors
    if (error.response) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    } else if (error.request) {
      window.location.replace("/404");
    } else {
      window.location.replace("/404");
    }
    throw error;
  }
);
export default axiosClient;

export const axiosLogin = (username, password) =>
  axiosClient.post("/api/auth/login", { username, password });
