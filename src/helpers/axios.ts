import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  const userLanguage = useCookie("i18n_redirected").value;
  config.headers.lang = userLanguage;
  return config;
});
