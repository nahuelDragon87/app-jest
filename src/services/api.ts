import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.github.com", // Base URL para todas las solicitudes
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});
