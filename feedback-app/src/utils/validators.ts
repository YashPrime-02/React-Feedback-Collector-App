import type { Rating } from "../types";

export function validateTitle(title: string) {
  if (!title.trim()) return "Title is required";
  if (title.trim().length < 3) return "Title should be at least 3 characters";
  return "";
}

export function validateBody(body: string) {
  if (!body.trim()) return "Please provide feedback content";
  if (body.trim().length < 10) return "Feedback must be at least 10 characters";
  return "";
}

export function validateRating(rating: number) {
  if (![1,2,3,4,5].includes(rating)) return "Rating must be 1-5";
  return "";
}

export function clampRating(n: number): Rating {
  if (n <= 1) return 1;
  if (n >= 5) return 5;
  return (Math.round(n) as Rating);
}
