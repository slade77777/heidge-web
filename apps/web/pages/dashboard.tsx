import React from "react";
import withProtectedSSR from "../lib/withProtectedSSR";
import { GetServerSideProps } from "next";

const DashboardPage = () => {
  return <div>Dashboard</div>;
};

export const getServerSideProps: GetServerSideProps = withProtectedSSR();

export default DashboardPage;
