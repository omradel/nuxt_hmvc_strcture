import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css"; // Import Material Design Icons
import "vuetify/styles"; // Import Vuetify styles

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "myCustomTheme",
      themes: {
        myCustomTheme: {
          dark: false,
          colors: {
            primary: "#3E7E41",
          },
        },
      },
    },

    defaults: {
      VBtn: {
        color: "primary",
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
