import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonVarients = cva("rounded-md transition-colors duration-300", {
  variants: {
    color: {
      primary: "text-gray-300 hover:text-gray-50 hover:bg-gray-800",
      secondary: "bg-gray-700 text-gray-50 hover:bg-gray-900 text-gray-100",
      danger: "bg-rose-500 text-rose-50 hover:bg-rose-700",
    },
    size: { default: "py-2 px-4", full: "" },
  },
  defaultVariants: {
    color: "primary",
    size: "default",
  },
});

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVarients({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
