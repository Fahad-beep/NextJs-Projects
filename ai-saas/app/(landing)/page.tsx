import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
    </div>
  );
};

export default Home;
