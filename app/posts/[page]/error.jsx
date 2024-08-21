"use client";

import styles from "./posts.module.css";

export default function ErrorBoundary({ reset }) {
  return (
    <div className={styles["error-page"]}>
      <div>Error fetching data</div>
      <button onClick={reset} className={styles["error-button"]}>
        retry
      </button>
    </div>
  );
}
