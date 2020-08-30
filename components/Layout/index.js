import Header from "../Header";
import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.scss";

// Back Home Componenti olustur ve detay sayfalarında çağır,
function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Code Challenge</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {!home && (
        <Link href="/">
          <a
            style={{
              display: "inline-block",
              padding: "20px",
              fontSize: "20px"
            }}
          >
            ← Go Back
          </a>
        </Link>
      )}
      <div className={styles.pageContainer}>{children}</div>
    </div>
  );
}

export default Layout;
