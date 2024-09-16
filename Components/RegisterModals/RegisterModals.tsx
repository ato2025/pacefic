import React, { MouseEventHandler } from "react";
import { useAppSelector } from "@/Store/StoreConfigs";
import { useDispatch } from "react-redux";
import { setOpenModal } from "@/Store/Slices/Register/RegisterSlice";
import LoginModal from "../Templates/SiteModals/Login/LoginModal";
import RegisterFirstStep from "../Templates/SiteModals/RegisterFirstStep/RegisterFirstStep";
import VerifyCodeModal from "../Templates/SiteModals/VerifyCodeModal/VerifyCodeModal";
import BasicInfosModal from "../Templates/SiteModals/BasicInfosModal/BasicInfosModal";
import EnterPasswordModal from "../Templates/SiteModals/EnterPasswordModal/EnterPasswordModal";

function RegisterModals() {
  
  const { isOpenModal,registrationState } = useAppSelector((state) => state.registeration);
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(setOpenModal());
  };
  const reventPropgation: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpenModal && (
        <div
          className="fixed w-full h-[100vh] left-0 top-0 navbarBgModal flex justify-center items-center z-[99991]"
          onClick={closeModalHandler}
          onScroll={(e)=>{e.preventDefault()}}
        >
          <div className="w-full h-full relative">
            <div className="w-fit h-fit" onClick={reventPropgation}>
              {
                registrationState == 'Login' &&  <LoginModal/>
              }
              {
                registrationState == 'RegisterFirstStep' &&  <RegisterFirstStep />
              }
               {
                registrationState == 'VerifyCodeModal' && <VerifyCodeModal />
              }
              {
                registrationState == 'BasicInfosModal' && <BasicInfosModal/>
              } 
               {
                registrationState == 'EnterPasswordModal' && <EnterPasswordModal/>
              }

            
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterModals;
