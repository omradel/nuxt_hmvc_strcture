import { resolve } from "pathe";

const authRoutes = [
  {
    name: "login",
    path: "/login",
    file: resolve(__dirname, "../pages/login.vue"),
  },
];

export default authRoutes;
