import { HashAlgorithm } from "./interfaces.ts";

/**
 * src/data/hashAlgorithms.ts
 */
export const hashAlgorithms: Array<HashAlgorithm> = [
  {
    key: "md5",
    label: "MD5",
    link: "https://en.wikipedia.org/wiki/MD5",
    hash: "",
  },
  {
    key: "sha256",
    label: "SHA-256",
    link: "https://en.wikipedia.org/wiki/SHA-2",
    hash: "",
  },
  {
    key: "bcrypt",
    label: "bcrypt",
    link: "https://en.wikipedia.org/wiki/Bcrypt",
    hash: "",
  },
  {
    key: "scrypt",
    label: "scrypt",
    link: "https://en.wikipedia.org/wiki/Scrypt",
    hash: "",
  },
  {
    key: "argon2id",
    label: "Argon2id",
    link: "https://en.wikipedia.org/wiki/Argon2",
    hash: "",
  },
];
