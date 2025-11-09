import React, { useState, useEffect } from "react";
import styles from "./FeedbackForm.module.css";
import { useFeedback } from "../../context/FeedbackContext";
import { validateBody, validateRating, validateTitle } from "../../utils/validators";
import type { Rating } from "../../types";

type Props = {
  // optional props for editing an existing entry
  editMode?: {
    id: string;
    initialTitle: string;
    initialBody: string;
    initialRating: Rating;
    onDone?: () => void;
  } | null;
};

const initial = { title: "", body: "", rating: 5 as Rating };

export const FeedbackForm: React.FC<Props> = ({ editMode = null }) => {
  const { addFeedback, updateFeedback } = useFeedback();

  // form state
  const [title, setTitle] = useState<string>(initial.title);
  const [body, setBody] = useState<string>(initial.body);
  const [rating, setRating] = useState<Rating>(initial.rating);

  // validation messages
  const [errors, setErrors] = useState({ title: "", body: "", rating: "" });

  useEffect(() => {
    if (editMode) {
      setTitle(editMode.initialTitle);
      setBody(editMode.initialBody);
      setRating(editMode.initialRating);
    }
  }, [editMode]);

  const validate = () => {
    const t = validateTitle(title);
    const b = validateBody(body);
    const r = validateRating(rating);
    setErrors({ title: t, body: b, rating: r});
    return !(t || b || r);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (editMode) {
      updateFeedback(editMode.id, { title, body, rating });
      editMode.onDone?.();
    } else {
      addFeedback({ title, body, rating });
      // reset after submit
      setTitle("");
      setBody("");
      setRating(5);
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <h3>{editMode ? "Edit Feedback" : "Leave Feedback"}</h3>

      <label className={styles.label}>
        Title
        <input value={title} onChange={(e)=> setTitle(e.target.value)} className={styles.input} />
        {errors.title && <div className={styles.error}>{errors.title}</div>}
      </label>

      <label className={styles.label}>
        Rating
        <select value={rating} onChange={(e)=> setRating(Number(e.target.value) as Rating)} className={styles.select}>
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} ⭐</option>)}
        </select>
        {errors.rating && <div className={styles.error}>{errors.rating}</div>}
      </label>

      <label className={styles.label}>
        Feedback
        <textarea value={body} onChange={(e)=> setBody(e.target.value)} className={styles.textarea} rows={5}/>
        {errors.body && <div className={styles.error}>{errors.body}</div>}
      </label>

      <div className={styles.actions}>
        <button type="submit" className={styles.submit}>{editMode ? "Save" : "Submit"}</button>
        {editMode && <button type="button" onClick={() => editMode.onDone?.()} className={styles.cancel}>Cancel</button>}
      </div>
    </form>
  );
};
