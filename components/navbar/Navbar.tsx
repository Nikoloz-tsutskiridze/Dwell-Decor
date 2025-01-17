import React, { Suspense } from "react";
import Containter from "../global/Containter";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import DarkMode from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return (
    <div className="border-b">
      <Containter className=" flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4">
        <div className="grid grid-cols-2 sm:items-center">
          <Logo />

          <Suspense>
            <NavSearch />
          </Suspense>
        </div>

        <div className="flex gap-3 items-center">
          <LinksDropdown />
          <CartButton />
          <DarkMode />
        </div>
      </Containter>
    </div>
  );
}

export default Navbar;
