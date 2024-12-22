import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { GiShop } from "react-icons/gi";

function Logo() {
  return (
    <Button size="icon" className="w-12 h-12" asChild>
      <Link href="/">
        <GiShop style={{ width: "32px", height: "32px" }} />
      </Link>
    </Button>
  );
}

export default Logo;
