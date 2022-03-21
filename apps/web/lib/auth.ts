import nookies from "nookies";
import { GetServerSidePropsContext } from "next";

export function getCookie(
  ctx: GetServerSidePropsContext,
  cookieName: string
): string {
  return nookies.get(ctx)?.[cookieName] || "";
}

export function isAuthenticated(ctx: GetServerSidePropsContext): boolean {
  return !!getCookie(ctx, "token");
}
