import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
const slug = () => {
  const router = useRouter();
  const [blog, setblog] = useState();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;

    console.log(`slug in useEffect: ${slug}`);
    console.log(`blog in useEffect: ${blog}`);
    fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`)
      .then((val) => {
        return val.json();
      })
      .then((parsed) => {
        setblog(parsed);
      });
  }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export default slug;
