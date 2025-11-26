import { useDispatch, useSelector } from "react-redux";
import { ResumeTemplates } from "../../resume-templates";
import { updateDesign } from "../../app/features/resumeData";

const AllTemplatePreview = () => {
  const dispatch = useDispatch();
  const { design } = useSelector((state) => state.resumeData);

  return (
    <div className="w-full flex flex-col gap-2 ">
      <div className="flex flex-col gap-2">
        <div className=" flex items-center justify-between font-semibold">
          <h1 className="text-sm font-semibold">Templates</h1>
        </div>
        <div className="w-full h-[490px] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-1 customScrollbar overflow-auto">
          {ResumeTemplates.map((resume) => (
            <div
              onClick={() => dispatch(updateDesign({ template: resume.id }))}
              key={resume.id}
              className={`w-full h-[200px] border-3 cursor-pointer transition-colors duration-300 ${
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
