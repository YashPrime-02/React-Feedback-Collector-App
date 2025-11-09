// Generic hook that syncs state with localStorage (not specific to Feedback).
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initial: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) as T : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to write to localStorage", e);
    }
  }, [key, state]);

  return [state, setState] as const;
}
