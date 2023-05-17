import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";

const profile = ({ session }) => {
  const router = useRouter();

  const logoutWithGoogleHandler = async () => {
    try {
      await signOut("google");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="wrapper min-h-screen py-10 flex flex-col items-center">
      <Image
        src={session.user.image}
        alt={session.user.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full border-2 border-gray-700"
      />

      <h2 className="text-2xl capitalize">Welcome, {session.user.name}</h2>
      <button
        onClick={logoutWithGoogleHandler}
        className="text-xl mt-5 bg-rose-400 hover:bg-rose-500 duration-300 text-gray-50 flex justify-between items-center gap-[2px] py-2 px-3 rounded tracking-wider"
      >
        <span>
          <BiLogOut />
        </span>
        Logout
      </button>
    </div>
  );
};

export default profile;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
