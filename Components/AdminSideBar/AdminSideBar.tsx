import Link from "next/link";
import ChevLeft from "../Icons/ChevLeft/ChevLeft";
import ChevRight from "../Icons/ChevRight/ChevRight";
import UsersIcon from "../Icons/UsersIcon/UsersIcon";
import RecivedRequests from "../Icons/RecivedRequestsIcon/RecivedRequests";
import AllBlsIcon from "../Icons/AllBlsIcon/AllBlsIcon";
import CreateNewBlIcon from "../Icons/CreateNewBlIcon/CreateNewBlIcon";
import AdminTrackingIcon from "../Icons/AdminTrackingIcon/AdminTrackingIcon";
import { ReactNode, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Store/StoreConfigs";
import { setOpenItem } from "@/Store/Slices/NavBar/NavbarSlice";
import { setBlItem } from "@/Store/Slices/NewBlGebInfos/NewBlGebInfos";

type menuItems={
   title:string
   icon:ReactNode
   href:string
}

type Props = {
  openSideBar: boolean;
  setOpenSideBar: (isOpen: boolean) => void;
  // openedChild: string;
  // setOpendChild: (openeChildName: string) => void;
  menuItems:menuItems[]
};

function AdminSideBar({ openSideBar, setOpenSideBar,menuItems }: Props) {
  const openedChild = useAppSelector(dAta=>dAta.navbarItem.openedItem)
  const dispatch = useAppDispatch()

  return (
    <>
      <div
        className={`${
          openSideBar ? "col-span-3 lg:col-span-3" : "col-span-1 lg:col-span-1"
        }  bg-BGprimary relative `}
      >
        <div
          className={`absolute w-fit h-fit p-1 text-white rounded-full bg-gray-800 ${
            openSideBar ? "right-[-7%]" : "right-[-15%]"
          }  border border-[#ffffffa8] cp`}
          onClick={() => {
            setOpenSideBar(!openSideBar);
          }}
        >
          {openSideBar ? <ChevLeft /> : <ChevRight />}
        </div>

        <div className="pt-10">
          {menuItems.map((item, index) => (
            <div
              className={`group  relative flex ${
                openSideBar ? "justify-start px-4" : "justify-center"
              }  items-center w-full my-8`}
              key={index}
            >
              <Link
                href={item.href}
                className={`${item.title == openedChild ? 'text-blue-500':'text-white'}  hover:text-blue-500 `}
                onClick={()=>{
                  if(item.title == "Create New BL"){
                    dispatch(setBlItem({type:"RequestBLId",payload:''}))
                  }
                  dispatch(setOpenItem({item:item.title}))
                }}
              >
                {!openSideBar ? (
                  item.icon
                ) : (
                  <div className="flex justify-start items-center gap-2 w-full">
                    <div>{item.icon}</div>
                    <div className=" truncate w-[40%] lg:w-[60%] xl:[80%] 2xl:w-[95%]">{item.title}</div>
                  </div>
                )}
              </Link>
              <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-100 text-black text-xs rounded-md p-1 absolute z-10 top-1/2 left-full -translate-y-1/2 transform pointer-events-none text-nowrap">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminSideBar;
