/**
 * src/interfaces.ts
 */
export interface AlgorithmOutput {
  name: string;
  link: string;
  hash: string;
}

export interface Output {
  md5: AlgorithmOutput;
  bcrypt: AlgorithmOutput;
  scrypt: AlgorithmOutput;
  argon2id: AlgorithmOutput;
}
