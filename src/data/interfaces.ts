/**
 * src/data/interfaces.ts
 */

export enum SecurityLevel {
  Insecure = "insecure",
  Low = "low",
  Medium = "medium",
  High = "high",
}

type HashFunction =
  | ((password: string) => Promise<string>)
  | ((password: string, salt: Uint8Array) => Promise<string>);

export interface HashAlgorithm {
  id: string;
  name: string;
  salt: boolean;
  iteration: boolean;
  security: SecurityLevel;
  function: HashFunction;
}

export interface HashResults {
  id: string;
  name: string;
  salt: string | false;
  hash: string;
  iteration: boolean;
  security: SecurityLevel;
  function: HashFunction;
}
