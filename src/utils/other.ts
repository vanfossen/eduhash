/**
 * implement with "toBase64" when widely available
 */
export function arrayToBase64(salt: Uint8Array): string {
  const byteArray = Array.from(salt);

  let binaryString = "";
  byteArray.forEach((byte) => {
    binaryString += String.fromCharCode(byte);
  });

  return btoa(binaryString);
}

/**
 * implements specific base64 alphabet for bcrypt
 *
 * https://en.wikipedia.org/wiki/Bcrypt#base64_encoding_alphabet
 */
export function arrayToBase64Bcrypt(uint8Array: Uint8Array): string {
  const base64Chars =
    "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let base64 = "";

  for (let i = 0; i < uint8Array.length; i += 3) {
    const byte1 = uint8Array[i];
    const byte2 = uint8Array[i + 1] || 0;
    const byte3 = uint8Array[i + 2] || 0;

    const combined = (byte1 << 16) | (byte2 << 8) | byte3;

    base64 += base64Chars[(combined >> 18) & 0x3f];
    base64 += base64Chars[(combined >> 12) & 0x3f];
    base64 +=
      i + 1 < uint8Array.length ? base64Chars[(combined >> 6) & 0x3f] : ".";
    base64 += i + 2 < uint8Array.length ? base64Chars[combined & 0x3f] : ".";
  }

  return base64;
}
