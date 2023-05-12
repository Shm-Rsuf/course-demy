import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/courses";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span="Courses"
        h2="Explore Our All Courses"
        p=" Unleash your curiosity and embark on an exhilarating journey of
          exploration and growth as you explore our wide range of courses."
      />

      <div className="mt-10 flex flex-wrap gap-10">
        {courses?.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourse = courses.map((course) => ({
    ...course,
    createdAt: course.createdAt.toString(),
    updatedAt: course.updatedAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourse,
    },
  };
};
