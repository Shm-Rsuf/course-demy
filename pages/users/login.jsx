import SectionHeader from "@/components/SectionHeader";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  return (
    <div className="wrapper min-h-screen py-10">
      <SectionHeader
        span="Login"
        h2="Get Started With Google"
        p="Please login to cuntinue with our features"
      />

      <div className="flex justify-center mt-10">
        <button className="text-xl bg-gray-700 hover:bg-gray-800 duration-300 text-gray-50 flex justify-between items-center gap-[2px] py-2 px-3 rounded tracking-wider">
          <span>
            <FcGoogle />
          </span>
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default login;
