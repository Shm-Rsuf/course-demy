import Image from "next/image";
import Link from "next/link";

const CourseItem = ({ course }) => {
  console.log(course);
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
    <div className="w-full lg:w-[25rem] shadow-md rounded-md overflow-hidden">
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

      <div>
        <h3>{title}</h3>
        <p>
          <span>Instuctor: {instructor}</span>
          <span>Duration: {duration}</span>
        </p>

        <p>
          <span>Rating: {rating}</span>
          <span>Students: {students}</span>
        </p>

        <p>{description}</p>

        <div>
          <p>{price}</p>
          <Link href={`/courses/${id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
