import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "../posts.module.css";
import usePagination from "../hooks/usePagination";

//note:this is a client component, because => Pagination Component is a client component and it is the parent of this component
export default function NextPageButton() {
  const { handleNextPage, page } = usePagination();
  return (
    <div
      style={{ visibility: page >= 10 ? "hidden" : "visibile" }}
      className={styles.prevButton}
    >
      <AiOutlineArrowRight
        style={{
          width: "35px",
          height: "20px",
        }}
        onClick={handleNextPage}
      />
    </div>
  );
}
