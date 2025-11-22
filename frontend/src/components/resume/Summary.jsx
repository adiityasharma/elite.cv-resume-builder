import React from "react";
import GoBackBtn from "../common/GoBackBtn";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

const initialstate = {
  summary: "",
};

const ruducer = (state, action) => {
  switch (action.type) {
    case "summary":
      return { ...state, [action.type]: action.value };
    default:
      return state;
  }
};

const Summary = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(ruducer, initialstate);

  return (
    <div className="w-full py-15 relative">
      <GoBackBtn styles="absolute top-3 left-0">Go Back</GoBackBtn>
      <div className="w-full">
        <h1 className="w-4xl text-5xl font-bold ">
          Finally, let’s work on your summary
        </h1>
        <h1 className="text-2xl font-semibold mt-5 ">
          Here’s what you need to know:
        </h1>
        <p className="mt-1 text-lg w-2xl">
          Your summary shows employers you’re right for their job. We’ll help
          you write a great one with expert content you can customize.
        </p>
      </div>
      <div>
        <textarea
          className="w-[500px] h-[200px] border-2 mt-5 border-neutral-300 outline-none rounded-sm p-4 bg-white"
          placeholder="Write your summary here."
          name=""
          id=""
          onChange={(e) => dispatch({ type: "summary", value: e.target.value })}
        />
      </div>
      <Button
        onClick={() => navigate("/resume/sections/add-section")}
        styles="absolute bottom-0 right-0"
      >
        Next
      </Button>
    </div>
  );
};

export default Summary;
