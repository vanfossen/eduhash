// TODO - interfaces
export interface AlgorithmOutput {
  name: string;
  link: string;
  hash: string;
}

// TODO - interfaces
export interface Output {
  md5: AlgorithmOutput;
  bcrypt: AlgorithmOutput;
  scrypt: AlgorithmOutput;
  argon2id: AlgorithmOutput;
}
