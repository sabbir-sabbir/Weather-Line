import { useState, useEffect } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
  const stored = localStorage.getItem(storageKey);
  let initial;

  try {
    initial = stored ? JSON.parse(stored) : defaultValue;
  } catch {
    initial = defaultValue;
  }

  const [value, setValue] = useState(initial);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [value, storageKey]);

  return [value, setValue];
};

export default useLocalStorage;
