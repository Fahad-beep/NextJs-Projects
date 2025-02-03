import React, { useEffect, useState } from "react";
import * as fs from "fs/promises";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
const blog = (props) => {
  const [blogs, setblog] = useState(props.allBlogs);
  const [count, setcount] = useState(5);
  const router = useRouter();

  const fetchMoreData = async () => {
    const data = await fetch(
      `http://localhost:3000/api/blog?count=${count + 3}`
    );
    setcount(count + 3);
    setblog(await data.json());
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={blogs.length !== props.blogCount}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((value) => {
            return (
              <div className={styles.blogpost} key={value.slug}>
                <Link href={`/blogpost/${value.slug}`}>
                  <h3>{value.title}</h3>
                </Link>
                <p className={styles.blogItemp}>
                  {value.content.substr(0, 120)}...
                </p>
                <button
                  className={styles.blogButton}
                  onClick={() => router.push(`/blogpost/${value.slug}`)}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch(`http://localhost:3000/api/blog?count=5`);
  let allBlogData = await fs.readdir(`blogdata`);
  let blogCount = allBlogData.length;
  let allBlogs = await data.json();
  return { props: { allBlogs, blogCount } };
}

export default blog;
