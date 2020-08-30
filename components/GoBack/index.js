import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./go-back.module.scss";

function GoBack() {
  const router = useRouter();
  return (
    <a className={styles.goBackAnchor} onClick={router.back}>
      ← Go Back
    </a>
  );
}

export default GoBack;
