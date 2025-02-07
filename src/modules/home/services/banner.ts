// this as an example for server-side fetching with data cashing
// using (useAsyncData(), axios)

import { api } from "~/helpers/axios";

export const useBannerData = () => {
  const { locale } = useI18n();
  const {
    data: bannerData,
    error: banner_error,
    refresh,
    status,
    clear,
  } = useAsyncData(
    "bannerData",
    () =>
      api.get("/banner/statistics").then((response) => response.data.result),
    { watch: [locale] }
  );

  return {
    bannerData,
    banner_error,
    refresh,
    status,
    clear,
  };
};
