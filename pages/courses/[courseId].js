import Button from "@/components/Button";
import { getCourse } from "@/prisma/courses";

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
      <div className="flex-center grid lg:grid-cols-2 space-y-2 lg:gap-10 lg:space-y-0">
        <div className="left bg-yellow-500 flex-[0.65]">
          <h3>{title}</h3>
          <p>
            <span>Instructor: </span>
            {instructor}
          </p>
          <p>
            <span>Description: </span>
            {description}
          </p>
          <p>
            <span>Enrolled: </span>
            {students}
          </p>
        </div>

        <div className="right bg-yellow-500 flex-[0.35]">
          <h3>
            <span>Duration: </span>
            {duration}
          </h3>
          <p>
            <span>Price: </span>
            {price}
          </p>
          <p>
            <span>Rating: </span>
            {rating}
          </p>

          <Button
            href={`/course/${id}`}
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
