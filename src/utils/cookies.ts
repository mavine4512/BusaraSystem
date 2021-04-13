export function deleteCookie(key: string): void {
  document.cookie = `${key}=; Max-Age=0; path=/; domain=${process.env.REACT_APP_COOKIE_TARGET_DOMAIN}`;
}

export function getCookie(key: string): string | null {
  const v = document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`);
  return v ? v[2] : null;
}

export function storeCookie(key: string, encData: string): void {
  document.cookie = `${key}=${encData};domain=${process.env.REACT_APP_COOKIE_TARGET_DOMAIN};Path=/`;
}
