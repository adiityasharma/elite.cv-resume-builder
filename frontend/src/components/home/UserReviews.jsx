import React from "react";
import { reviews } from "../../constants";

const UserReviews = () => {
  return (
    <div className="w-full h-[700px] flex flex-col justify-center gap-10 ">
      <div className="text-lg text-neutral-700 font-medium">
        <p className=""> Trusted by Thousands of Job Seekers</p>
        <p className="">
          Don't just take our word for it. Here's what our users have to say.
        </p>
      </div>
      <div className="mx-auto w-5xl grid grid-cols-3 gap-10">
        {reviews.map((item, index) => (
          <div key={index} className="flex flex-col justify-between p-8 rounded-2xl h-60 w-full bg-white/20 shadow-lg backdrop-blur-2xl ">
            <p className="italic text-neutral-800">
              "{item.review}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 overflow-hidden rounded-full">
                <img src={item.image} alt="" />
              </div>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-neutral-600">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
