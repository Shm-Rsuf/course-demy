import Button from "@/components/Button";
import { getCourse } from "@/prisma/courses";
import { currencyConverter } from "@/utilities/currencyConverter";

const CourseDetailPage = ({ course }) => {
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
    <div className="wrapper py-10 min-h-screen">
      <div
        style={{
          backgroundImage: `url(${cover})`,
        }}
        className="w-full h-[20rem] bg-no-repeat bg-cover bg-center"
      />
      <div className="mt-10 grid lg:grid-cols-2 space-y-2 lg:gap-10 lg:space-y-0">
        <div className="left flex-[0.65] space-y-2">
          <h3 className="text-3xl text-teal-400 font-bold">{title}</h3>
          <p>
            <span className="text-gray-900 font-bold">Instructor : </span>
            {instructor}
          </p>
          <p className="text-gray-600/75">
            <span className="text-gray-900 font-bold">Description : </span>
            {description.substring(0, 100)}...
          </p>
          <p>
            <span className="text-gray-900 font-bold">
              Enrolled Students :{" "}
            </span>
            {students}
          </p>
        </div>

        <div className="right flex-[0.35] space-y-2">
          <h3>
            <span className="text-gray-900 font-bold">Duration : </span>
            {duration}
          </h3>
          <p>
            <span className="text-gray-900 font-bold">Rating : </span>
            {rating}
          </p>

          <p className=" text-2xl">
            <span className="text-gray-900 font-bold">Price : </span>
            {currencyConverter(price)}
          </p>

          <Button
            href={`/checkout/${id}`}
            placeholder="Enrolled Now"
            color="teal"
            size="full"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourse = {
    ...course,
    createdAt: course.createdAt.toString(),
    updatedAt: course.updatedAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};
