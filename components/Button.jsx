import Link from "next/link";

const Button = ({ href, placeholder }) => {
  return <Link href={href}>{placeholder}</Link>;
};

export default Button;
