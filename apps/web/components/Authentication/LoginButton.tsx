import Link from "next/link";
import { useAuth } from "shared";
import LogoutButton from "./LogoutButton";

const LoginButton = () => {
  const { account, loading } = useAuth();

  if (account) {
    return <LogoutButton />;
  }

  return (
    <Link href="/login">
      <a className="btn w-24">{loading ? "Loading..." : "Sign In"}</a>
    </Link>
  );
};

export default LoginButton;
