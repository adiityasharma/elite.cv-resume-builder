import { useNavigate } from "react-router-dom";

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden bg-white group">
      <div className="relative h-full bg-gray-100 flex items-center justify-center">
        <div className="text-gray-400 text-sm italic">
          <img src={template.image} alt="" />
        </div>

        <div
          onClick={() => navigate(`/build/final-resume/${template.id}`)}
          className="absolute inset-0 bg-black/30  flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <button className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-150 shadow-md mb-3 cursor-pointer">
            Select Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
