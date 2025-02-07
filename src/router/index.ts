import { defineNuxtModule, extendPages } from "@nuxt/kit";
import routes from "./routes";

export default defineNuxtModule({
  meta: {
    name: "home-module",
    version: "1.0.0",
    configKey: "home",
  },
  setup(_options, nuxt) {
    extendPages((pages) => {
      pages.push(...routes);
    });
  },
});
