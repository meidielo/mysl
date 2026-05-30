export function loadCookie(name) {
  const prefix = `${encodeURIComponent(name)}=`;
  const pair = document.cookie
    .split('; ')
    .find((item) => item.startsWith(prefix));

  return pair ? decodeURIComponent(pair.slice(prefix.length)) : undefined;
}

export function saveCookie(name, value, options = {}) {
  const path = options.path || '/';
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}`;
}
