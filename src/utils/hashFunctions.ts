/**
 * src/utils.ts
 *
 * https://github.com/Daninet/hash-wasm
 */
import { md5, sha256, bcrypt, scrypt, argon2id } from "hash-wasm";

export async function md5Hash(password: string): Promise<string> {
  return await md5(password);
}

export async function sha256Hash(password: string): Promise<string> {
  return await sha256(password);
}

export async function bcryptHash(password: string): Promise<string> {
  // generate salt value
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return await bcrypt({
    password: password,
    salt,
    costFactor: 11,
    outputType: "encoded",
  });
}

export async function scryptHash(password: string): Promise<string> {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return await scrypt({
    password: password,
    salt,
    costFactor: 131072,
    blockSize: 8,
    parallelism: 1,
    hashLength: 32,
    outputType: "hex",
  });
}

export async function argon2idHash(password: string): Promise<string> {
  const salt = new Uint8Array(16);
  window.crypto.getRandomValues(salt);

  return await argon2id({
    password: password,
    salt,
    parallelism: 1,
    iterations: 256,
    memorySize: 512,
    hashLength: 32,
    outputType: "encoded",
  });
}
