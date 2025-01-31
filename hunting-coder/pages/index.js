import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import NavBar from "@/components/navBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <style jsx>{`
        h2 {
          font-size: 38px;
        }
        h3 {
          font-size: 28px;
          margin-bottom: 6px;
        }
      `}</style>
      <Head>
        <title>Hunting Coders</title>
        <meta
          name="keywords"
          content="nextjs, hunting coder, huntingcoder blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <span className="myspan dummy">
            <h1 className={styles.title}>Hunting Coders</h1>
          </span>
          <div className={styles.imageWrap}>
            <Image
              src="/homeing.jpg"
              width={800}
              height={400}
              className={styles.myImg}
            />
          </div>

          <p className={styles.description}>
            A blog for hutning coders by a hunting coder
          </p>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
