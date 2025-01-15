/**
 * src/data/hashAlgorithms.ts
 *
 * https://github.com/Daninet/hash-wasm
 */
import { HashAlgorithm } from "./interfaces.ts";
import { md5, sha256, bcrypt, argon2id } from "hash-wasm";

export const algorithms: Record<string, HashAlgorithm> = {
  md5: {
    data: {
      label: "MD5",
      salt: false,
      iteration: false,
    },
    function: async (password: string): Promise<string> => {
      return await md5(password);
    },
  },
  sha256: {
    data: {
      label: "SHA-256",
      salt: false,
      iteration: false,
    },
    function: async (password: string): Promise<string> => {
      return await sha256(password);
    },
  },
  bcrypt: {
    data: {
      label: "bcrypt",
      salt: true,
      iteration: true,
    },
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
  // scrypt: {
  //   data: {
  //     label: "scrypt",
  //     salt: true,
  //     iteration: true,
  //   },
  //   function: async (password: string): Promise<string> => {
  //     const salt = new Uint8Array(16);
  //     window.crypto.getRandomValues(salt);

  //     return await scrypt({
  //       password: password,
  //       salt,
  //       costFactor: 131072,
  //       blockSize: 8,
  //       parallelism: 1,
  //       hashLength: 32,
  //       outputType: "hex",
  //     });
  //   },
  // },
  argon2id: {
    data: {
      label: "Argon2id",
      salt: true,
      iteration: true,
    },
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
};
