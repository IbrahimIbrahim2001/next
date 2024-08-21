import Link from "next/link";
import React from "react";

import styles from "./posts.module.css";

export default function NotFound() {
  return (
    <div>
      <h1>Sorry For That :(</h1>
      <Link href="/">
        <button
          type="button"
          style={{ padding: "2px 20px" }}
          className={styles["error-button"]}
        >
          Home
        </button>
      </Link>
    </div>
  );
}
