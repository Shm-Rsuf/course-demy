import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const checkoutPage = ({ course }) => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.email,
      }));
    }
  }, [session]);

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span="checkout"
        h2="Please provide your details"
        p="Fill out this from to continue checkout"
      />

      <form className="flex flex-col gap-5">
        <div className="form-control flex flex-col gap-2">
          <label htmlFor="name" className="cursor-pointer">
            Name
          </label>
          <input
            className="outline-none border py-2 px-2 focus:border-teal-300 rounded"
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            readOnly
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="email" className="cursor-pointer">
            Email
          </label>
          <input
            className="outline-none border py-2 px-2 focus:border-teal-300 rounded"
            type="email"
            id="email"
            placeholder="hello@dev.com"
            value={formData.email}
            readOnly
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="mobile" className="cursor-pointer">
            Phone Number
          </label>
          <input
            className="outline-none border py-2 px-2 focus:border-teal-300 rounded"
            type="tel"
            id="mobile"
            placeholder="+88017xxxxxxxx"
            value={formData.mobile}
            onChange={(e) =>
              setFormData({ ...formData, mobile: e.target.value })
            }
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="address" className="cursor-pointer">
            Address
          </label>
          <input
            className="outline-none border py-2 px-2 focus:border-teal-300 rounded"
            type="text"
            id="address"
            placeholder="House no"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="courseTitle" className="cursor-pointer">
            Course title
          </label>
          <input
            className="outline-none border py-2 px-2 focus:border-teal-300 rounded"
            type="text"
            id="courseTitle"
            placeholder="Advance javascript"
            value={formData.courseTitle}
            readOnly
          />
        </div>

        <div className="form-control flex flex-col gap-2">
          <label htmlFor="price" className="cursor-pointer">
            Price in (USD)
          </label>
          <input
            className="outline-none border py-2 px-2 focus:border-teal-300 rounded"
            type="number"
            id="price"
            placeholder="$100"
            value={formData.price}
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default checkoutPage;

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
