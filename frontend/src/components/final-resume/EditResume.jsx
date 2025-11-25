import { Trash, Trash2, X } from "lucide-react";
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
  } = useSelector((state) => state.resumeData);
  const dispatch = useDispatch();


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

  const addLanguageHandler = () => {
    if (languageInput?.name) {
      dispatch(addLanguage(languageInput));
    }
    console.log(languageInput);
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
          {education?.length > 0 &&
            education.map((item) => (
              <div
                key={item.id}
                className="relative group flex flex-col border p-2 rounded border-neutral-300 text-neutral-600 mb-2 overflow-hidden text-[12px]"
              >
                <button
                  onClick={() => dispatch(deleteEducation({ id: item.id }))}
                  className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-8 items-center justify-center"
                >
                  {" "}
                  <Trash2 />{" "}
                </button>
                <div className="flex w-full gap-1">
                  <p className="font-semibold">School:</p>{" "}
                  <p className="truncate">{item.school}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold">Location:</p>{" "}
                  <p className="truncate">{item.location}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold">School:</p>{" "}
                  <p className="truncate">{item.school}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold">Degree:</p>{" "}
                  <p className="truncate">{item.degree}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold">Graduated:</p>{" "}
                  <p className="truncate">
                    {item.month} {item.year}
                  </p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Grade:</p>{" "}
                  <p className="truncate">{item.grade}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Field of Study:</p>{" "}
                  <p className="truncate">{item.fieldOfStudy}</p>
                </div>
              </div>
            ))}

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
          {experience?.length > 0 &&
            experience.map((item) => (
              <div
                key={item.id}
                className="relative group flex flex-col border p-2 rounded border-neutral-300 text-neutral-600 mb-2 overflow-hidden text-[12px]"
              >
                <button
                  onClick={() => dispatch(deleteExperience({ id: item.id }))}
                  className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-8 items-center justify-center"
                >
                  {" "}
                  <Trash2 />{" "}
                </button>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Position:</p>{" "}
                  <p className="truncate">{item.position}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Location:</p>{" "}
                  <p className="truncate">{item.location}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Company:</p>{" "}
                  <p className="truncate">{item.company}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Start Date:</p>{" "}
                  <p className="truncate">{item.startDate}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Last Date:</p>{" "}
                  <p className="truncate">{item.endDate}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Description:</p>{" "}
                  <p className="truncate">{item.description}</p>
                </div>
              </div>
            ))}

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
          {projects?.length > 0 &&
            projects.map((item) => (
              <div
                key={item.id}
                className="relative group flex flex-col border p-2 rounded border-neutral-300 text-neutral-600 mb-2 overflow-hidden text-[12px]"
              >
                <button
                  onClick={() => dispatch(deleteProject({ id: item.id }))}
                  className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-8 items-center justify-center"
                >
                  {" "}
                  <Trash2 />{" "}
                </button>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Name:</p>{" "}
                  <p className="truncate">{item.name}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Technologies:</p>{" "}
                  <p className="truncate">{item.technologies}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Link:</p>{" "}
                  <p className="truncate">{item.link}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Github:</p>{" "}
                  <p className="truncate">{item.github}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Description:</p>{" "}
                  <p className="truncate">{item.description}</p>
                </div>
              </div>
            ))}

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
            <div className="mt-2">
              <div className="flex flex-col gap-y-1 text-[12px] text-neutral-500">
                {skills.map((item) => (
                  <div
                    key={item.id}
                    className="group hover:text-black relative border px-2 py-1 hover:border-neutral-700   border-neutral-300 rounded overflow-hidden"
                  >
                    <p>{item.name}</p>
                    <button
                      onClick={() => dispatch(deleteSkill({ id: item.id }))}
                      className="group-hover:absolute hidden group-hover:flex top-0 right-0 h-full w-8 bg-red-500 text-white cursor-pointer items-center justify-center"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
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
              value={summary}
              onChange={(e) => dispatch(addSummary(e.target.value))}
            />
          </div>
        </EditSection>

        <EditSection title="Languages">
          {languages && languages.length > 0 && (
            <div className="mb-2">
              <div className="flex flex-col gap-y-1 text-[12px] text-neutral-500">
                {languages.map((item) => (
                  <div
                    key={item.id}
                    className="group hover:text-black relative border px-2 py-1 hover:border-neutral-700   border-neutral-300 rounded overflow-hidden"
                  >
                    <p>
                      {item.name} - {item.level}
                    </p>
                    <button
                      onClick={() => dispatch(deleteLanguage({ id: item.id }))}
                      className="group-hover:absolute hidden group-hover:flex top-0 right-0 h-full w-8 bg-red-500 text-white cursor-pointer items-center justify-center"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

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
          {certificates?.length > 0 &&
            certificates.map((item) => (
              <div
                key={item.id}
                className="relative group flex flex-col border p-2 rounded border-neutral-300 text-neutral-600 mb-2 overflow-hidden text-[12px]"
              >
                <button
                  onClick={() => dispatch(deleteCertificates({ id: item.id }))}
                  className="group-hover:absolute hidden group-hover:flex top-0 right-0 text-white bg-red-500/80 backdrop-blur-sm hover:bg-red-500 cursor-pointer h-full w-8 items-center justify-center"
                >
                  {" "}
                  <Trash2 />{" "}
                </button>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Title:</p>{" "}
                  <p className="truncate">{item.title}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Issuer:</p>{" "}
                  <p className="truncate">{item.issuer}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Date:</p>{" "}
                  <p className="truncate">{item.date}</p>
                </div>
                <div className="flex w-full gap-1">
                  <p className="font-semibold ">Link:</p>{" "}
                  <p className="truncate">{item.link}</p>
                </div>
              </div>
            ))}

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
