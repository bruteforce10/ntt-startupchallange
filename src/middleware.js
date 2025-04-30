import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/data-startup(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { orgRole } = await auth();
  const { pathname } = req.nextUrl;

  if (isProtectedRoute(req)) await auth.protect();

  if (orgRole !== "org:admin" && pathname.includes("/data-startup")) {
    return new Response("Forbidden", { status: 403 });
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",

    "/(api|trpc)(.*)",
  ],
};
