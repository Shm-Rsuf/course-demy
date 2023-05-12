import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar h-20 bg-gray-700 text-gray-300 flex-center">
      <div className="wrapper flex justify-between">
        <Link
          href="/"
          className="text-gray-50 font-bold tracking-wider flex-center"
        >
          <span className="text-rose-500 capitalize">c</span>ourse
          <span className="text-teal-400">Demy</span>
        </Link>

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
        </div>

        <div>
          <Button
            href="/users/login"
            placeholder="Log In"
            color="secondary"
            size="default"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
