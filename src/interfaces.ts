// TODO - interfaces
export interface AlgorithmOutput {
  name: string;
  link: string;
  hash: string;
}

// TODO - interfaces
export interface BcryptOutput {
  name: string;
  link: string;
  hash: string;
  hashId: string;
  inputCost: string;
  hashSalt: string;
  hashValue: string;
}

// TODO - interfaces
export interface Output {
  md5: AlgorithmOutput;
  bcrypt: BcryptOutput;
  scrypt: AlgorithmOutput;
  argon2id: AlgorithmOutput;
}
