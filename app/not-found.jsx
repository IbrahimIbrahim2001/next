import Link from "next/link";
import React from "react";

import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div>
      <div>Error fetching data</div>
      <button className={styles["error-button"]}>Home</button>
    </div>
  );
}
