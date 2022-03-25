import { NextPage, GetServerSidePropsContext } from "next";
import { useAuth, User } from "shared";
import { useState } from "react";
import { useRouter } from "next/router";
import { checkAuthentication } from "../lib/auth";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const { login, account } = useAuth();

  function handleChange(e) {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login?.(user);
      await router.push((router.query?.redirectTo as string) || "/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <input
          className="input"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={handleChange}
        />
        <input
          className="input"
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const isAuthenticated = await checkAuthentication(context);
  if (isAuthenticated) {
    return {
      redirect: {
        destination: context.query?.redirectTo || "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default LoginPage;
