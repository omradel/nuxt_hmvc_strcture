import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  // main directory
  srcDir: "src/",
  ssr: true,

  // favicon & fonts
  app: {
    baseURL: "/",
    pageTransition: false, // Completely disables transitions
    layoutTransition: false,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap",
        },
      ],
    },
  },

  // custom components prefixes for auto importing
  components: [
    "~/components",
    { path: "~/modules/home/components", prefix: "Home" },
    { path: "~/modules/about/components", prefix: "About" },
    { path: "~/modules/contact/components", prefix: "Contact" },
    { path: "~/modules/auth/components", prefix: "Auth" },
    { path: "~/modules/blogs/components", prefix: "Blog" },
  ],

  // main style & tailwid config
  css: ["./src/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    optimizeDeps: {
      include: ["vuetify"],
    },
    build: {
      chunkSizeWarningLimit: 1000,

      rollupOptions: {
        output: {
          // manualChunks(id) {
          //   if (id.includes("node_modules")) {
          //     if (id.includes("vuetify")) {
          //       return "vuetify";
          //     }
          //     return "vendor";
          //   }
          // },
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      backendUrl: process.env.VITE_BACKEND_URL,
    },
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "./src/router/index",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
  ],

  plugins: [
    "./src/plugins/observe-visibility.ts",
    "./src/plugins/vee-validate.ts",
  ],

  // localization
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "ar",
        language: "ar",
      },
      {
        code: "en",
        language: "en-US",
      },
    ],
    defaultLocale: "ar",
    vueI18n: "./src/helpers/i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: "ar",
    },
  },
});
