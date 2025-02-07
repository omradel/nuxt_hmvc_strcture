export const useGlobalVar = () => {
  const ramadan_ar = ref("hmvc");
  const ramadan_en = ref("HMVC");
  const user_type = ref("donoer");

  return {
    ramadan_ar,
    ramadan_en,
    user_type,
  };
};
