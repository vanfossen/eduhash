/**
 * src/data/algorithms.ts
 *
 * https://github.com/Daninet/hash-wasm
 */
import { md5, sha256, bcrypt, argon2id } from "hash-wasm";
import { HashAlgorithm, SecurityLevel } from "./interfaces.ts";

export const algorithms: HashAlgorithm[] = [
  {
    id: "md5",
    name: "MD5",
    salt: false,
    iteration: false,
    security: SecurityLevel.Insecure,
    function: (password: string): Promise<string> => md5(password),
  },
  {
    id: "sha256",
    name: "SHA-256",
    salt: false,
    iteration: false,
    security: SecurityLevel.Insecure,
    function: (password: string): Promise<string> => sha256(password),
  },
  {
    id: "bcrypt",
    name: "bcrypt",
    salt: true,
    iteration: true,
    security: SecurityLevel.Medium,
    function: async (password: string, salt: Uint8Array): Promise<string> => {
      const encodedHash = await bcrypt({
        password: password,
        salt,
        costFactor: 11,
        outputType: "encoded",
      });
      return encodedHash.substring(29);
    },
  },
  {
    id: "argon2id",
    name: "Argon2id",
    salt: true,
    iteration: true,
    security: SecurityLevel.High,
    function: async (password: string, salt: Uint8Array): Promise<string> => {
      const encodedHash = await argon2id({
        password: password,
        salt,
        parallelism: 1,
        iterations: 256,
        memorySize: 512,
        hashLength: 32,
        outputType: "encoded",
      });
      return encodedHash.split("$")[5]; // Return the encoded hash
    },
  },
];
