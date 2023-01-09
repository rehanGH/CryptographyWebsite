import CryptoJS from 'crypto-js'

const aes256 = {
  encrypt: (message, password) => {
    const key = CryptoJS.enc.Utf8.parse(password);
    key.sigBytes = 24; // set the key size to 192 bits
    const iv = CryptoJS.enc.Utf8.parse(password);
    const encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC });
    return encrypted.toString();
  },
  decrypt: (encryptedMessage, password) => {
    const key = CryptoJS.enc.Utf8.parse(password);
    key.sigBytes = 24; // set the key size to 192 bits
    const iv = CryptoJS.enc.Utf8.parse(password);
    const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key, { iv: iv, padding: CryptoJS.pad.Pkcs7, mode: CryptoJS.mode.CBC });
    return decrypted.toString(CryptoJS.enc.Utf8);
  },
};

export default aes256;
  