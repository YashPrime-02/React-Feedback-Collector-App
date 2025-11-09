import React, { createContext, useContext, useMemo } from "react";
import type { Feedback } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

/**
 * Context-based state for feedbacks.
 * This handles add, update, delete, and clear operations.
 * All feedbacks are persisted to localStorage automatically
 * via the useLocalStorage hook.
 */

type State = {
  feedbacks: Feedback[];
  addFeedback: (data: Omit<Feedback, "id" | "createdAt">) => void;
  updateFeedback: (
    id: string,
    partial: Partial<Omit<Feedback, "id" | "createdAt">>
  ) => void;
  deleteFeedback: (id: string) => void;
  clearAll: () => void;
};

const FeedbackContext = createContext<State | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // ✅ Just use useLocalStorage directly with an empty array
  // It automatically reads existing localStorage data.
  const [feedbacks, setFeedbacks] = useLocalStorage<Feedback[]>(
    "feedback_app_feedbacks_v1",
    []
  );

  // ✅ Add a new feedback
  const addFeedback = (data: Omit<Feedback, "id" | "createdAt">) => {
    const fb: Feedback = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      ...data,
    };
    setFeedbacks((prev) => [fb, ...prev]); // push new one at top
  };

  // ✅ Update an existing feedback
  const updateFeedback = (
    id: string,
    partial: Partial<Omit<Feedback, "id" | "createdAt">>
  ) => {
    setFeedbacks((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...partial } : f))
    );
  };

  // ✅ Delete a feedback by ID
  const deleteFeedback = (id: string) => {
    setFeedbacks((prev) => prev.filter((f) => f.id !== id));
  };

  // ✅ Clear all feedbacks
  const clearAll = () => {
    setFeedbacks([]);
  };

  const value = useMemo(
    () => ({ feedbacks, addFeedback, updateFeedback, deleteFeedback, clearAll }),
    [feedbacks]
  );

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
};

// Hook to use the context
export const useFeedback = () => {
  const ctx = useContext(FeedbackContext);
  if (!ctx)
    throw new Error("useFeedback must be used within FeedbackProvider");
  return ctx;
};
