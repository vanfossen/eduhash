/**
 * src/data/interfaces.ts
 */

/**
 * TODO
 */
export interface HashAlgorithm {
  key: string;
  label: string;
  link: string;
  function: (password: string) => Promise<string>;
}
