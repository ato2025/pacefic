import { useAppSelector } from "@/Store/StoreConfigs";
import React, { ReactNode } from "react";

type props ={
id:number
title:string
desc:string
   icon:ReactNode
}


function HomeServicesItem({desc,icon,id,title}:props) {
  const {theme}=useAppSelector(state=>state.theme)
  return (
    <div className="flex justify-center items-start  lg:ps-10 w-full flex-col gap-3 my-5">
      {icon}
      <div className="text-mainPurple text-2xl font-semibold">{title} </div>
      <p className={`w-2/3 text-base ${theme=='dark' ? "text-white" :"text-black"}  h-[150px] overflow-y-auto  leading-6 text-justify`}>
       {desc}
      </p>
    </div>
  );
}

export default HomeServicesItem;
