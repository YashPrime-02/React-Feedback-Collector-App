import React from "react";
import styles from "./RatingFilter.module.css";

type Props = {
  value: number | null;     // selected rating filter
  onChange: (val: number | null) => void;
};

export const RatingFilter: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <span>Filter by rating:</span>
      <div className={styles.buttons}>
        <button className={value === null ? styles.active : ""} onClick={() => onChange(null)}>All</button>
        {[5,4,3,2,1].map(n =>
          <button key={n} className={value === n ? styles.active : ""} onClick={() => onChange(n)}>{n} ⭐</button>
        )}
      </div>
    </div>
  );
};
