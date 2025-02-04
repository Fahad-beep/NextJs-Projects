import React from "react";
import { useRouter } from "next/router";
const Post = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <p>This is the slug: {slug}</p>
    </div>
  );
};

export default Post;
