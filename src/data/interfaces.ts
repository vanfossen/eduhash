/**
 * src/data/interfaces.ts
 */

/**
 * TODO
 */
export interface HashData {
  label: string;
  salt: boolean;
  iteration: boolean;
  security: string;
}

/**
 * TODO
 */
export interface HashAlgorithm {
  data: HashData;
  function: (password: string) => Promise<DigestOutput>;
}

/**
 * TODO
 */
export interface DigestOutput {
  hash: string;
  salt: string | false;
}
