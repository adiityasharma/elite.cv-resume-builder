import React, { useReducer } from "react";
import Input from "../common/Input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { useDispatch, useSelector } from "react-redux";
import { updatePersonalInfo } from "../../app/features/resumeData";

const PersonalInfoPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { personalInfo } = useSelector((state) => state.resumeData);

  console.log(personalInfo);

  const clickHandler = () => {
    // dispatch(updatePersonalInfo(personalInfoState));
    navigate("/resume/sections/education");
  };

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
          value={personalInfo.firstName}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ firstName: e.target.value }))
          }
        />
        <Input
          placeholder="Surname"
          type="text"
          label="Last Name"
          styles="py-3 w-full"
          value={personalInfo.lastName}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ lastName: e.target.value }))
          }
        />
        <Input
          placeholder="Address"
          type="text"
          label="Address"
          styles="py-3 w-full"
          value={personalInfo.address}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ address: e.target.value }))
          }
        />
        <Input
          placeholder="Phone No"
          type="text"
          label="Phone"
          styles="py-3 w-full"
          value={personalInfo.phone}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ phone: e.target.value }))
          }
        />
        <Input
          placeholder="Linkedin"
          type="text"
          label="Linkedin"
          styles="py-3 w-full"
          value={personalInfo.linkedin}
          onChange={(e) => updatePersonalInfo({ linkedin: e.target.value })}
        />
        <Input
          placeholder="Email"
          type="email"
          label="Email *"
          styles="py-3 w-full"
          value={personalInfo.email}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ email: e.target.value }))
          }
        />
        <Input
          placeholder="Github"
          type="text"
          label="Github"
          styles="py-3 w-full"
          value={personalInfo.github}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ github: e.target.value }))
          }
        />
        <Input
          placeholder="Website"
          type="text"
          label="Website"
          styles="py-3 w-full"
          value={personalInfo.website}
          onChange={(e) =>
            dispatch(updatePersonalInfo({ website: e.target.value }))
          }
        />
      </div>

      <Button onClick={clickHandler} styles="absolute bottom-0 right-0 ">
        Next: Education
      </Button>
    </div>
  );
};

export default PersonalInfoPage;
