import { Trash, X } from "lucide-react";
import Input from "../common/Input";
import Select from "../common/Select";
import Option from "../common/Option";
import EditSection from "../common/EditSection";
import { useReducer, useState } from "react";




const EditResume = () => {
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);

  const [state, dispatch] = useReducer()

  const addSkillHandle = () => {
    if (inputValue) {
      setSkills([...skills, { id: Date.now(), name: inputValue }]);
      setInputValue("");
    }
  };

  const enterToSave = (e) => {
    if (e.key === "Enter") {
      addSkillHandle();
    }
  };

  const removeSkill = (id) => {
    if (id) {
      setSkills(skills.filter((skill) => skill.id !== id));
    }
  };

  return (
    <div className="flex flex-col gap-4 ">
      <div className=" flex items-center justify-between font-semibold">
        <h1 className="text-xl ">Edit & Add Sections</h1>
        {/* <X className="text-blue-400 cursor-pointer hover:text-blue-600 " /> */}
      </div>

      <div className="h-px w-full bg-neutral-500 "></div>

      <div className="flex flex-col gap-2 w-full max-h-[800px] overflow-y-auto customScrollbar py-2">
        {/* personal details */}
        <EditSection title="Personal Details">
          <div className="flex flex-col ">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="First Name"
                styles="w-full "
                placeholder="First Name"
              />
              <Input label="Surname" styles="w-full " placeholder="Surname" />
              <Input label="City" styles="w-full " placeholder="City" />
              <Input label="Country" styles="w-full " placeholder="Country" />
              <Input label="Pin Code" styles="w-full " placeholder="Pin Code" />
              <Input
                label="Email"
                styles="w-full "
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
        </EditSection>

        {/*education details */}
        <EditSection title="Education">
          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="School Name"
                styles="w-full "
                placeholder="School Name"
              />
              <Input
                label="School Location"
                styles="w-full "
                placeholder="School Location"
              />
              <Input label="Degree" styles="w-full " placeholder="Degree" />
              <div>
                <label htmlFor="" className="font-semibold text-sm">
                  Graduation Date (or expected Graduation Date)
                </label>
                <div className="w-full flex justify-between gap-4">
                  <Select styles="w-full py-2">
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
                  <Input placeholder="Year" type="text" styles=" w-full" />
                </div>
              </div>
              <Input label="Pin Code" styles="w-full " placeholder="Pin Code" />
              <Input
                label="Field of Study"
                styles="w-full "
                type="text"
                placeholder="Computer Science"
              />
            </div>
          </div>
        </EditSection>

        {/* Experience */}
        <EditSection title="Experience">
          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Title *"
                styles="w-full "
                placeholder="Software Engineer"
              />
              <Input label="Employer" styles="w-full " placeholder="Google" />
              <Input
                label="Description"
                styles="w-full "
                placeholder="Description"
              />
              <Input
                label="Location"
                styles="w-full "
                placeholder="New Delhi, India"
              />
              <div>
                <label htmlFor="" className="font-semibold text-sm">
                  Start Date
                </label>
                <div className="w-full flex justify-between gap-4">
                  <Select styles="w-full py-2">
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
                  <Input placeholder="Year" type="text" styles=" w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="End Date" className="font-semibold text-sm">
                  End Date
                </label>
                <div className="w-full flex justify-between gap-4">
                  <Select styles="w-full py-2">
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
                  <Input placeholder="Year" type="text" styles=" w-full" />
                </div>
              </div>
              <div className="flex items-center w-fit gap-2">
                <input
                  className="accent-blue-400 appearance-none w-5 h-5 border-2 border-gray-400 rounded-md checked:bg-blue-500 checked:border-blue-500 "
                  type="checkbox"
                  name="currentlyWorking"
                  id="currentlyWorking"
                />
                <label htmlFor="currentlyWorking">Currently Working</label>
              </div>
            </div>
          </div>
        </EditSection>

        {/* skilss */}
        <EditSection title="Skills">
          <div className="flex items-center gap-2">
            <input
              onKeyUp={enterToSave}
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              placeholder="Add Skills"
              type="text"
              className="py-2 rounded outline-none border border-neutral-600 px-5 bg-white w-full"
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
          {skills && skills.length > 0 && (
            <div className="mt-5">
              <div className="mt-2 ml-5">
                <ul className="list-disc grid grid-cols-2  gap-x-2">
                  {skills &&
                    skills.length > 0 &&
                    skills.map((skill, index) => (
                      <li key={skill.id} className="relative group ">
                        {skill.name}
                        <button
                          onClick={() => removeSkill(skill.id)}
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
        </EditSection>

        {/* summary */}
        <EditSection title="Summary">
          <div>
            <textarea
              className="w-full h-auto leading-tight border-2 border-neutral-300 outline-none rounded-sm p-4 bg-white"
              placeholder="Write your summary here."
              name=""
              id=""
            />
          </div>
        </EditSection>

        {/* add custom fieldds */}
      </div>
    </div>
  );
};

export default EditResume;
