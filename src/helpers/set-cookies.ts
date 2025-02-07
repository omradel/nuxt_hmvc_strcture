export const setToken = (userToken: any) => {
  const tokenCookie: any = useCookie("token");
  tokenCookie.value = userToken;
};

export const setUser = (userData: any) => {
  const userCookie: any = useCookie("user");
  userCookie.value = userData;
};

export const setCode = (verrifyCode: any) => {
  const codeCookie: any = useCookie("verrification_code");
  codeCookie.value = verrifyCode;
};
