import ChevUpRightIcon from "@/Components/Icons/ChevUpRightIcon/ChevUpRightIcon";
import React from "react";

type props = {
  showBg: boolean;
};

function HomeGetInToch({ showBg }: props) {
  return (
    <div className={`${showBg && "bg-modalBg border-t border-b border-white"}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[85%] mx-auto ">
        <div className="flex justify-center items-start gap-8 py-20 flex-col w-[60%]">
          <div className="text-5xl ">Get in touch</div>
          <p className="text-xl text-textSecondary">
            Interested in our professional shipping and logistics solutions?
            Contact us today to discuss how we can support your business
            objectives. We're here to help streamline your operations and meet
            your shipping needs effectively.
          </p>
          <button className="flex justify-center items-center text-white px-8 hover:bg-hoverColor py-4 bg-mainPurple rounded-lg">
            Get Started now
            <ChevUpRightIcon />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <img src="./home/china.png" className="w-[80%] h-[80%]" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeGetInToch;
