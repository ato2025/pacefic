import ServicesAirPlaneIcon from "@/Components/Icons/ServicesAirPlaneIcon/ServicesAirPlaneIcon";
import ServicesShipBoxIcon from "@/Components/Icons/ServicesShipBoxIcon/ServicesShipBoxIcon";
import ServicesTruckIcon from "@/Components/Icons/ServicesTruckIcon/ServicesTruckIcon";
import SevicesChevDown from "@/Components/Icons/sevicesChevDown/sevicesChevDown";
import SevicesChevUp from "@/Components/Icons/sevicesChevUp/sevicesChevUp";
import React, { ReactNode, useState } from "react";
import ServicesTitleBox from "./ServicesTitleBox/ServicesTitleBox";
import WarningIcon from "@/Components/Icons/WarningIcon/WarningIcon";
import { useAppSelector } from "@/Store/StoreConfigs";

type boxes = {
  id: number;
  icon: ReactNode;
  coloredBg: boolean;
  desc: string;
  title: string;
};

type props = {
  title: string;
  boxes: boxes[];
  description: string;
  warningDescription: string;
  subTitle?:string
};

function ServicesBoxItem({
  boxes,
  description,
  title,
  warningDescription,
  subTitle
}: props) {
  const [isShowItems, setISshowItems] = useState(false);
  const {theme}=useAppSelector(state=>state.theme)
  return (
    <>
    <div className="my-8">
      <div className="flex justify-start items-center gap-4 lg:gap-8 mb-5">
        {isShowItems ? (
          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => {
              setISshowItems((prev) => !prev);
            }}
          >
            <SevicesChevUp />
          </div>
        ) : (
          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => {
              setISshowItems((prev) => !prev);
            }}
          >
            <SevicesChevDown />
          </div>
        )}
<div>
        <div className=" text-lg lg:text-4xl">{title}</div>
        <div className="text-gray-500 text-base lg:text-2xl"> {subTitle} </div>
</div>
      </div>
      <div className={`${isShowItems ? 'h-fit':'h-0'} overflow-hidden t07`}>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 lg:gap-12 ">
          {boxes?.map((item) => (
            <ServicesTitleBox
              key={item.id}
              coloredBg={item.coloredBg}
              desc={item.desc}
              icon={item.icon}
              title={item.title}
              
            />
          ))}
        </div>
        <p className="text-white text-base lg:text-3xl mt-4">{description}</p>

        {warningDescription && (
          <div className="warningBoxItem flex justify-center w-full items-start  mt-5 border border-white rounded-lg px-4 lg:px-10 py-2 lg:py-5 mb-5">
            <div>
              <WarningIcon className="lg:w-12 lg:h-12 w-7 h-7" />
            </div>

            <p className="text-white text-base lg:text-2xl">
              {warningDescription}
            </p>
          </div>
        )}
      </div>
      </div>
    </>
  );
}

export default ServicesBoxItem;
