import React from "react";
import { useAuth } from "shared";
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { account } = useAuth();

  if (account) {
    return <LogoutButton />;
  }

  return <button className="btn">Sign in</button>;
};

export default LoginButton;
