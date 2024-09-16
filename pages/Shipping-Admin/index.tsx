import AdminHeader from "@/Components/AdminHeader/AdminHeader";
import AdminSideBar from "@/Components/AdminSideBar/AdminSideBar";
import AdminTrackingIcon from "@/Components/Icons/AdminTrackingIcon/AdminTrackingIcon";
import AllBlsIcon from "@/Components/Icons/AllBlsIcon/AllBlsIcon";
import CreateNewBlIcon from "@/Components/Icons/CreateNewBlIcon/CreateNewBlIcon";
import ImageIcon from "@/Components/Icons/ImageIcon/ImageIcon";
import RecivedRequests from "@/Components/Icons/RecivedRequestsIcon/RecivedRequests";
import UsersIcon from "@/Components/Icons/UsersIcon/UsersIcon";
import { setOpenItem } from "@/Store/Slices/NavBar/NavbarSlice";
import {
  setOpenModal,
  setRegistrationState,
} from "@/Store/Slices/Register/RegisterSlice";
import { useAppDispatch } from "@/Store/StoreConfigs";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";
type Props = {
  children: ReactNode;
};
function ShippingAdminPanel({ children }: Props) {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isShowPage, setIsShowPage] = useState<boolean>(false);

  const adminPanelSideBarItem = [
    { title: "Users", icon: <UsersIcon />, href: "/Shipping-Admin/users" },
    {
      title: "Recived BL Requests",
      icon: <RecivedRequests />,
      href: "/Shipping-Admin/recived-requests",
    },
    { title: "All BLs", icon: <AllBlsIcon />, href: "/Shipping-Admin/all-bls" },
    {
      title: "Create New BL",
      icon: <CreateNewBlIcon />,
      href: "/Shipping-Admin/create-new-bl",
    },
    {
      title: "Tracking",
      icon: <AdminTrackingIcon />,
      href: "/Shipping-Admin/admin-panel-tracking",
    },
    {
      title: "Upload Bl Scan",
      icon: <ImageIcon />,
      href: "/Shipping-Admin/UploadScannedBl",
    },
  ];

  useEffect(() => {
    //  dispatch(changeTheme())
    const menuItem = router.pathname;
    adminPanelSideBarItem.forEach((itemm) => {
      if (itemm.href == menuItem) {
        dispatch(setOpenItem({ item: itemm.title }));
      }
    });

    const showPageFlg = localStorage.getItem("token");
    showPageFlg ? setIsShowPage(true) : setIsShowPage(false);


  }, []);

  const registerBtnHandler = () => {
    router.push("/");
    dispatch(setOpenModal());
    dispatch(setRegistrationState({ item: "Login" }));
  };

  return (
    <>
      {isShowPage ? (
        <div className="w-full h-[100vh] relative bg-BGseconday">
          <AdminHeader />
          <div className="w-full h-[93vh]  grid grid-cols-12 lg:grid-cols-24">
            <AdminSideBar
              openSideBar={openSideBar}
              setOpenSideBar={setOpenSideBar}
              menuItems={adminPanelSideBarItem}
            />
            <div
              className={`${
                openSideBar
                  ? "col-span-9 lg:col-span-21"
                  : "col-span-11 lg:col-span-23"
              } h-[93vh] overflow-y-auto`}
            >
              {children}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[90vh] bg-slate-800 flex justify-center items-center flex-col">
          <div className="text-3xl">Please Log in</div>
          <div>
            <button
              className="bg-blue-600 px-4 py-2 rounded-lg mt-8"
              onClick={registerBtnHandler}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ShippingAdminPanel;
