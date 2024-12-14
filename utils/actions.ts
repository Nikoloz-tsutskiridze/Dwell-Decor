import db from "@/utils/db";

export async function fetchFeaturedProducts() {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
}

export function fetchAllProducts() {
  return db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
