import { defineRule, configure } from "vee-validate";
import { all } from "@vee-validate/rules";
import { useCookie } from "nuxt/app";
import { getMessage } from "~/helpers/validation-msg";
import { type CookieRef } from "nuxt/app";

export default defineNuxtPlugin(() => {
  let currentLocale: CookieRef<string | null | undefined>;
  let locale: CookieRef<string | null | undefined> | string;

  Object.entries(all).forEach(([ruleName, ruleFn]) => {
    defineRule(ruleName, ruleFn);
  });

  // Custom rule to accept only English digits
  defineRule("englishNumbersOnly", (value: any) => {
    const englishNumbersRegex = /^[0-9]*$/;

    currentLocale = useCookie("i18n_redirected");
    locale = currentLocale.value || "ar";

    if (!englishNumbersRegex.test(value)) {
      return locale == "en"
        ? "Only English numbers are allowed."
        : "يجب ان تكون الارقام انجليزيه فقط";
    }
    return true;
  });

  // Configure custom message generator
  configure({
    generateMessage: (ctx) => {
      if (!ctx.rule) return `Field ${ctx.field} is invalid.`;
      currentLocale = useCookie("i18n_redirected");
      locale = currentLocale.value || "ar";
      return getMessage(locale, ctx.rule.name, ctx.field);
    },
  });
});
