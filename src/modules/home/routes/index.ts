import { resolve } from "pathe";

const homeRoutes = [
  {
    name: "home",
    path: "/",
    file: resolve(__dirname, "../pages/HomePage.vue"), // Adjusted path
  },
];

export default homeRoutes;
