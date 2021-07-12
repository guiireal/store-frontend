import { Typography } from "@material-ui/core";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Produtos</title>
      </Head>
      <Typography component="h1" variant="h3" color="textPrimary">
        Produtos
      </Typography>
    </div>
  );
}
