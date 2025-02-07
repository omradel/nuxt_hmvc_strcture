<template>
  <HomeBanner />
</template>

<script setup>
import { useGlobalVar } from "~/helpers/global-var";
const { ramadan_ar, ramadan_en } = useGlobalVar();
const { locale } = useI18n();

useSeoMeta({
  title: locale.value == "ar" ? ramadan_ar : ramadan_en,
});

watch(locale, (newLocale) => {
  const isArabic = newLocale === "ar";
  useSeoMeta({
    title: isArabic ? ramadan_ar : ramadan_en,
  });
});
</script>
