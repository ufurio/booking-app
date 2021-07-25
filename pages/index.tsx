import Head from "next/head";
import styles from "../styles/Home.module.css";
import Form from "../components/Form/Form";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Booking App</title>
        <meta
          name="description"
          content="A personal project built to practice building web app using Next Js."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Booking App</h1>
        <Form />
      </main>
    </div>
  );
}
