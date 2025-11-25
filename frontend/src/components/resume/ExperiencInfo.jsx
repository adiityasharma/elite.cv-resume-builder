import Input from "../common/Input";
import GoBackBtn from "../common/GoBackBtn";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import {
  experienceInitialState,
  experienceReducer,
} from "../../utils/reducers";
import { useDispatch } from "react-redux";
import { addExperience } from "../../app/features/resumeData";

const ExperiencInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, experienceDispatch] = useReducer(
    experienceReducer,
    experienceInitialState
  );

  const clickHandler = () => {
    dispatch(addExperience(state));
  };

  return (
    <div className="w-full py-15 relative">
      <GoBackBtn styles="absolute top-3 left-0">Go Back</GoBackBtn>
      <div className="w-full">
        <h1 className="w-4xl text-5xl font-bold ">
          Tell us about your experience
        </h1>
        <h1 className="text-xl mt-5 ">
          Think volunteer work or impactful projects—start with your most
          recent. Everything counts!
        </h1>
        <p className="mt-10 font-semibold text-sm">
          * indicates a required field
        </p>
      </div>
      <div className="w-4xl grid grid-cols-2 gap-5 mt-8">
        <Input
          placeholder="Software Engineer"
          type="text"
          label="Title *"
          styles="py-3 w-full"
          onChange={(e) =>
            experienceDispatch({ type: "position", value: e.target.value })
          }
        />
        <Input
          placeholder="Google"
          type="text"
          label="Employer"
          styles="py-3 w-full"
          onChange={(e) =>
            experienceDispatch({ type: "company", value: e.target.value })
          }
        />

        <Input
          placeholder="New Delhi, India"
          type="text"
          label="Location"
          styles="py-3 w-full "
          onChange={(e) =>
            experienceDispatch({ type: "location", value: e.target.value })
          }
        />

        <Input
          label="Start Date"
          styles="w-full "
          placeholder="Jul 2025"
          onChange={(e) =>
            experienceDispatch({ type: "startDate", value: e.target.value })
          }
        />
        <Input
          label="Last Date"
          styles="w-full "
          placeholder="Present - if currently working"
          onChange={(e) =>
            experienceDispatch({ type: "endDate", value: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col mt-2 gap-1 ">
        <label htmlFor="" className="font-semibold">
          Description
        </label>
        <textarea
          placeholder="Type here..."
          className="p-2 w-[440px] text-sm border border-neutral-500 rounded bg-white outline-none min-h-20"
          onChange={(e) =>
            experienceDispatch({ type: "description", value: e.target.value })
          }
        />
      </div>
      <Button onClick={clickHandler} styles="w-fit mt-2">
        Save
      </Button>
      <Button
        onClick={() => navigate("/resume/sections/skills")}
        styles="absolute bottom-3 right-0"
      >
        Next
      </Button>
    </div>
  );
};

export default ExperiencInfo;
