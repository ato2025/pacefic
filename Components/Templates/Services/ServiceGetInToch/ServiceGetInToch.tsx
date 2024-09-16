import React from "react";
import GetInTochBox from "../../Home/Components/GetInTochBox/GetInTochBox";
import RedirectIcon from "@/Components/Icons/RedirectIcon/RedirectIcon";
import { useAppSelector } from "@/Store/StoreConfigs";
const Map = dynamic(() => import("../../Home/Components/Map/Map"), {
  ssr: false,
});

import dynamic from "next/dynamic";
import ClockIcon from "@/Components/Icons/ClockIcon/ClockIcon";

function ServiceGetInToch() {
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div className="grid grid-cols-8 px-4 lg:px-24">
      <div className="col-span-8 lg:col-span-3">
        <GetInTochBox />
      </div>
      <div className="col-span-8 lg:col-span-1 lg:pt-12 flex justify-center lg:block">
        <img src="./home/redirect.png" className="hidden lg:!block" alt="" />
        <img src="./home/redirectUp.png" className=" lg:!hidden" alt="" />
      </div>

      <div className="col-span-8 lg:col-span-4">
        <div className="text-3xl text-textPrimary mb-10">
        Contact us today to explore how we can align with and support your business objectives. We're here to provide tailored solutions that optimize your logistics operations and drive your
business forward.
        </div>
        <div
          className={`${
            theme == "dark" ? "bg-modalBg darkBorder" : "bg-[#DED6FF] border-mainPurple"
          } rounded-2xl  p-6 border shadow-md shadow-[#ffffff68] flex justify-center items-center flex-col`}
        >
          <div className="border-b-4 border-mainPurple px-6 text-2xl py-2 ">
            Our Loacation
          </div>
          <div className="w-full h-[30vh] rounded-xl overflow-hidden my-10">
            <Map />
          </div>
          <div className="border-b-4 border-mainPurple px-6 text-2xl py-2 ">
            Work Hours
          </div>

          <div className="px-6 text-2xl py-2  flex justify-center items-center gap-4 my-5">
            <ClockIcon/>
            <div>9 AM - 5 PM , Monday - Saturday</div>
          </div>
          <div className="px-6 text-2xl py-2 flex justify-center items-center">
          Pacific is always ready to answer and advise customers.
          </div>




        </div>
      </div>
    </div>
  );
}

export default ServiceGetInToch;
