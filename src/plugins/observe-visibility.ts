import { defineNuxtPlugin } from "#app";
import observeVisibilityDirective from "~/directives/v-observe-visibility";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("observe-visibility", observeVisibilityDirective);
});
