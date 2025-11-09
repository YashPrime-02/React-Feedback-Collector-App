// Shared types for the app
export type Rating = 1 | 2 | 3 | 4 | 5;

export interface Feedback {
  id: string;           // unique id (UUID or timestamp)
  title: string;
  body: string;
  rating: Rating;
  createdAt: string;    // ISO date string
}
