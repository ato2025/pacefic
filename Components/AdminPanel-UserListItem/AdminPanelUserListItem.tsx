import React, { useState } from "react";
import Ellipsis3 from "../Icons/Ellipsis3/Ellipsis3";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import BlAdminDetailModal from "../BlAdminDetailModal/BlAdminDetailModal";
import EyeIcon from "../Icons/EyeIcon/EyeIcon";
import DownloadIcon from "../Icons/DownloadIcon/DownloadIcon";
import UserListBLsModalItem from "../UserListBLsModalItem/UserListBLsModalItem";
import { BlinfoUserSummary } from "@/Types/RecivedBlType";


type props= {
  Id?: number
  FullName: string
  Email: string
  Company?: string
  JobTitle?: string
  BlinfoUserSummaryDTOs:[]
}


function AdminPanelUserListItem({Email,FullName,BlinfoUserSummaryDTOs}:props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const showMoreInfos = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="!overflow-x-hidden">
        <div className="w-full h-[7vh] flex justify-around items-center bg-slate-500 my-3 font-semibold text-stone-300">
          <div className="fCenter">{FullName}</div>
          <div className="fCenter w-1/5">{Email}</div>
          <div className=" hidden md:!flex justify-center items-center pe-10">
            <div
              className="flex justify-center items-center  cp w-fit h-fit"
              onClick={showMoreInfos}
            >
              <EyeIcon />
            </div>
          </div>
        </div>

        <div
          className={`w-[50%] h-[50%] bg-slate-600 fixed  overflow-x-hidden rounded-lg overflow-y-auto  top-[25%]  z-10  t07 ${
            showModal ? "left-[25%] opacity-100" : "left-full opacity-0"
          } `}
        >
          <div className="w-full h-full relative">
            <div className="flex justify-end items-center px-4 pt-3">
              <div
                className="text-white font-semibold w-fit h-fit cp z-10"
                onClick={showMoreInfos}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="absolute hidden lg:!block w-1/2 h-full top-0 right-0">
              <img src="./../boat2.jpg" className="w-full h-full" alt="" />
            </div>

            <div className="w-full h-full overflow-y-auto px-4  grid grid-cols-1 lg:grid-cols-2 ">
              <div>
                
                <div className="w-full flex justify-between items-center px-2 font-semibold">
                  <div>Bl Number</div>
                  <div>Download PDF</div>
                </div>
                
                {
                  BlinfoUserSummaryDTOs.map((item:BlinfoUserSummary,index)=>(
                    <UserListBLsModalItem key={index} {...item} />
                  ))
                }

              


              </div>
              <div className="w-full h-full hidden lg:!block"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPanelUserListItem;
