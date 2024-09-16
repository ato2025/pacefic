import MinusIcon from "@/Components/Icons/MinusIcon/MinusIcon";
import PlusIcon from "@/Components/Icons/PlusIcon/PlusIcon";
import { useAppSelector } from "@/Store/StoreConfigs";
import React from "react";

type props = {
   selectedBox:number
   setSelectedBox:(e:number)=>void
   item:number 
   title:string
   desc:string
}


function ContainerBoxItem({selectedBox,setSelectedBox,desc,item,title}:props) {

  const {theme}=useAppSelector(state=>state.theme)

  return (
    
      <div className={`px-4 py-4 w-full ${theme == 'dark' ? "bg-modalBg" :"bg-transparent !border-mainPurple"}  rounded-2xl t07   border-white border shadow-md cursor-pointer`} onClick={() => {
        setSelectedBox(item)
     }}>
        <div
          className={`flex justify-between items-center t07 ${
            selectedBox == item ? "mb-10" : "mb-4"
          } mt-5 `}
        >
          <div className={`text-2xl ${theme =='dark' ? "text-white" :"text-black"} `}>
            {title}
          </div>
          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => {
               setSelectedBox(item)
            }}
          >
            {selectedBox == item ? <MinusIcon /> : <PlusIcon />}
          </div>
        </div>
        <p
          className={`text-[#D4D6D9] ${theme == 'dark'?"text-[#D4D6D9]":"text-black"} text-lg t07 ${
            selectedBox == item ? "h-[230px] md:h-[135px]" : "h-1"
          } overflow-hidden `}
        >
          {desc}
        </p>
      </div>

  );
}

export default ContainerBoxItem;
