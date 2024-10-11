// https://github.com/Daninet/hash-wasm
import { md5, argon2id } from "hash-wasm";

function uIntArray8ToBase64(bytes: Uint8Array) {
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join("");

  // .replace(/=/g, "")
  return btoa(binString);
}

function uIntArray8ToBase16(bytes: Uint8Array) {
  const hashArray = Array.from(new Uint8Array(bytes));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

export async function md5Hash(password: string): Promise<string> {
  return await md5(password);
}

export async function argon2idHash(
  password: string,
): Promise<[string, string, string]> {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return [
    uIntArray8ToBase16(salt),
    uIntArray8ToBase64(salt),
    await argon2id({
      password: password,
      salt,
      parallelism: 1,
      iterations: 256,
      memorySize: 512,
      hashLength: 32,
      outputType: "encoded",
    }),
  ];
}
