import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { isAuthenticated } from "./auth";

export default function withProtectedSSR(
  getServerSidePropsFunc: GetServerSideProps
): GetServerSideProps {
  return async (ctx: GetServerSidePropsContext) => {
    if (!isAuthenticated(ctx)) {
      return {
        redirect: {
          destination: `/login?redirectTo=${ctx.resolvedUrl}`,
          permanent: false,
        },
      };
    }
    return await getServerSidePropsFunc(ctx);
  };
}
