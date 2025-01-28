import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Dummy from "../components/dummy";
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
      <style jsx>
        {`
          .myspan {
            color: yellow;
          }
        `}
      </style>
      <Head>
        <title>Hunting Coders</title>
        <meta
          name="keywords"
          content="nextjs, hunting coder, huntingcoder blog"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dummy />

      <Script src="/script1.js" strategy=""></Script>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <nav className={`${styles.mainNav}`}>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <main className={styles.main}>
          <span className="myspan dummy">
            <h1 className={styles.title}>Hunting Coders</h1>
          </span>

          <p className={styles.description}>
            A blog for hutning coders by a hunting coder
          </p>
          <div className="blog">
            <div className={styles.blogpost}>
              <h2>Popular Blogs</h2>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language use to design logic for the web</p>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language use to design logic for the web</p>
              <h3>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language use to design logic for the web</p>
            </div>
          </div>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}
