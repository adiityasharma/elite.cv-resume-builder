import React from 'react'
import Sidebar from '../components/final-resume/Sidebar'
import TemplateBar from '../components/final-resume/TemplateBar';

const FinalResume = () => {
  return (
    <div className="w-full min-h-screen flex justify-between">
      <div className='flex gap-5 items-start '>
        <Sidebar />
        <TemplateBar />
      </div>
    </div>
  );
}

export default FinalResume