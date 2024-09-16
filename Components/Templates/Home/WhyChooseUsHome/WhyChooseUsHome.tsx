import React from "react";
import WhyChooseUsHomeBox from "../Components/WhyChooseUsHomeBox/WhyChooseUsHomeBox";
import { useAppSelector } from "@/Store/StoreConfigs";
import HowItWorksIcon from "@/Components/Icons/HowItWorksIcon/HowItWorksIcon";

function WhyChooseUsHome() {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <>
     <div className="flex flex-col justify-center items-center py-8 mt-8 homeGetOurService2 relative ">
        <div className="w-[20%] h-1 bg-mainPurple my-5"></div>
        <div
          className={`text-2xl lg:text-5xl mb-5 ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          Why Choose Us ?
        </div>
        <HowItWorksIcon />
      </div>
      <div className="w-[85%] mx-auto py-10">
     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10">
        <WhyChooseUsHomeBox
          itemNumber={1}
          subTitle=" We prioritize reliability and consistency in every aspect of our
     operations. Your cargo will be handled with care and delivered on
     schedule."
          title="Dependable Service:"
        />

        <WhyChooseUsHomeBox
          itemNumber={2}
          subTitle="Our approach is straightforward: we provide solutions that meet your needs without unnecessary frills or inflated promises."
          title="Tailored Solutions:"
        />
        <WhyChooseUsHomeBox
          itemNumber={3}
          subTitle="We aim to meet your expectations without excessive fanfare. Our focus is on delivering results and building trust."
          title="Customer satisfaction:"
        />
        <WhyChooseUsHomeBox
          itemNumber={4}
          subTitle=" While we strive to improve, we don't claim to have all the answers. We welcome feedback and are committed to evolving our services based on your input."
          title="Continuous Improvement:"
        />
      </div>
    </div>
    </>
    
  );
}

export default WhyChooseUsHome;
