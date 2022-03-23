import nookies from "nookies";
import { GetServerSidePropsContext } from "next";
import { verifyToken } from "./firebaseAdmin";

export function getCookie(
  ctx: GetServerSidePropsContext,
  cookieName: string
): string {
  return nookies.get(ctx)?.[cookieName] || "";
}

export function getTokenServerSide(context: GetServerSidePropsContext) {
  return getCookie(context, "token");
}

export function checkAuthentication(
  context: GetServerSidePropsContext
): Promise<boolean> {
  const token = getTokenServerSide(context);
  return verifyToken(token);
}
