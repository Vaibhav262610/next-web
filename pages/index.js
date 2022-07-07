import Head from "next/head";
import Hero from "../components/Hero";
import SliderData from "../components/SliderData";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SR2-ANIME</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Hero
        heading="ANIME"
        message="I made yt shorts to improve my editing skills and to entertain audience."
      />
      <SliderData />
    </div>
  );
}
