import { getCourse } from "@/prisma/courses";
import { currencyConverter } from "@/utilities/currencyConverter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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

  const { data: session } = useSession();
  const router = useRouter();

  const handleEnrolled = () => {
    if (session) {
      router.push(`/checkout/${id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${id}`);
    }
  };
  return (
    <div className="wrapper py-10 min-h-screen">
      <div
        style={{
          backgroundImage: `url(${cover})`,
        }}
        className="w-full h-[20rem] bg-no-repeat bg-cover bg-center"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      />
      <div
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
        className="mt-10 grid lg:grid-cols-2 space-y-2 lg:gap-10 lg:space-y-0"
      >
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

          <button
            onClick={handleEnrolled}
            className="bg-teal-400 text-teal-200 hover:bg-teal-500 hover:text-teal-50 duration-300 rounded py-2 w-full"
          >
            Enroll Now
          </button>
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
