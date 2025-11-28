import React from "react";
import { reviews } from "../../constants";

const UserReviews = () => {
  return (
    <div className="w-full md:h-[600px] flex flex-col justify-center gap-10 p-4 md:px-6 lg:px-15 mt-10 md:mt-0">
      <div className="text-lg text-neutral-700 font-medium">
        <p className="text-2xl md:text-3xl font-semibold text-center">
          Trusted by Thousands of Job Seekers
        </p>
        <p className="text-sm text-center">
          Don't just take our word for it. Here's what our users have to say.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-sm">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-8 rounded-2xl gap-8 w-full bg-white shadow-sm  leading-tight "
          >
            <p className="italic text-neutral-800">"{item.review}"</p>
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
