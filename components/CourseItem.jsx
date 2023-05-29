import { currencyConverter } from "@/utilities/currencyConverter";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { BsStarHalf } from "react-icons/bs";
import Button from "./Button";
import { motion } from "framer-motion";
import { getTransition, sutterUp } from "@/utilities/motion";

const CourseItem = ({ course }) => {
  const {
    cover,
    duration,
    instructor,
    price,
    rating,
    students,
    title,
    description,
    id,
  } = course;
  return (
    <motion.div
      variants={sutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="w-full lg:w-[25rem] shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={cover}
          width={640}
          height={360}
          alt={title}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2 text-sm">
        <h3 className="text-[1.2rem] font-semibold text-teal-400">{title}</h3>
        <p className="flex-between text-gray-600/75">
          <span>
            By <span className="text-gray-900 font-bold">{instructor}</span>
          </span>
          <span>
            Duration:{" "}
            <span className="text-gray-900 font-bold">{duration}</span>
          </span>
        </p>

        <p className="flex-between text-gray-600/75">
          <span>
            Students:{" "}
            <span className="text-gray-900 font-bold">{students}</span>
          </span>
          <span className="flex-between gap-[2px]">
            <FaStar className="text-yellow-400" />{" "}
            <FaStar className="text-yellow-400" />{" "}
            <FaStar className="text-yellow-400" />{" "}
            <FaStar className="text-yellow-400" />{" "}
            <BsStarHalf className="text-yellow-400" />{" "}
            <span className="text-gray-900 font-bold">{rating}</span>
          </span>
        </p>

        <p className="h-20">{description.substring(0, 150)}...</p>

        <div className="flex-between">
          <p>{currencyConverter(price)}</p>

          <Button
            href={`/courses/${id}`}
            placeholder="View Details"
            color="secondary"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
