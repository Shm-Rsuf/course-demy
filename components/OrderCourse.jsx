import { currencyConverter } from "@/utilities/currencyConverter";
import Button from "./Button";

const OrderCourse = ({ course }) => {
  return (
    <div className="w-full lg:w-auto bg-gray-50 p-3 flex flex-col gap-3 shadow-md">
      <span className="text-xl font-semibold">{course.id}</span>
      <h3 className="text-2xl text-teal-400">{course.courseTitle}</h3>
      <p className="text-xl">Amount: {currencyConverter(course.amountTotal)}</p>
      <Button
        href={`/users/dashbord/courses/${course.courseId}`}
        placeholder="Study Now"
        color="secondary"
        size="full"
      />
    </div>
  );
};

export default OrderCourse;
