import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div>this is my id {id}</div>
    </>
  );
};

export default Post;
