import React from "react";
import GoBackBtn from "../common/GoBackBtn";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { addSummary } from "../../app/features/resumeData";
import { useDispatch, useSelector } from "react-redux";

const Summary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { design, summary } = useSelector((state) => state.resumeData);

  return (
    <div className="w-full p-4 py-10 md:py-15 mt-20 relative">
      <GoBackBtn styles="absolute top-0  md:top-3 md:left-0">Go Back</GoBackBtn>
      <div className="w-full">
        <h1 className="text-2xl md:text-5xl font-bold">
          Finally, let’s work on your summary
        </h1>
        <h1 className="mt-2 md:mt-5 text-sm md:text-lg font-medium">
          Here’s what you need to know:
        </h1>
        <p className="mt-2 md:mt-10 font-semibold text-[12px] md:text-sm">
          Your summary shows employers you’re right for their job. We’ll help
          you write a great one with expert content you can customize.
        </p>
      </div>
      <div>
        <textarea
          className="lg:w-[500px] w-full h-[200px] border-2 mt-5 border-neutral-300 outline-none rounded-sm p-4 bg-white"
          placeholder="Write your summary here."
          value={summary}
          name=""
          id=""
          onChange={(e) => dispatch(addSummary(e.target.value))}
        />
      </div>
      <Button
        onClick={() => navigate(`/build/final-resume/${design.template || "tp1"}`)}
        styles="absolute -bottom-5 right-4"
      >
        Next
      </Button>
    </div>
  );
};

export default Summary;
