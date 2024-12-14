import React from "react";
import HeroCarouser from "./HeroCarouser";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          assumenda commodi repellendus laboriosam, voluptate expedita qui saepe
          ad reiciendis unde doloribus consequatur atque facere molestias
          exercitationem. Magnam totam animi odio!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Out Product</Link>
        </Button>
      </div>
      <HeroCarouser />
    </div>
  );
}

export default Hero;
