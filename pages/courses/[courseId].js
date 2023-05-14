import { getCourse } from "@/prisma/courses";

const CourseDetailPage = ({ course }) => {
  return <div>CourseDetailPage</div>;
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
