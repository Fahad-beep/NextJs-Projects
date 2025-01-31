import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const blog = (props) => {
  const [blogs, setblog] = useState(props.allBlogs);
  // useEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((value) => {
          // console.log("blog value: ", value);
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

export async function getServerSideProps(context) {
  // console.log("useEffect is up and running");
  let data = await fetch("http://localhost:3000/api/blog");
  let allBlogs = await data.json();
  return { props: { allBlogs } };
}

export default blog;
