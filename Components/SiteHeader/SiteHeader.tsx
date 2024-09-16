import React, { useEffect, useRef, useState } from "react";
import LogoSvgCode from "../Icons/LogoSvgCode/LogoSvgCode";
import BarsIcon from "../Icons/BarsIcon/BarsIcon";
import { ThemeChanger } from "@/Hooks/useTheme/useTheme";
import { useAppSelector } from "@/Store/StoreConfigs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import {
  setOpenModal,
  setRegistrationState,
} from "@/Store/Slices/Register/RegisterSlice";
import { setLogging } from "@/Store/Slices/Auth/AuthSlice";

function SiteHeader() {
  const [showMoibleNav, setShowMobileNav] = useState<boolean>(false);
  const [pageOffset, setPageOffset] = useState<number | undefined>();
  const { logIn } = useAppSelector((state) => state.auth);
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setPageOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    const storedData = localStorage.getItem("token");

    storedData && dispatch(setLogging({ state: true }));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const registerBtnHandler = () => {
    dispatch(setOpenModal());
    dispatch(setRegistrationState({ item: "Login" }));
  };

  return (
    <>
      {logIn ? (
        <div></div>
      ) : (
        <div
          className={`sticky w-full h-fit top-0 z-[9999] left-0 bg-white `}
        >
          <div className="mainHeader flex justify-between items-center px-5 lg:px-28 py-6 h-[112px] relative">
            {/* <LogoSvgCode /> */}
            <img src="./llogo.png" className="w-[58px] h-[70px]" alt="" />
            {/* {
              theme == 'dark' ?<img src="./darkLogo.png" className="w-[70px]" alt="" /> :<img src="./lightLogo.png" className="w-[70px]" alt="" />
            } */}
            
            <div className=" hidden lg:!flex justify-center items-center gap-6">
              <Link
                href={"/"}
                className={`${
                  router.pathname == "/"
                    ? "text-black font-bold"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05`}
              >
                Home
              </Link>
              <Link
                href={"/About-us"}
                className={`${
                  router.pathname == "/About-us"
                    ? "text-black font-bold"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05`}
              >
                About
              </Link>
              <Link
                href={"/Services"}
                className={`${
                  router.pathname == "/Services"
                    ? "text-black font-bold"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05`}
              >
                Services
              </Link>
              <Link
                href={"/Contact-us"}
                className={`${
                  router.pathname == "/Contact-us"
                    ? "text-black font-bold"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05`}
              >
                Contact
              </Link>
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="h-10 w-10 rounded-lg p-2 flex lg:!hidden justify-center items-center text-white">
                <div
                  className="w-fit h-fit cursor-pointer"
                  onClick={() => {
                    setShowMobileNav((prev) => !prev);
                  }}
                >
                  <BarsIcon />
                </div>
              </div>
              <div className="h-10 w-10 rounded-lg p-2 flex justify-center items-center bg-white">
                <ThemeChanger />
              </div>

              <div
                className="py-2 px-5 rounded-2xl bg-mainPurple text-white cursor-pointer ms-6 text-nowrap hover:bg-hoverColor t05"
                onClick={registerBtnHandler}
              >
                Login / Sign Up
              </div>
            </div>

            <div
              className={`mobileNavbarItems absolute ${
                showMoibleNav ? " left-0" : "left-[-100vw]"
              } flex flex-col bg-modalBg t07 top-[12vh] bg-slate-300 w-full`}
            >
              <Link
                href={"/"}
                className={`${
                  router.pathname == "/"
                    ? "text-textPrimary"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05 flex justify-center items-center`}
              >
                Home
              </Link>
              <Link
                href={"/About-us"}
                className={`${
                  router.pathname == "/About-us"
                    ? "text-textPrimary"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05 flex justify-center items-center`}
              >
                About
              </Link>
              <Link
                href={"/Services"}
                className={`${
                  router.pathname == "/Services"
                    ? "text-textPrimary"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05 flex justify-center items-center`}
              >
                Service
              </Link>
              <Link
                href={"/Contact-us"}
                className={`${
                  router.pathname == "/Contact-us"
                    ? "text-textPrimary"
                    : "text-colorDisable"
                } text-2xl hover:text-textPrimary t05 flex justify-center items-center`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SiteHeader;
