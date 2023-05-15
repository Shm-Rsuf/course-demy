import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonVarients = cva(
  "rounded-md transition-colors duration-300 flex justify-center item-center",
  {
    variants: {
      color: {
        primary: "text-gray-300 hover:text-gray-50 hover:bg-gray-800",
        secondary: "bg-gray-700 text-gray-50 hover:bg-gray-900 text-gray-100",
        teal: "bg-teal-400 text-teal-200 hover:bg-teal-500 hover:text-teal-50",
      },
      size: { default: "py-2 px-4", full: "py-2 w-full" },
    },
    defaultVariants: {
      color: "primary",
      size: "default",
    },
  }
);

const Button = ({ href, placeholder, color, size }) => {
  return (
    <Link className={clsx(buttonVarients({ color, size }))} href={href}>
      {placeholder}
    </Link>
  );
};

export default Button;
