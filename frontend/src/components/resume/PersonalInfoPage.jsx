import React from "react";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";

const PersonalInfoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full py-15 relative">
      <div className="w-full">
        <h1 className="w-4xl text-5xl font-bold ">
          What’s the best way for employers to contact you?
        </h1>
        <p className="text-xl mt-5 font-medium">
          We suggest including an email and phone number.
        </p>
        <p className="mt-10 font-semibold text-sm">
          * indicates a required field
        </p>
      </div>
      <div className="w-4xl grid grid-cols-2 gap-5 mt-8">
        <Input
          placeholder="First Name"
          type="text"
          label="First Name *"
          styles="py-3 w-full"
        />
        <Input
          placeholder="Surname"
          type="text"
          label="Surname"
          styles="py-3 w-full"
        />
        <Input
          placeholder="City"
          type="text"
          label="City"
          styles="py-3 w-full"
        />
        <div className="flex justify-between">
          <Input
            placeholder="Country"
            type="text"
            label="Country"
            styles="py-3 w-full"
          />
          <Input
            placeholder="Pin Code"
            type="text"
            label="Pin Code"
            styles="py-3 w-full"
          />
        </div>

        <Input
          placeholder="Phone No"
          type="text"
          label="Phone"
          styles="py-3 w-full"
        />
        <Input
          placeholder="Email"
          type="email"
          label="Email *"
          styles="py-3 w-full"
        />
      </div>

      <div>
        <h1 className="font-semibold text-xl mt-5">
          Add additional information to your resume (optional)
        </h1>
        <div className="mt-3 flex gap-3 items-center">
          <button className="cursor-pointer bg-white/70 rounded-full border-3 border-[#0068fa] py-1 px-4 text-[#0068fa] font-bold">
            LinkedIn +
          </button>
          <button className="cursor-pointer bg-white/70 rounded-full border-3 border-[#0068fa] py-1 px-4 text-[#0068fa] font-bold">
            Website +
          </button>
          <button className="cursor-pointer bg-white/70 rounded-full border-3 border-[#0068fa] py-1 px-4 text-[#0068fa] font-bold">
            Driving License +
          </button>
        </div>
      </div>
      <Button
        onClick={() => navigate("/resume/sections/education")}
        styles="absolute bottom-0 right-0 "
      >
        Next: Education
      </Button>
    </div>
  );
};

export default PersonalInfoPage;
