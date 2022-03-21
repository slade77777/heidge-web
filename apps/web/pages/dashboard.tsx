import React from "react";
import withProtectedSSR from "../lib/withProtectedSSR";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export const getServerSideProps: GetServerSideProps = withProtectedSSR(
  async (context: GetServerSidePropsContext) => {
    return {
      props: {},
    };
  }
);

export default DashboardPage;
