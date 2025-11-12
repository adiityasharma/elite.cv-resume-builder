import { features } from "../../constants";

const WhyChooseUsSection = () => {
  return (
    <div className="w-full ">
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Why Build Your Resume With Us?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the tools and guidance you need to create a
              professional resume that gets results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-5 ">
            {features.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center p-10 rounded-xl bg-white/20 backdrop-blur-2xl hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
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
