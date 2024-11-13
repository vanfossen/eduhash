// function uIntArray8ToBase16(bytes: Uint8Array) {
//   const hashArray = Array.from(new Uint8Array(bytes));
//   const hashHex = hashArray
//     .map((b) => b.toString(16).padStart(2, "0"))
//     .join("");
//   return hashHex;
// }

// function uIntArray8ToBase64(bytes: Uint8Array) {
//   const binString = Array.from(bytes, (byte) =>
//     String.fromCodePoint(byte),
//   ).join("");
//
//   return btoa(binString);
// }

// function uIntArray8toBase64Bcrypt(uint8Array: Uint8Array) {
//   const base64Chars =
//     "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let base64 = "";
//
//   for (let i = 0; i < uint8Array.length; i += 3) {
//     const byte1 = uint8Array[i];
//     const byte2 = i + 1 < uint8Array.length ? uint8Array[i + 1] : 0;
//     const byte3 = i + 2 < uint8Array.length ? uint8Array[i + 2] : 0;
//
//     const combined = (byte1 << 16) | (byte2 << 8) | byte3;
//
//     base64 += base64Chars[(combined >> 18) & 0x3f];
//     base64 += base64Chars[(combined >> 12) & 0x3f];
//     base64 +=
//       i + 1 < uint8Array.length ? base64Chars[(combined >> 6) & 0x3f] : ".";
//     base64 += i + 2 < uint8Array.length ? base64Chars[combined & 0x3f] : ".";
//   }
//
//   return base64;
// }
