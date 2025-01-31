import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const blog = () => {
  const [blogs, setblog] = useState([]);
  useEffect(() => {
    console.log("useEffect is up and running");
    fetch("http://localhost:3000/api/blog")
      .then((val) => val.json())
      .then((parsed) => {
        setblog(parsed);
        console.log("parsed blog content: ", parsed);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((value) => {
          console.log("blog value: ", value);
          return (
            <div className={styles.blogpost} key={value.slug}>
              <Link href={`/blogpost/${value.slug}`}>
                <h3>{value.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {value.content.substr(0, 140)}...
              </p>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default blog;
