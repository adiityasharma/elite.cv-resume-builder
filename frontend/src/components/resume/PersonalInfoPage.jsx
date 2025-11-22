import React, { useReducer } from "react";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";

const initialstate = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  country: "",
  pinCode: "",
  linkedin: "",
  github: "",
  website: "",
  summary: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, [action.type]: action.value };
    case "lastName":
      return { ...state, [action.type]: action.value };
    case "email":
      return { ...state, [action.type]: action.value };
    case "phone":
      return { ...state, [action.type]: action.value };
    case "city":
      return { ...state, [action.type]: action.value };
    case "country":
      return { ...state, [action.type]: action.value };
    case "pinCode":
      return { ...state, [action.type]: action.value };
    case "linkedin":
      return { ...state, [action.type]: action.value };
    case "github":
      return { ...state, [action.type]: action.value };
    case "website":
      return { ...state, [action.type]: action.value };
    case "summary":
      return { ...state, [action.type]: action.value };
    default:
      return state;
  }
};

const PersonalInfoPage = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialstate);

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
          onChange={(e) =>
            dispatch({ type: "firstName", value: e.target.value })
          }
        />
        <Input
          placeholder="Surname"
          type="text"
          label="Last Name"
          styles="py-3 w-full"
          onChange={(e) =>
            dispatch({ type: "lastName", value: e.target.value })
          }
        />
        <Input
          placeholder="City"
          type="text"
          label="City"
          styles="py-3 w-full"
          onChange={(e) => dispatch({ type: "city", value: e.target.value })}
        />
        <div className="flex justify-between">
          <Input
            placeholder="Country"
            type="text"
            label="Country"
            styles="py-3 w-full"
            onChange={(e) =>
              dispatch({ type: "country", value: e.target.value })
            }
          />
          <Input
            placeholder="Pin Code"
            type="text"
            label="Pin Code"
            styles="py-3 w-full"
            onChange={(e) =>
              dispatch({ type: "pinCode", value: e.target.value })
            }
          />
        </div>

        <Input
          placeholder="Phone No"
          type="text"
          label="Phone"
          styles="py-3 w-full"
          onChange={(e) => dispatch({ type: "phone", value: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          label="Email *"
          styles="py-3 w-full"
          onChange={(e) => dispatch({ type: "email", value: e.target.value })}
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
