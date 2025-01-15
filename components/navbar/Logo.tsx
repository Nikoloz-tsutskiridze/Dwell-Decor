import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";

function Logo() {
  return (
    <Button size="icon" className="w-12 h-12" asChild>
      <Link href="/">
        <FaShopify style={{ width: "32px", height: "32px" }} />
      </Link>
    </Button>
  );
}

export default Logo;
