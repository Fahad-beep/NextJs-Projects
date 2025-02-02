import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home(props) {
  const [homeData, sethomeData] = useState(props.homeData);
  return (
    <>
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
          <div className={styles.imageWrap}>
            <Image
              src="/homeing.jpg"
              width={200}
              height={200}
              className={styles.myImg}
              alt="My Home Working Image"
            />
          </div>
          <h1 className={styles.title}>&lt;Hunting Coders/&gt;</h1>

          <p className={styles.description}>
            {homeData ??
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel modi laboriosam minus optio quos cum, veniam sunt aspernatur a sit esse quibusdam eius iure repudiandae nulla qui, doloribus repellendus ad corrupti. Qui, neque reprehenderit!"}
          </p>
        </main>
        <footer className={styles.footer}></footer>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  let req = await fetch(`http://localhost:3000/api/gethome`);
  let homeData = await req.json();
  return {
    props: {
      homeData,
    },
  };
}
