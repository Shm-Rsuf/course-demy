import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessPage = (session) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="wrapper min-h-screen py-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl flex items-center gap-2">
          <span className="text-emerald-500">
            <AiOutlineCheckCircle />
          </span>
          You&apos;ve enrolled successfully
        </h2>
        <Button
          href="/orders"
          placeholder="Go to your orders"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default SuccessPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
