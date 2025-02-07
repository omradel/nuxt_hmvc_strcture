import { startLoader, stopLoader } from "~/helpers/nprogress";
import { useAuth } from "~/modules/auth/services/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token } = useAuth();

  interface MeResponse {
    status: boolean;
  }

  if (!token.value) {
    return navigateTo("/login");
  }

  try {
    if (process.client) {
      startLoader();
    }

    const response: any = await $fetch<MeResponse>("YOUR_BACKEND_URL", {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (!response.status && response.errorCode == 301) {
      if (process.client) {
        stopLoader();
      }
      return navigateTo("/pending");
    }

    if (process.client) {
      stopLoader();
    }
  } catch (err) {
    console.error("Token verification failed:", err);
    if (process.client) {
      stopLoader();
    }
    return navigateTo("/");
  }
});
