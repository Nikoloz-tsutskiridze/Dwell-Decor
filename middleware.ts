import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const authObj = await auth();
  const { userId } = authObj;

  if (isAdminRoute(req)) {
    const isAdminUser = userId === process.env.ADMIN_USER_ID;
    if (!isAdminUser) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (isPublicRoute(req)) {
    return NextResponse.next();
  }

  if (!userId) {
    return authObj.redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
