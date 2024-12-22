import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteForm from "./FavoriteForm";

async function FavoriteButton({ productId }: { productId: string }) {
  const authData = await auth();
  const userId = authData.userId;

  if (!userId) return <CardSignInButton />;
  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteForm favoriteId={favoriteId} productId={productId} />;
}

export default FavoriteButton;
