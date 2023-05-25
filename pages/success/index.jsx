import Button from "@/components/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";

const SuccessPage = () => {
  return (
    <div className="wrapper min-h-screen py-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl flex items-center gap-2">
          <span className="text-emerald-500">
            <AiOutlineCheckCircle />
          </span>
          You've enrolled successfully
        </h2>
        <Button
          href="/orders"
          placeholder="Go to your orders"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default SuccessPage;
