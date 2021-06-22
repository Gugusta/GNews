import styles from "../styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> Início | G News </title>
      </Head>
      <h1 className={styles.title}>Hello Word</h1>
    </>
  );
}
