import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar h-20 bg-gray-700 text-gray-300 flex items-center">
      <div className="wrapper flex justify-between">
        <Link href="/" className="text-gray-50 font-bold tracking-wider">
          <span className="text-rose-500 capitalize">c</span>ourse
          <span className="text-teal-400">Demy</span>
        </Link>

        <div className="flex gap-5">
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
          <Link
            href="/login"
            className="hover:text-gray-50 duration-300 transition-color"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
