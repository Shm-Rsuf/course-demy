import { getCourse } from "@/prisma/courses";

const VideosPage = ({ course }) => {
  console.log(course);
  return (
    <div className="wrapper py-10 min-h-screen">
      <h2>{course.title}</h2>
    </div>
  );
};

export default VideosPage;
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
