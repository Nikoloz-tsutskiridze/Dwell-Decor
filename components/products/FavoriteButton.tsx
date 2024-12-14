import React from "react";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa6";

function FavoriteButton({ productId }: { productId: string }) {
  return (
    <Button size="icon" variant="outline" className="p-5 cursor-pointer">
      <FaHeart />
    </Button>
  );
}

export default FavoriteButton;
