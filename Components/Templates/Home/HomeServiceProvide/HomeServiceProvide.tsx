import React, { useEffect, useState } from "react";
import HomeServiceProvideItem from "../Components/HomeServiceProvideItem/HomeServiceProvideItem";
import HowItWorksIcon from "@/Components/Icons/HowItWorksIcon/HowItWorksIcon";
import { serviceProvideTexts } from "@/Utils/AllInfosArrays";
import { useAppSelector } from "@/Store/StoreConfigs";

function HomeServiceProvide() {
  const [selectedBox, setSelectedBox] = useState(1);
  const [height, setHeight] = useState("top-0");
  const { theme } = useAppSelector((state) => state.theme);
  useEffect(() => {
    if (selectedBox == 1) {
      setHeight("top-0");
    } else if (selectedBox == 2) {
      setHeight("top-[100px]");
    } else if (selectedBox == 3) {
      setHeight("top-[200px]");
    } else if (selectedBox == 4) {
      setHeight("top-[300px]");
    }
  }, [selectedBox]);

  return (
    <div className="galaxyBg mt-4 md:mt-8 lg:mt-16">


    <div className="flex flex-col justify-center items-center py-8 mt-8 homeGetOurService1 relative my-20">
        <div className="w-[20%] h-1 bg-mainPurple my-5"></div>
        <div
          className={`text-2xl lg:text-5xl mb-5 ${
            theme == "dark" ? "text-white" : "text-black"
          }`}
        >
          Our Services
        </div>
        <HowItWorksIcon />
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="movingBoxes h-[500px] w-[80%] lg:w-[500px]  relative ms-[10vw]">
          <HomeServiceProvideItem
            itemNumber={1}
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            title="Maritime Transportation"
          />
          <HomeServiceProvideItem
            itemNumber={2}
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            title="Containerized Cargo Handling"
          />
          <HomeServiceProvideItem
            itemNumber={3}
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            title="Intermodal Transport"
          />
          <HomeServiceProvideItem
            itemNumber={4}
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            title="Integrated Logistics Solutions"
          />

          {/* <div
            className={`absolute ${height} left-0 border-b-2 border-mainPurple w-full h-[100px] t07 flex justify-start items-center ps-2 `}
          >
            <div className="w-[30px] h-[30px]  lg:h-[60px] lg:w-[60px] bg-mainPurple rounded-lg text-white flex justify-center items-center text-lg lg:text-2xl">
              {selectedBox}
            </div>
          </div> */}
        </div>
        <div className="lg:!flex justify-center items-center hidden relative">
          <div className="bg-[#07070787] border border-[#ffffffa4] w-[50%] text-xl lg:text-3xl p-10 z-40 rounded-lg text-white">
            {serviceProvideTexts[selectedBox - 1]}
          </div>
          <div className="absolute w-[50%] h-full right-32 top-0 ">
            <img
              src="./home/serviceProvide.png"
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeServiceProvide;
