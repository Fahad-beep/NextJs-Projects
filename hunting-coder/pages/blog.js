import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.blogpost}>
          <Link href={"/blogpost/learn-js"}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>
          <p>JavaScript is the language use to design logic for the web</p>
          <Link href={"/blogpost/learn-js"}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>
          <p>JavaScript is the language use to design logic for the web</p>
          <Link href={"/blogpost/learn-js"}>
            <h3>How to learn JavaScript in 2022?</h3>
          </Link>
          <p>JavaScript is the language use to design logic for the web</p>
        </div>
      </main>
    </div>
  );
};

export default blog;
