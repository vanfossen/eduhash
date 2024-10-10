// https://github.com/Daninet/hash-wasm
import { md5, argon2id } from "hash-wasm";

export async function md5Hash(password: string): Promise<string> {
  return await md5(password);
}

export async function argon2idHash(
  password: string,
): Promise<[string, string]> {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return [
    Array.from(new Uint8Array(salt))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join(""),
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
