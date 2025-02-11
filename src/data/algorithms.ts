/**
 * src/data/hashAlgorithms.ts
 *
 * https://github.com/Daninet/hash-wasm
 */
import { arrayToBase64, uIntArray8toBase64Bcrypt } from "../utils/other.ts";
import { DigestOutput, HashAlgorithm } from "./interfaces.ts";
import { md5, sha256, bcrypt, argon2id } from "hash-wasm";

export const algorithms: Record<string, HashAlgorithm> = {
  md5: {
    data: {
      label: "MD5",
      salt: false,
      iteration: false,
      security: "low",
    },
    function: async (password: string): Promise<DigestOutput> => {
      return { hash: await md5(password), salt: false };
    },
  },
  sha256: {
    data: {
      label: "SHA-256",
      salt: false,
      iteration: false,
      security: "low",
    },
    function: async (password: string): Promise<DigestOutput> => {
      return { hash: await sha256(password), salt: false };
    },
  },
  bcrypt: {
    data: {
      label: "bcrypt",
      salt: true,
      iteration: true,
      security: "medium",
    },
    function: async (password: string): Promise<DigestOutput> => {
      // generate salt value
      const salt = new Uint8Array(16);
      window.crypto.getRandomValues(salt);

      return {
        hash: await bcrypt({
          password: password,
          salt,
          costFactor: 11,
          outputType: "encoded",
        }),
        salt: uIntArray8toBase64Bcrypt(salt),
      };
    },
  },
  argon2id: {
    data: {
      label: "Argon2id",
      salt: true,
      iteration: true,
      security: "strong",
    },
    function: async (password: string): Promise<DigestOutput> => {
      const salt = new Uint8Array(16);
      window.crypto.getRandomValues(salt);

      return {
        hash: await argon2id({
          password: password,
          salt,
          parallelism: 1,
          iterations: 256,
          memorySize: 512,
          hashLength: 32,
          outputType: "encoded",
        }),
        salt: arrayToBase64(salt),
      };
    },
  },
};
