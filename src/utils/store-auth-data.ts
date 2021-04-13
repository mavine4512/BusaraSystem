import { deleteCookie, getCookie, storeCookie } from './cookies';
import { decrypt, encrypt } from './encrypt';

export function storeData(key: string, data: string): void {
  const encData = encrypt(data);

  storeCookie(key, encData);
}

export function getStoredData(key: string): string | null {
  const encData = getCookie(key);

  if (!encData) {
    return encData;
  }

  const decryptedData = decrypt(encData);

  return typeof decryptedData === 'string' ? decryptedData : '';
}

export function deleteStoredData(key: string): void {
  deleteCookie(key);
}
