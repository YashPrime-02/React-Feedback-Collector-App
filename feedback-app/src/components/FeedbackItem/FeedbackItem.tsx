import React, { useState } from "react";
import type { Feedback } from "../../types";
import styles from "./FeedbackItem.module.css";
import { useFeedback } from "../../context/FeedbackContext";
import { FeedbackForm } from "../FeedbackForm/FeedbackForm";

export const FeedbackItem: React.FC<{ item: Feedback }> = ({ item }) => {
  const { deleteFeedback } = useFeedback();
  const [editing, setEditing] = useState(false);

  if (editing) {
    // Show inline form for editing. We pass initial values via editMode prop.
    return (
      <div className={styles.item}>
        <FeedbackForm editMode={{
          id: item.id,
          initialTitle: item.title,
          initialBody: item.body,
          initialRating: item.rating,
          onDone: () => setEditing(false)
        }} />
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.rating}>{item.rating} ⭐</div>
      </div>
      <div className={styles.body}>{item.body}</div>
      <div className={styles.footer}>
        <div className={styles.date}>{new Date(item.createdAt).toLocaleString()}</div>
        <div className={styles.actions}>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => {
            if (confirm("Delete feedback?")) deleteFeedback(item.id);
          }}>Delete</button>
        </div>
      </div>
    </div>
  );
};
