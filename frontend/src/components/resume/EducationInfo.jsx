import React from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import Option from "../common/Option";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../common/Button";
import GoBackBtn from "../common/GoBackBtn";

const EducationInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-15 relative">
      <GoBackBtn styles="absolute top-3 left-0">Go Back</GoBackBtn>
      <div>
        <h1 className="text-5xl font-bold">Share your education journey</h1>
        <p className="mt-5 text-lg font-medium ">
          Include your higher education details-degree, courses, or institution.
        </p>
        <p className="mt-10 font-semibold text-sm">
          * indicates a required field
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 justify-between w-4xl my-8">
        <Input
          placeholder="School Name"
          type="text"
          label="School Name *"
          styles="py-3 w-full"
        />
        <Input
          placeholder="New Delhi, India"
          type="text"
          label="School Location"
          styles="py-3 w-full"
        />
        <Input
          placeholder="Degree"
          type="text"
          label="Degree"
          styles="py-3 w-full"
        />
        <div>
          <label htmlFor="" className="font-semibold text-sm">
            Graduation Date (or expected Graduation Date)
          </label>
          <div className="w-full flex justify-between gap-4">
            <Select styles="w-full">
              <Option value="January" label="January" />
              <Option value="February" label="February" />
              <Option value="March" label="March" />
              <Option value="April" label="April" />
              <Option value="May" label="May" />
              <Option value="June" label="June" />
              <Option value="July" label="July" />
              <Option value="August" label="August" />
              <Option value="September" label="September" />
              <Option value="October" label="October" />
              <Option value="November" label="November" />
              <Option value="December" label="December" />
            </Select>
            <Input placeholder="2025" type="text" styles="py-3 w-full" />
          </div>
        </div>
        <Input
          placeholder="Financial Accounting"
          type="text"
          label="Field of Study"
          styles="py-3 w-full"
        />
      </div>

      <Button
        onClick={() => navigate("/resume/sections/experience")}
        styles="absolute bottom-0 right-0 "
      >
        Next
      </Button>
    </div>
  );
};

export default EducationInfo;
