import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { checkAuthentication } from "./auth";

export default function withProtectedSSR(
  getServerSidePropsFunc?: GetServerSideProps
): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    const isAuthenticated = await checkAuthentication(context);
    if (!isAuthenticated) {
      return {
        redirect: {
          destination: `/login?redirectTo=${context.resolvedUrl}`,
          permanent: false,
        },
      };
    }
    if (getServerSidePropsFunc) {
      return await getServerSidePropsFunc(context);
    }
    return {
      props: {},
    };
  };
}
