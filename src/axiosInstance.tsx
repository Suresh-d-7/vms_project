import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    Authorization: "Bearer",
  },
});

export const fileStorageUrl = "";
