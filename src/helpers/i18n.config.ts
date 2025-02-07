import enGlobal from "../locales/en.json";
import arGlobal from "../locales/ar.json";

import enHome from "../modules/home/locales/en.json";
import arHome from "../modules/home/locales/ar.json";

import enAuth from "../modules/auth/locales/en.json";
import arAuth from "../modules/auth/locales/ar.json";

export default {
  legacy: false,
  locale: "ar",
  messages: {
    en: {
      home: enHome,
      global: enGlobal,
      auth: enAuth,
    },
    ar: {
      home: arHome,
      global: arGlobal,
      auth: arAuth,
    },
  },
};
