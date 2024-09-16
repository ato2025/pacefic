import React from 'react'
import { useAppSelector } from "@/Store/StoreConfigs";


type props={
   title:string
   subTitle:string 
   itemNumber:number

}

function WhyChooseUsHomeBox({itemNumber,subTitle,title}:props) {

   const { theme } = useAppSelector((state) => state.theme);
  return (
   <div
   className={`${
     theme == "dark" ? "bg-modalBg darkBorder" : "bg-transparent lightBorder"
   } rounded-2xl  p-6 border  col-span-1 flex justify-center items-start gap-8 py-10 flex-col`}
 >
   <div className="text-mainPurple text-5xl">0{itemNumber}</div>
   <div className={`${theme == 'dark' ?'text-white':'text-black'} text-4xl`}>{title} </div>
   <p className="text-textSecondary text-justify text-2xl !font-light">
    {subTitle}
   </p>
 </div>
  )
}

export default WhyChooseUsHomeBox