interface validationMessages {
  [rulName: string]: string;
  default: string;
}

interface Dictionary {
  [locale: string]: validationMessages;
}

const dictionary: Dictionary = {
  en: {
    required: "This field  is required.",
    email: "This field  must be a valid email.",
    min: "This field  is too short.",
    englishNumbersOnly: "Only English numbers are allowed.",
    default: "this field  is invalid.",
  },
  ar: {
    required: "هذا حقل مطلوب",
    email: "هذا الحقل يجب ان يكون بريدا صالحا",
    min: "هذا الحقل قصير جدا",
    englishNumbersOnly: "الارقام الانجليزيه فقط",
    default: "هذا الحقل غير صالح",
  },
};

// A helper function to retrieve messages
export function getMessage(locale: string, ruleName: string, field: string) {
  const localeDict = dictionary[locale] || dictionary.ar;
  const message =
    localeDict[ruleName] || localeDict.default || `This field is invalid.`;
  return message;
}
