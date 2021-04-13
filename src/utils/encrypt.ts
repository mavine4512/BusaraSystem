import SimpleCrypto from 'simple-crypto-js';
import { STORAGE_KEY } from '../constants';

export function encrypt(msg: string): string {
  const crypto = new SimpleCrypto(STORAGE_KEY);

  return crypto.encrypt(msg);
}

export function decrypt(transitmessage: string): string | unknown {
  const crypto = new SimpleCrypto(STORAGE_KEY);

  try {
    return crypto.decrypt(transitmessage);
  } catch (e) {
    return transitmessage;
  }
}
