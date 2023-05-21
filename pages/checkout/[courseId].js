import SectionHeader from "@/components/SectionHeader";
import { getCourse } from "@/prisma/courses";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

/* STRIPE PROMISE */
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

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
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  /* CHECKOUT HANDLER */
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;

    /* SEND A POST REQ. TO THE SERVER */
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: [course],
      name: formData.name,
      email: formData.email,
      address: formData.address,
      courseTitle: formData.courseTitle,
      mobile: formData.mobile,
      courseId: course.id,
    });

    /* RE-DIRECT TO THE STRIPE PAYMENT */
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span="checkout"
        h2="Please provide your details"
        p="Fill out this from to continue checkout"
      />

      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-5 mt-10 w-full lg:w-1/2"
        >
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
              required
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
              required
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

          <button
            type="submit"
            role="link"
            className="uppercase tracking-wider bg-teal-400 text-teal-200 hover:bg-teal-500 hover:text-teal-50 duration-300 rounded py-2 w-full"
          >
            proceed to checkout
          </button>
        </form>
      </div>
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
