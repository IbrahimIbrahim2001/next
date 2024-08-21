"use client";

import { useParams, useRouter } from "next/navigation";

import PrevPageButton from "./PrevPageButton";
import NextPageButton from "./NextPageButton";

import styles from "../posts.module.css";

export default function Pagination() {
  const router = useRouter();
  const { page } = useParams();

  const handleNextPage = () => {
    if (parseInt(page) < 10) {
      const newPage = parseInt(page) + 1;
      router.push(`/posts/${newPage}`);
    }
  };
  const handlePrevPage = () => {
    if (parseInt(page) > 1) {
      const newPage = parseInt(page) - 1;
      router.push(`/posts/${newPage}`);
    }
  };
  return (
    <div className={styles["next-and-prev-button-container"]}>
      <PrevPageButton onClick={handlePrevPage} page={page} />
      <p className={styles["page-number"]}>{page}</p>
      <NextPageButton onClick={handleNextPage} page={page} />
    </div>
  );
}
