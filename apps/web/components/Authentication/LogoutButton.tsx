import React from "react";
import { useAuth } from "shared";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();
  const { logout } = useAuth();
  return (
    <button
      className="btn"
      onClick={() => {
        logout();
        router.push("/login");
      }}
    >
      Log out
    </button>
  );
};

export default LogoutButton;
