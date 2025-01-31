import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title is {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum iure
          fugiat totam est nesciunt aliquam blanditiis alias nisi aspernatur ad,
          reiciendis labore itaque vero illo eveniet exercitationem omnis quam
          sapiente consectetur voluptate.
        </div>
      </main>
    </div>
  );
};

export default slug;
