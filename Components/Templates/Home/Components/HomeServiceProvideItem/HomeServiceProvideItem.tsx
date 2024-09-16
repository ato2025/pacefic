import CloseIcon from "@/Components/Icons/CloseIcon/CloseIcon";
import { serviceProvideTexts } from "@/Utils/AllInfosArrays";
import React, { useState } from "react";

type props = {
  selectedBox: number;
  setSelectedBox: (e: number) => void;
  itemNumber: number;
  title: string;
};

function HomeServiceProvideItem({
  selectedBox,
  setSelectedBox,
  itemNumber,
  title,
}: props) {
  const [isShowModal, setIsShowModal] = useState(false);

  return (
    <>
      {/* <div
      className={`h-[100px] w-full  flex justify-start items-center text-lg  text-nowrap lg:text-3xl  ${
        selectedBox == itemNumber
          ? "lg:ps-[75px] px-[50px]"
          : "lg:px-[10px] px-[10px]"
      }  cursor-pointer t07 relative`}
      // onClick={() => {
      //   setSelectedBox(itemNumber);
      // }}
      onMouseEnter={()=>{setSelectedBox(itemNumber)}}
    >
      {title}
      {selectedBox == itemNumber && (
        <button className="text-xs absolute right-[-30px] bottom-3 z-50 bg-modalBg px-2 py-2 rounded-md lg:hidden text-white" onClick={()=>{setIsShowModal(true)}}>
          Read More
        </button>
      )}


{
  isShowModal && (
    <div className="absolute w-[100%] top-[101px] left-0 bg-modalBg h-[300px] rounded-lg overflow-hidden z-20 text-white">
    <div className="flex justify-end items-center p-2 !text-wrap"><div className="w-fit h-fit" onClick={()=>{setIsShowModal(false)}}><CloseIcon/></div></div>
    <p className="px-4 !text-wrap text-white">
    {
      serviceProvideTexts[itemNumber-1]
    }
    </p>
  </div>
  )
}

    </div> */}

      <div
        className={`h-[100px] w-full  flex justify-start items-center text-lg  text-nowrap lg:text-3xl cursor-pointer t07 relative`}
        onMouseEnter={() => {
          setSelectedBox(itemNumber);
        }}
      >
        <div className="flex justify-start items-center gap-4 ">
          <div className="flex flex-col justify-center items-center gap-2">
            
          
            <div className={` ${itemNumber ==selectedBox ? 'text-white':" bg-white text-mainPurple"} t07 rounded-full w-12 md:w-14 lg:w-14 h-12 md:h-14 lg:h-14  relative flex justify-center items-center  z-[2]`}>
              <div className={`  absolute left-[40%] top-[-80%] rounded-full ${itemNumber ==selectedBox ? 'bg-mainPurple w-full h-full !left-0 !top-0':"h-1 w-1"} t07  z-[-1]`}></div>
              {itemNumber}
            </div>
            {
             ( itemNumber !==4) && (
              <>
                <div className="w-1 h-5 bg-mainPurple"></div>
            <div className="w-1 h-5 bg-mainPurple"></div>
              </>
             )
            }
          </div>
          <div className="flex justify-center self-start pt-3">
          {title}
          </div>
        </div>
        {selectedBox == itemNumber && (
          <button
            className="text-xs absolute right-[-30px] bottom-3 z-50 bg-modalBg px-2 py-2 rounded-md lg:hidden text-white"
            onClick={() => {
              setIsShowModal(true);
            }}
          >
            Read More
          </button>
        )}

        {isShowModal && (
          <div className="absolute w-[100%] top-[101px] left-0 bg-modalBg h-[300px] rounded-lg overflow-hidden z-20 text-white">
            <div className="flex justify-end items-center p-2 !text-wrap">
              <div
                className="w-fit h-fit"
                onClick={() => {
                  setIsShowModal(false);
                }}
              >
                <CloseIcon />
              </div>
            </div>
            <p className="px-4 !text-wrap text-white">
              {serviceProvideTexts[itemNumber - 1]}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default HomeServiceProvideItem;
