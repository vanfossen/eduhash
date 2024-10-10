import { md5 } from "hash-wasm";

export async function md5Hash(password: string): Promise<string> {
  return await md5(password);
}
