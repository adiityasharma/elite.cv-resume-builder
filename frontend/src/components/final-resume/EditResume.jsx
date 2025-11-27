import { Trash2 } from "lucide-react";
import Input from "../common/Input";
import Select from "../common/Select";
import Option from "../common/Option";
import EditSection from "../common/EditSection";
import { useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteEducation,
  updatePersonalInfo,
  addEducation,
  addExperience,
  deleteExperience,
  addSkill,
  deleteSkill,
  addSummary,
  addLanguage,
  deleteLanguage,
  addProject,
  deleteProject,
  addCertificates,
  deleteCertificates,
  addTools,
  deleteTools,
} from "../../app/features/resumeData";
import {
  certificateInitialState,
  certificateReducer,
  educationInitialState,
  educationReducer,
  experienceInitialState,
  experienceReducer,
  projectInitialState,
  projectReducer,
} from "../../utils/reducers.js";

const EditResume = () => {
  const [inputValue, setInputValue] = useState("");
  const [languageInput, setLanguageInput] = useState({});
  const [toolInput, setToolInput] = useState("");

  const [edState, educationDispatch] = useReducer(
    educationReducer,
    educationInitialState
  );
  const [experienceState, experienceDispatch] = useReducer(
    experienceReducer,
    experienceInitialState
  );
  const [projectState, projectDispatch] = useReducer(
    projectReducer,
    projectInitialState
  );
  const [certificateState, certificateDispatch] = useReducer(
    certificateReducer,
    certificateInitialState
  );

  const {
    personalInfo,
    education,
    experience,
    skills,
    summary,
    languages,
    projects,
    certificates,
    tools,
  } = useSelector((state) => state.resumeData);

  console.log(tools)
  const dispatch = useDispatch();

  const addSkillHandle = () => {
    if (inputValue) {
      dispatch(addSkill({ name: inputValue }));
      setInputValue("");
    }
  };
  const addToolsHandle = () => {
    if (toolInput) {
      dispatch(addTools({ name: toolInput }));
      setToolInput("");
    }
  };

  const enterToSave = (e) => {
    if (e.key === "Enter") {
      addSkillHandle();
      addToolsHandle();
    }
  };

  const addLanguageHandler = () => {
    if (languageInput?.name) {
      dispatch(addLanguage(languageInput));
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 ">
      <div className="flex flex-col gap-2 w-full max-h-[800px] overflow-y-auto customScrollbar py-2 ">
        {/* personal details */}
        <EditSection title="Personal Details">
          <div className="flex flex-col ">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="First Name"
                styles="w-full "
                placeholder="First Name"
                value={personalInfo.firstName}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ firstName: e.target.value }))
                }
              />
              <Input
                label="Surname"
                styles="w-full "
                placeholder="Surname"
                value={personalInfo.lastName}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ lastName: e.target.value }))
                }
              />
              <Input
                label="Address"
                styles="w-full "
                placeholder="Indore, MP, India"
                value={personalInfo.address}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ address: e.target.value }))
                }
              />
              <Input
                label="Email"
                styles="w-full "
                type="email"
                placeholder="Email"
                value={personalInfo.email}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ email: e.target.value }))
                }
              />
              <Input
                label="Phone"
                styles="w-full "
                type="text"
                placeholder="Phone"
                value={personalInfo.phone}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ phone: e.target.value }))
                }
              />
              <Input
                label="Linkedin"
                styles="w-full "
                type="text"
                placeholder="Linkedin"
                value={personalInfo.linkedin}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ linkedin: e.target.value }))
                }
              />
              <Input
                label="Github"
                styles="w-full "
                type="text"
                placeholder="Github"
                value={personalInfo.github}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ github: e.target.value }))
                }
              />
              <Input
                label="Website"
                styles="w-full "
                type="text"
                placeholder="Website"
                value={personalInfo.website}
                onChange={(e) =>
                  dispatch(updatePersonalInfo({ website: e.target.value }))
                }
              />
            </div>
          </div>
        </EditSection>

        {/*education details */}
        <EditSection title="Education">
          <div className="flex flex-wrap items-center gap-x-2">
            {education?.length > 0 &&
              education.map((item, index) => (
                <div
                  key={item.id}
                  className="w-fit relative group flex flex-col border-2 p-2 rounded hover:border-red-500 border-blue-500  mb-2 overflow-hidden text-sm"
                >
                  <div className="w-fit">{item.degree}</div>
                  <button
                    onClick={() => dispatch(deleteEducation({ id: item.id }))}
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 />{" "}
                  </button>
                </div>
              ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="School Name"
                styles="w-full "
                placeholder="School Name"
                onChange={(e) =>
                  educationDispatch({ type: "school", value: e.target.value })
                }
              />
              <Input
                label="School Location"
                styles="w-full "
                placeholder="School Location"
                onChange={(e) =>
                  educationDispatch({ type: "location", value: e.target.value })
                }
              />
              <Input
                label="Degree"
                styles="w-full "
                placeholder="Degree"
                onChange={(e) =>
                  educationDispatch({ type: "degree", value: e.target.value })
                }
              />
              <div>
                <label htmlFor="" className="font-semibold text-sm">
                  Graduation Date (or expected Graduation Date)
                </label>
                <div className="w-full flex justify-between gap-4">
                  <Select
                    onChange={(e) =>
                      educationDispatch({
                        type: "month",
                        value: e.target.value,
                      })
                    }
                    styles="w-full py-2"
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
                    onChange={(e) =>
                      educationDispatch({
                        type: "year",
                        value: e.target.value,
                      })
                    }
                    placeholder="Year"
                    type="text"
                    styles=" w-full"
                  />
                </div>
              </div>
              <Input
                label="Grade"
                styles="w-full "
                placeholder="Grade"
                onChange={(e) =>
                  educationDispatch({
                    type: "grade",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Field of Study"
                styles="w-full "
                type="text"
                placeholder="Computer Science"
                onChange={(e) =>
                  educationDispatch({
                    type: "fieldOfStudy",
                    value: e.target.value,
                  })
                }
              />
            </div>
            <button
              onClick={() => dispatch(addEducation(edState))}
              className="w-full font-bold text-lg cursor-pointer active:scale-98 active:bg-blue-500 transition-all duration-100 bg-blue-600 text-white mt-2 py-2 rounded "
            >
              Save
            </button>
          </div>
        </EditSection>

        {/* Experience */}
        <EditSection title="Experience">
          <div className="flex flex-wrap items-center gap-x-2">
            {experience?.length > 0 &&
              experience.map((item) => (
                <div
                  key={item.id}
                  className="w-fit relative group flex flex-col border-2 p-2 rounded hover:border-red-500 border-blue-500  mb-2 overflow-hidden text-sm"
                >
                  <div className="w-fit">{item.position}</div>
                  <button
                    onClick={() => dispatch(deleteExperience({ id: item.id }))}
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 />{" "}
                  </button>
                </div>
              ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Position *"
                styles="w-full "
                placeholder="Software Engineer"
                value={experienceState.position}
                onChange={(e) =>
                  experienceDispatch({
                    type: "position",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Company"
                styles="w-full "
                placeholder="Google"
                value={experienceState.company}
                onChange={(e) =>
                  experienceDispatch({
                    type: "company",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Description"
                styles="w-full "
                placeholder="Description"
                value={experienceState.description}
                onChange={(e) =>
                  experienceDispatch({
                    type: "description",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Location"
                styles="w-full "
                placeholder="New Delhi, India"
                value={experienceState.location}
                onChange={(e) =>
                  experienceDispatch({
                    type: "location",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Start Date"
                styles="w-full "
                placeholder="Jul 2025"
                value={experienceState.startDate}
                onChange={(e) =>
                  experienceDispatch({
                    type: "startDate",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Last Date"
                styles="w-full "
                placeholder="Present - if currently working"
                value={experienceState.endDate}
                onChange={(e) =>
                  experienceDispatch({
                    type: "endDate",
                    value: e.target.value,
                  })
                }
              />
            </div>
            <button
              onClick={() => dispatch(addExperience(experienceState))}
              className="w-full font-bold text-lg cursor-pointer active:scale-98 active:bg-blue-500 transition-all duration-100 bg-blue-600 text-white mt-2 py-2 rounded "
            >
              Save
            </button>
          </div>
        </EditSection>

        {/* Projects */}
        <EditSection title="Projects">
          <div className="flex flex-wrap items-center gap-x-2">
            {projects?.length > 0 &&
              projects.map((item) => (
                <div
                  key={item.id}
                  className="w-fit relative group flex flex-col border-2 p-2 rounded hover:border-red-500 border-blue-500  mb-2 overflow-hidden text-sm"
                >
                  <div className="w-fit">{item.name}</div>
                  <button
                    onClick={() => dispatch(deleteProject({ id: item.id }))}
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 />{" "}
                  </button>
                </div>
              ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Name *"
                styles="w-full "
                placeholder="Resume Builder"
                onChange={(e) =>
                  projectDispatch({ type: "name", value: e.target.value })
                }
              />
              <Input
                label="Description"
                styles="w-full "
                placeholder="Description"
                onChange={(e) =>
                  projectDispatch({
                    type: "description",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Technologies"
                styles="w-full "
                placeholder="Java, WebRTC..."
                onChange={(e) =>
                  projectDispatch({
                    type: "technologies",
                    value: e.target.value,
                  })
                }
              />
              <Input
                label="Link"
                styles="w-full "
                placeholder="www.example.com"
                onChange={(e) =>
                  projectDispatch({ type: "link", value: e.target.value })
                }
              />
              <Input
                label="Github"
                styles="w-full "
                placeholder="Jul 2025"
                onChange={(e) =>
                  projectDispatch({ type: "github", value: e.target.value })
                }
              />
            </div>
            <button
              onClick={() => dispatch(addProject(projectState))}
              className="w-full font-bold text-lg cursor-pointer active:scale-98 active:bg-blue-500 transition-all duration-100 bg-blue-600 text-white mt-2 py-2 rounded "
            >
              Save
            </button>
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
              className="w-full border-2 mt-1 border-neutral-200 rounded-sm px-3 py-2 bg-white focus-within:bg-blue-50 focus-within:outline-2 focus-within:outline-blue-600"
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
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2">
              {skills.map((item) => (
                <div
                  key={item.id}
                  className="w-fit relative group flex flex-col border-2 px-2 py-1 rounded hover:border-red-500 border-blue-500 overflow-hidden text-sm"
                >
                  <div className="w-fit text-blue-500 font-medium">
                    {item.name}
                  </div>
                  <button
                    onClick={() => dispatch(deleteSkill({ id: item.id }))}
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 size={20} />{" "}
                  </button>
                </div>
              ))}
            </div>
          )}
        </EditSection>

        {/* tools */}
        <EditSection title="Tools">
          <div className="flex items-center gap-2">
            <input
              onKeyUp={enterToSave}
              onChange={(e) => setToolInput(e.target.value)}
              value={toolInput}
              placeholder="Add Skills"
              type="text"
              className="w-full border-2 mt-1 border-neutral-200 rounded-sm px-3 py-2 bg-white focus-within:bg-blue-50 focus-within:outline-2 focus-within:outline-blue-600"
            />
            <button
              onClick={addToolsHandle}
              className={`px-4 py-2 rounded bg-blue-500 text-white ${
                toolInput ? "cursor-pointer bg-blue-600" : "cursor-not-allowed"
              }`}
            >
              Add
            </button>
          </div>
          {tools && tools.length > 0 && (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2">
              {tools.map((item) => (
                <div
                  // key={item.id}
                  className="w-fit relative group flex flex-col border-2 px-2 py-1 rounded hover:border-red-500 border-blue-500 overflow-hidden text-sm"
                >
                  <div className="w-fit text-blue-500 font-medium">
                    {item.name}
                  </div>
                  <button
                    onClick={() => dispatch(deleteTools({ id: item.id }))}
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 size={20} />{" "}
                  </button>
                </div>
              ))}
            </div>
          )}
        </EditSection>

        {/* summary */}
        <EditSection title="Summary">
          <div>
            <textarea
              className="w-full h-30 border-2 mt-1 border-neutral-200 rounded-sm px-3 py-2 bg-white focus-within:bg-blue-50  focus-within:outline-2 focus-within:outline-blue-600"
              placeholder="Write your summary here."
              name=""
              id=""
              value={summary}
              onChange={(e) => dispatch(addSummary(e.target.value))}
            />
          </div>
        </EditSection>

        <EditSection title="Languages">
          <div className="flex flex-wrap items-center gap-x-2">
            {languages?.length > 0 &&
              languages.map((item) => (
                <div
                  key={item.id}
                  className="w-fit relative group flex flex-col border-2 px-2 py-1 rounded hover:border-red-500 border-blue-500 mb-2 overflow-hidden text-sm"
                >
                  <div className="w-fit">
                    {item.name} {item.level}
                  </div>
                  <button
                    onClick={() => dispatch(deleteLanguage({ id: item.id }))}
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 />{" "}
                  </button>
                </div>
              ))}
          </div>

          <div>
            <Input
              label="Language"
              styles="w-full "
              placeholder="English"
              onChange={(e) =>
                setLanguageInput({ ...languageInput, name: e.target.value })
              }
            />
            <div className="flex flex-col mt-1">
              <label htmlFor="" className="font-semibold text-sm ">
                Level
              </label>
              <Select
                styles="w-full py-2"
                onChange={(e) =>
                  setLanguageInput({ ...languageInput, level: e.target.value })
                }
              >
                <Option value="Beginner" label="Beginner" />
                <Option value="Elementary" label="Elementary" />
                <Option value="Intermediate" label="Intermediate" />
                <Option value="Upper-Intermediate" label="Upper-Intermediate" />
                <Option value="Advanced" label="Advanced" />
              </Select>
            </div>
            <button
              onClick={addLanguageHandler}
              className="w-full font-bold text-lg cursor-pointer active:scale-98 active:bg-blue-500 transition-all duration-100 bg-blue-600 text-white mt-2 py-2 rounded "
            >
              Add
            </button>
          </div>
        </EditSection>

        {/* certifications */}
        <EditSection title="Certifications">
          <div className="flex flex-wrap items-center gap-x-2">
            {certificates?.length > 0 &&
              certificates.map((item) => (
                <div
                  key={item.id}
                  className="w-fit relative group flex flex-col border-2 px-2 py-1 rounded hover:border-red-500 border-blue-500 mb-2 overflow-hidden text-sm"
                >
                  <div className="w-fit">
                    {item.title} {item.level}
                  </div>
                  <button
                    onClick={() =>
                      dispatch(deleteCertificates({ id: item.id }))
                    }
                    className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-full items-center justify-center"
                  >
                    {" "}
                    <Trash2 />{" "}
                  </button>
                </div>
              ))}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col w-full gap-y-2">
              <Input
                label="Title *"
                styles="w-full "
                placeholder="Title"
                onChange={(e) =>
                  certificateDispatch({ type: "title", value: e.target.value })
                }
              />
              <Input
                label="Issuer"
                styles="w-full "
                placeholder="Issuer"
                onChange={(e) =>
                  certificateDispatch({ type: "issuer", value: e.target.value })
                }
              />
              <Input
                label="Date"
                styles="w-full "
                placeholder="Date"
                onChange={(e) =>
                  certificateDispatch({ type: "date", value: e.target.value })
                }
              />
              <Input
                label="Link"
                styles="w-full "
                placeholder="www.example.com"
                onChange={(e) =>
                  certificateDispatch({ type: "link", value: e.target.value })
                }
              />
            </div>
            <button
              onClick={() => dispatch(addCertificates(certificateState))}
              className="w-full font-bold text-lg cursor-pointer active:scale-98 active:bg-blue-500 transition-all duration-100 bg-blue-600 text-white mt-2 py-2 rounded "
            >
              Save
            </button>
          </div>
        </EditSection>

        {/* add custom fieldds */}
      </div>
    </div>
  );
};

export default EditResume;
