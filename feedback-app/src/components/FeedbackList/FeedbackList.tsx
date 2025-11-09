import React, { useMemo, useState } from "react";
import { useFeedback } from "../../context/FeedbackContext";
import { FeedbackItem } from "../FeedbackItem/FeedbackItem";
import { RatingFilter } from "../RatingFilter/RatingFilter";
import styles from "./FeedbackList.module.css";

export const FeedbackList: React.FC = () => {
  const { feedbacks, clearAll } = useFeedback();
  const [filterRating, setFilterRating] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filterRating == null) return feedbacks;
    return feedbacks.filter(f => f.rating === filterRating);
  }, [feedbacks, filterRating]);

  return (
    <div>
      <div className={styles.toolbar}>
        <RatingFilter value={filterRating} onChange={setFilterRating} />
        <div>
          <button className={styles.clear} onClick={() => { if (confirm("Clear all feedbacks?")) clearAll(); }}>Clear All</button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>No feedback yet</div>
      ) : (
        <div className={styles.grid}>
          {filtered.map(item => <FeedbackItem key={item.id} item={item} />)}
        </div>
      )}
    </div>
  );
};
