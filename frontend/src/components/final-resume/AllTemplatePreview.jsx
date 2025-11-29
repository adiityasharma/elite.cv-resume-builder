import { useDispatch, useSelector } from "react-redux";
import { ResumeTemplates } from "../../resume-templates";
import { updateDesign } from "../../app/features/resumeData";
import { useNavigate, useParams } from "react-router-dom";

const AllTemplatePreview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { design } = useSelector((state) => state.resumeData);
  const clickHandler = (id) => {
    navigate(`/build/final-resume/${id}`);
    dispatch(updateDesign({ template: id }));
  };

  return (
    <div className="w-full flex flex-col gap-2 ">
      <div className="flex flex-col gap-2">
        <div className=" flex items-center justify-between font-semibold">
          <h1 className="text-sm font-semibold">Templates</h1>
        </div>
        <div className="w-full h-[490px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-1 customScrollbar overflow-auto pb-20 sm:pb-0">
          {ResumeTemplates.map((resume) => (
            <div
              onClick={() => clickHandler(resume.id)}
              key={resume.id}
              className={`w-full h-fit border-3 cursor-pointer transition-colors duration-300 ${
                design.template === resume.id
                  ? "border-blue-500"
                  : "border-neutral-300"
              } `}
            >
              <div className="relative overflow-hidden w-full h-full ">
                <img
                  alt="resume-image"
                  className="w-full h-full "
                  src={resume?.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTemplatePreview;
