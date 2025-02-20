export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(key, token);
};
