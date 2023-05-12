import { cva } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";

const buttonVarients = cva(
  "rounded-md transition-colors duration-300 flex justify-center",
  {
    variants: {
      color: {
        primary: "bg-rose-500 text-rose-50 hover:bg-rose-700",
        secondary: "text-gray-300 hover:text-gray-50 hover:bg-gray-800",
      },
      size: { default: "py-3 px-6", full: " py-3 px-6" },
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
