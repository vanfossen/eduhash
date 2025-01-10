/**
 * src/data/hashAlgorithms.ts
 *
 * https://github.com/Daninet/hash-wasm
 */
import { HashAlgorithm } from "./interfaces.ts";
import { md5, sha256, bcrypt, scrypt, argon2id } from "hash-wasm";

export const algorithms: Array<HashAlgorithm> = [
  {
    key: "md5",
    label: "MD5",
    link: "https://en.wikipedia.org/wiki/MD5",
    function: async (password: string): Promise<string> => {
      return await md5(password);
    },
  },
  {
    key: "sha256",
    label: "SHA-256",
    link: "https://en.wikipedia.org/wiki/SHA-2",
    function: async (password: string): Promise<string> => {
      return await sha256(password);
    },
  },
  {
    key: "bcrypt",
    label: "bcrypt",
    link: "https://en.wikipedia.org/wiki/Bcrypt",
    function: async (password: string): Promise<string> => {
      // generate salt value
      const salt = new Uint8Array(16);
      window.crypto.getRandomValues(salt);

      return await bcrypt({
        password: password,
        salt,
        costFactor: 11,
        outputType: "encoded",
      });
    },
  },
  {
    key: "scrypt",
    label: "scrypt",
    link: "https://en.wikipedia.org/wiki/Scrypt",
    function: async (password: string): Promise<string> => {
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
    },
  },
  {
    key: "argon2id",
    label: "Argon2id",
    link: "https://en.wikipedia.org/wiki/Argon2",
    function: async (password: string): Promise<string> => {
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
    },
  },
];
