"use client";

import { useRouter } from "next/navigation";

import NextPageButton from "./NextPageButton";
import PrevPageButton from "./PrevPageButton";

import usePagination from "../hooks/usePagination";
import styles from "../posts.module.css";

export default function Pagination() {
  const router = useRouter();
  const { page } = usePagination();
  return (
    <div className={styles["next-and-prev-button-container"]}>
      <PrevPageButton />
      <p className={styles["page-number"]}>{page}</p>
      <NextPageButton />
    </div>
  );
}
