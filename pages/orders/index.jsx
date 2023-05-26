import OrderCourse from "@/components/OrderCourse";
import prisma from "@/prisma/prisma";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const OrdersPage = ({ session, customer }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [router, session]);

  if (!session) {
    return null;
  }

  return (
    <div className="wrapper py-10 min-h-screen">
      <h2 className="text-3xl text-teal-400 text-center">
        You enrolled :{" "}
        <span className="text-gray-900 text-4xl font-bold">
          {customer.orders.length}
        </span>{" "}
        course
        {customer.orders.length > 1 ? "s" : ""}
      </h2>

      <div className="courses flex flex-wrap justify-between items-center gap-10 mt-10">
        {customer.orders.map((course) => (
          <OrderCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  const updatedCustomer = {
    ...customer,
    createdAt: customer.createdAt.toString(),
    updatedAt: customer.updatedAt.toString(),

    orders: customer.orders.map((order) => ({
      ...order,
      createdAt: order.createdAt.toString(),
      updatedAt: order.updatedAt.toString(),
    })),
  };

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
      customer: updatedCustomer,
    },
  };
};
