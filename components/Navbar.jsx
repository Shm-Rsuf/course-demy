import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { getTransition, sutterDown } from "@/utilities/motion";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="navbar h-20 bg-gray-700 text-gray-400 flex-center ">
      <div className="wrapper flex justify-between overflow-hidden">
        <motion.div
          className="flex justify-center items-center"
          variants={sutterDown()}
          initial="from"
          animate="to"
          transition={getTransition()}
        >
          <Link
            href="/"
            className="text-gray-50 text-xl font-bold tracking-wider flex-center"
          >
            <span className="text-rose-500 capitalize">c</span>ourse
            <span className="text-teal-400">Demy</span>
          </Link>
        </motion.div>

        <div className="gap-5 flex-center">
          <Link
            href="/"
            className="hover:text-gray-50 duration-300 transition-color"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="hover:text-gray-50 duration-300 transition-color"
          >
            Courses
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-50 duration-300 transition-color"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-50 duration-300 transition-color"
          >
            Contact
          </Link>
          {session && (
            <Link
              href="/orders"
              className="hover:text-gray-50 duration-300 transition-color"
            >
              Orders
            </Link>
          )}
        </div>

        <div>
          {!session ? (
            <Button href="/users/login" placeholder="Log In" color="primary" />
          ) : (
            <Button
              href="/users/profile"
              placeholder="Profile"
              color="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
