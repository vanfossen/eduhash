// https://github.com/Daninet/hash-wasm
import { md5, bcrypt, argon2id } from "hash-wasm";

/**
 * -----------------
 * Utility functions
 * -----------------
 */

function uIntArray8ToBase16(bytes: Uint8Array) {
  const hashArray = Array.from(new Uint8Array(bytes));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

function uIntArray8ToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");

  return btoa(binString);
}

function uIntArray8toBase64Bcrypt(uint8Array: Uint8Array) {
  const base64Chars =
    "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let base64 = "";

  for (let i = 0; i < uint8Array.length; i += 3) {
    const byte1 = uint8Array[i];
    const byte2 = i + 1 < uint8Array.length ? uint8Array[i + 1] : 0;
    const byte3 = i + 2 < uint8Array.length ? uint8Array[i + 2] : 0;

    const combined = (byte1 << 16) | (byte2 << 8) | byte3;

    base64 += base64Chars[(combined >> 18) & 0x3f];
    base64 += base64Chars[(combined >> 12) & 0x3f];
    base64 +=
      i + 1 < uint8Array.length ? base64Chars[(combined >> 6) & 0x3f] : ".";
    base64 += i + 2 < uint8Array.length ? base64Chars[combined & 0x3f] : ".";
  }

  return base64;
}

/**
 * --------------
 * Hash functions
 * --------------
 */
export async function md5Hash(password: string): Promise<[string]> {
  return [await md5(password)];
}

export async function bcryptHash(
  password: string,
): Promise<[string, string, string]> {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return [
    await bcrypt({
      password: password,
      salt,
      costFactor: 11,
      outputType: "encoded",
    }),
    uIntArray8ToBase16(salt),
    uIntArray8toBase64Bcrypt(salt),
  ];
}

export async function argon2idHash(
  password: string,
): Promise<[string, string, string]> {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return [
    await argon2id({
      password: password,
      salt,
      parallelism: 1,
      iterations: 256,
      memorySize: 512,
      hashLength: 32,
      outputType: "encoded",
    }),
    uIntArray8ToBase16(salt),
    uIntArray8ToBase64(salt),
  ];
}
