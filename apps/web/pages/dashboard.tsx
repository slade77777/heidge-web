import React from "react";
import withProtectedSSR from "../lib/withProtectedSSR";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getCookie } from "../lib/auth";
import { verifyToken } from "../lib/firebaseAdmin";

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export const getServerSideProps: GetServerSideProps = withProtectedSSR(
  async (context: GetServerSidePropsContext) => {
    const token = getCookie(context, "token");
    const isAuthenticated = await verifyToken(token);

    return {
      props: {},
    };
  }
);

export default DashboardPage;
