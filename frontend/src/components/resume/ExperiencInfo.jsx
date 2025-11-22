import React from "react";
import Input from "../common/Input";
import Select from "../common/Select";
import Option from "../common/Option";
import GoBackBtn from "../common/GoBackBtn";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useState } from "react";
import { useEffect } from "react";

const initialstate = {
  company: "",
  position: "",
  location: "",
  description: "",
  startDate: "",
  endDate: "",
  isCurrentWorking: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "company":
      return { ...state, [action.type]: action.value };
    case "position":
      return { ...state, [action.type]: action.value };
    case "location":
      return { ...state, [action.type]: action.value };
    case "description":
      return { ...state, [action.type]: action.value };
    case "endDate":
      return { ...state, [action.type]: action.value };
    case "startDate":
      return { ...state, [action.type]: action.value };
    case "isCurrentWorking":
      return { ...state, [action.type]: action.value };
    default:
      return state;
  }
};

const ExperiencInfo = () => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialstate);

  const [startDate, setStartDate] = useState({ month: "", year: "" });
  const [endDate, setEndDate] = useState({ month: "", year: "" });

  const updateDates = () => {
    if (startDate) {
      dispatch({
        type: "startDate",
        value: `${startDate.month} ${startDate.year}`,
      });
    }
    if (endDate) {
      dispatch({
        type: "endDate",
        value: `${startDate.month} ${startDate.year}`,
      });
    }
  };

  useEffect(updateDates, [startDate, endDate]);


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
            dispatch({ type: "position", value: e.target.value })
          }
        />
        <Input
          placeholder="Google"
          type="text"
          label="Employer"
          styles="py-3 w-full"
          onChange={(e) => dispatch({ type: "company", value: e.target.value })}
        />
        <Input
          placeholder="Description"
          type="text"
          label="Description"
          styles="py-3 w-full "
          onChange={(e) =>
            dispatch({ type: "description", value: e.target.value })
          }
        />
        <Input
          placeholder="New Delhi, India"
          type="text"
          label="Location"
          styles="py-3 w-full "
          onChange={(e) =>
            dispatch({ type: "location", value: e.target.value })
          }
        />
        <div>
          <label htmlFor="">Start Date</label>
          <div className="w-full flex justify-between gap-4">
            <Select
              onChange={(e) => {
                setStartDate({ ...startDate, ["month"]: e.target.value });
              }}
              styles="w-full"
            >
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
            <Input
              onChange={(e) => {
                setStartDate({ ...startDate, ["year"]: e.target.value });
              }}
              type="text"
              styles="py-3 w-full"
              placeholder="Year"
            />
          </div>
        </div>

        <div>
          <label htmlFor="endDate">End Date</label>
          <div className="w-full flex justify-between gap-4">
            <Select
              onChange={(e) => {
                setEndDate({ ...startDate, ["month"]: e.target.value });
              }}
              styles="w-full"
            >
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
            <Input
              onChange={(e) => {
                setEndDate({ ...startDate, ["year"]: e.target.value });
              }}
              type="text"
              styles="py-3 w-full"
              placeholder="Year"
            />
          </div>
        </div>
        <div className="flex items-center w-fit gap-2">
          <input
            onChange={(e) =>
              dispatch({ type: "isCurrentWorking", value: e.target.checked })
            }
            className="accent-blue-400 appearance-none w-5 h-5 border-2 border-gray-400 rounded-md checked:bg-blue-500 checked:border-blue-500 "
            type="checkbox"
            name="currentlyWorking"
            id="currentlyWorking"
          />
          <label htmlFor="currentlyWorking">Currently Working</label>
        </div>
      </div>

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
