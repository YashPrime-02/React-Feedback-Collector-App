
// Small abstraction over localStorage so we can swap storage later easily. (mini local DB for us)
import type { Feedback } from "../types";

const KEY = "feedback_app_feedbacks_v1";

export const storage = {
  load(): Feedback[] {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) as Feedback[] : [];
    } catch (e) {
      console.error("Failed to load feedbacks from localStorage", e);
      return [];
    }
  },

  save(items: Feedback[]) {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save feedbacks to localStorage", e);
    }
  },

  clear() {
    localStorage.removeItem(KEY);
  }
};
