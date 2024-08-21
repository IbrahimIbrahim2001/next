import { AiOutlineArrowRight } from "react-icons/ai";

import styles from "../posts.module.css";

//note:this is a client component, because => Pagination Component is a client component and it is the parent of this component
export default function NextPageButton({ onClick, page }) {
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
        onClick={onClick}
      />
    </div>
  );
}
