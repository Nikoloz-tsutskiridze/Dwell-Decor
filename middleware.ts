import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;
  const authObj = await auth();
  const { userId } = authObj;

  if (isAdminRoute(req) && !isAdminUser) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!isPublicRoute(req) && !userId) {
    return (await auth()).redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
