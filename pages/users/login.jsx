import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = ({ session }) => {
  const router = useRouter();
  const loginWithGoogleHandler = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.log(error.message, "error");
    }
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "users/profile";

      router.replace(destination);
    }
  }, [session, router]);

  if (session) {
    return null;
  }

  if (!session) {
    return (
      <div className="wrapper min-h-screen py-10">
        <SectionHeader
          span="Login"
          h2="Get Started With Google"
          p="Please login to cuntinue with our features"
        />

        <div className="flex justify-center mt-10">
          <button
            onClick={loginWithGoogleHandler}
            className="text-xl bg-gray-700 hover:bg-gray-800 duration-300 text-gray-50 flex justify-between items-center gap-[2px] py-2 px-3 rounded tracking-wider"
          >
            <span>
              <FcGoogle />
            </span>
            Sign in with google
          </button>
        </div>
      </div>
    );
  }
};

export default Login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/users/profile";

    return {
      redirect: {
        destination,
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
