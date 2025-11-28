import { features } from "../../constants";

const WhyChooseUsSection = () => {
  return (
    <div className="w-full">
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-15">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Why Build Your Resume With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the tools and guidance you need to create a
              professional resume that gets results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-4 md:gap-6 lg:gap-8 gap-y-2 ">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-5 bg-white rounded-xl hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-102 border border-neutral-200 shadow lg:p-10"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                  <h3 className="mt-4 md:mt-2  text-lg font-semibold text-gray-900 text-center">
                    {item.title}
                  </h3>
                  <p className="mt-2 md:mt-1 text-sm text-center text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsSection;
