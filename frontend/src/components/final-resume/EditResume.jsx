import { ChevronDown } from 'lucide-react';
import React from 'react'
import { colorPalettes } from '../../constants';

const EditResume = () => {
  return (
    <div>
      <div>
        <div className="flex gap-5 items-center cursor-pointer">
          <h1 className="font-medium">Colors: </h1>
          <ChevronDown className="text-blue-500" />
        </div>
        {colorPalettes.map((item, index) => (
          <div key={index + 100} className="ml-5 mt-2">
            <h1 className="text-[12px] font-semibold">{item.palette_name}</h1>
            <div className="flex flex-wrap gap-2 mt-2 ">
              {item.colors.map((color, idx) => (
                <div
                  style={{ backgroundColor: color.hex }}
                  key={idx + 200}
                  className={`w-5 aspect-square rounded-full cursor-pointer`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditResume