/**
 * src/data/algorithms.ts
 *
 * https://github.com/Daninet/hash-wasm
 */
import { md5, sha256, bcrypt, argon2id } from "hash-wasm";

enum SecurityLevel {
  Insecure = "insecure",
  Low = "low",
  Medium = "medium",
  High = "high",
}

type HashFunction =
  | ((password: string) => Promise<string>)
  | ((password: string, salt: Uint8Array) => Promise<string>);

interface HashAlgorithm {
  name: string;
  salt: boolean;
  iteration: boolean;
  security: SecurityLevel;
  function: HashFunction;
}

export const algorithms: HashAlgorithm[] = [
  {
    name: "MD5",
    salt: false,
    iteration: false,
    security: SecurityLevel.Insecure,
    function: (password: string): Promise<string> => md5(password),
  },
  {
    name: "SHA-256",
    salt: false,
    iteration: false,
    security: SecurityLevel.Insecure,
    function: (password: string): Promise<string> => sha256(password),
  },
  {
    name: "bcrypt",
    salt: true,
    iteration: true,
    security: SecurityLevel.Medium,
    function: (password: string, salt: Uint8Array): Promise<string> =>
      bcrypt({
        password: password,
        salt,
        costFactor: 11,
        outputType: "encoded",
      }),
  },
  {
    name: "Argon2id",
    salt: true,
    iteration: true,
    security: SecurityLevel.High,
    function: async (password: string, salt: Uint8Array): Promise<string> =>
      argon2id({
        password: password,
        salt,
        parallelism: 1,
        iterations: 256,
        memorySize: 512,
        hashLength: 32,
        outputType: "encoded",
      }),
  },
];
