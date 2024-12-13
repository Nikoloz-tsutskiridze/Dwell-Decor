import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaShop } from "react-icons/fa6";

function Logo() {
  return (
    <Button size="default" asChild>
      <Link href="/">
        <FaShop />
      </Link>
    </Button>
  );
}

export default Logo;
