// Encryption secret key
import CryptoJS from "crypto-js";

const secretKey = "<u1@*B47J8}-";

export const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (cipherText: any) => {
  try {
    const bytes = CryptoJS.AES.decrypt(cipherText, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    console.error("Failed to decrypt data:", e);
    return null;
  }
};
