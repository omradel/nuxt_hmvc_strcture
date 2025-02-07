import { useAuth } from "~/modules/auth/services/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { token }: any = useAuth();

  if (token.value) {
    navigateTo("/");
  }
});
