import React, { useState } from "react";
import GoBackBtn from "../common/GoBackBtn";
import { Trash } from "lucide-react";
import { skillsSuggestions } from "../../constants";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSkill, deleteSkill } from "../../app/features/resumeData";

const SkillsInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { skills } = useSelector((state) => state.resumeData);

  const [inputValue, setInputValue] = useState("");

  const addSkillHandle = () => {
    if (inputValue) {
      dispatch(addSkill({ name: inputValue }));
      setInputValue("");
    }
  };

  const enterToSave = (e) => {
    if (e.key === "Enter") {
      addSkillHandle();
    }
  };

  return (
    <div className="w-full py-15 relative">
      <GoBackBtn styles="absolute top-3 left-0">Go Back</GoBackBtn>
      <div className="w-full">
        <h1 className="w-4xl text-5xl font-bold ">
          What skills would you like to highlight?
        </h1>
        <h1 className="text-xl mt-5 ">
          Employers scan skills for relevant keywords. We’ll help you choose the
          best ones.
        </h1>
        <p className="mt-10 font-semibold text-sm">* Select atleast 4 skills</p>
      </div>
      <div>
        <div className="flex items-center gap-2 mt-8">
          <input
            onKeyUp={enterToSave}
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Add Skills"
            type="text"
            className="py-2 rounded outline-none border border-neutral-600 px-5 bg-white w-[300px]"
          />
          <button
            onClick={addSkillHandle}
            className={`px-4 py-2 rounded bg-blue-500 text-white ${
              inputValue ? "cursor-pointer bg-blue-600" : "cursor-not-allowed"
            }`}
          >
            Add
          </button>
        </div>
        <div className=" mt-3 text-lg font-medium ">
          <h1 className="">Some relevant skills:</h1>
          <div className="flex w-4xl gap-2 items-center flex-wrap mt-2">
            {skillsSuggestions.map((skill) => (
              <button
                key={skill.id}
                className="text-[12px] bg-white shadow text-blue-600 cursor-pointer px-3 py-1 rounded-full active:scale-95 border border-neutral-100"
                onClick={() => setInputValue(skill.name)}
              >
                {skill.name} +
              </button>
            ))}
          </div>
        </div>
      </div>

      {skills && skills.length > 0 && (
        <div className="mt-5">
          <h1 className="text-lg font-medium">Skills:</h1>
          <div className="mt-2 ml-10">
            <ul className="list-disc grid grid-cols-2 w-xl gap-x-2">
              {skills.map((skill) => (
                <li key={skill.id} className="relative group ">
                  {skill.name}
                  <button
                    onClick={() => dispatch(deleteSkill({ id: skill.id }))}
                    className="hidden absolute top-0 right-5 text-blue-500 group-hover:block cursor-pointer"
                  >
                    <Trash size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <Button
        onClick={() => navigate("/resume/sections/summary")}
        styles="absolute bottom-0 right-0"
      >
        Next
      </Button>
    </div>
  );
};

export default SkillsInfo;
