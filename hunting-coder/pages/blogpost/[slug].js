import React, { useState } from "react";
import styles from "../../styles/BlogPost.module.css";
const slug = (props) => {
  const [blog, setblog] = useState(props.parsedBlog);

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

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let blogItem = await fetch(`http://localhost:3000/api/getBlogs?slug=${slug}`);
  let parsedBlog = await blogItem.json();
  return {
    props: {
      parsedBlog,
    },
  };
}

export default slug;
