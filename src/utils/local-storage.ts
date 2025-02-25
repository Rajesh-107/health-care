export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(key, token);
};

export const getFormLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};
export const removeFormLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.removeItem(key);
};
