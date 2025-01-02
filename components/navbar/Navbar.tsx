import React, { Suspense } from "react";
import Containter from "../form/global/Containter";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return (
    <div className="border-b">
      <Containter className=" flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <Logo />

        <Suspense>
          <NavSearch />
        </Suspense>

        <div className="flex gap-4 items-center">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Containter>
    </div>
  );
}

export default Navbar;
