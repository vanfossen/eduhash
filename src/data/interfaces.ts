/**
 * src/data/interfaces.ts
 */

/**
 * TODO
 */
export interface AlgorithmOutput {
  name: string;
  link: string;
  hash: string;
}

/**
 * TODO
 */
export interface Output {
  md5: AlgorithmOutput;
  sha256: AlgorithmOutput;
  bcrypt: AlgorithmOutput;
  scrypt: AlgorithmOutput;
  argon2id: AlgorithmOutput;
}
