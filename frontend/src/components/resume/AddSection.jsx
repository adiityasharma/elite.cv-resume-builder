import GoBackBtn from "../common/GoBackBtn";
import { otherFieldsForAdditionalDetails } from "../../constants";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const AddSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full py-15">
      <GoBackBtn styles="absolute top-3 left-0">Go Back</GoBackBtn>
      <div className="w-full">
        <h1 className="w-4xl text-5xl font-bold ">
          Do you have anything else to add?
        </h1>
        <p className="text-xl mt-4 ">These sections are optional.</p>
      </div>

      <div className="mt-5 pl-5 flex justify-between items-start w-3xl gap-5">
        <div className="flex flex-col gap-3">
          {otherFieldsForAdditionalDetails.map((item) => (
            <div key={item.id} className="flex items-center w-fit gap-2 ">
              <input
                className="accent-blue-400 appearance-none w-5 h-5 border border-neutral-600 rounded-full checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
                type="checkbox"
                name={item.name}
                id={item.name}
              />
              <label htmlFor={item.name} className="text-lg  cursor-pointer">
                {item.name}
              </label>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <input
            className="accent-blue-400 appearance-none w-5 h-5 border border-neutral-600 rounded-full checked:bg-blue-500 checked:border-blue-500 "
            type="checkbox"
            name="currentlyWorking"
            id="currentlyWorking"
          />
          <div className="flex flex-col ">
            <label htmlFor="" className="-ml-8 font-semibold text-sm">
              Add Your Own
            </label>
            <input
              id="add your own"
              className={`border mt-1 border-neutral-500 outline-none rounded-sm px-3 py-2 bg-white/50`}
              type="text"
              placeholder="Hobbies"
              // onChange={onChange}
            />
          </div>
        </div>
      </div>
      {/*  TODO: change accourding to url */}
      <Button styles="absolute bottom-0 right-0" onClick={() => navigate("/resume/serction/custom")}>Next</Button>
    </div>
  );
};

export default AddSection;
