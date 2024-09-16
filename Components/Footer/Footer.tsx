import { useAppSelector } from "@/Store/StoreConfigs";
import React from "react";
import LogoSvgCode from "../Icons/LogoSvgCode/LogoSvgCode";
import Link from "next/link";
import LocationIcon from "../Icons/LocationIcon/LocationIcon";
import PhoneIcon from "../Icons/PhoneIcon/PhoneIcon";
import MailIcon from "../Icons/MailIcon/MailIcon";

function Footer() {
  const { logIn } = useAppSelector((state) => state.auth);
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <div>
      {logIn ? (
        <div></div>
      ) : (
        <div
          className={`${theme == "light" ? "bg-[#23272E]" : "bg-[#212122]"}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 w-[85%] mx-auto py-10 text-white">
            <div className="col-span-1 hidden lg:flex flex-col justify-center items-center w-[60%] gap-5">
              {theme == "dark" ? (
                <img src="./darkLogo.png" className="w-[70px]" alt="" />
              ) : (
                <img src="./lightLogo.png" className="w-[70px]" alt="" />
              )}
              <p className="text-base text-white">
                We are a shipping company specializing in maritime
                transportation, containerized cargo handling, intermodal
                transport, and integrated logistics solutions. Our team brings
                extensive industry expertise and a strong commitment to
                operational excellence.
              </p>
            </div>

            <div className="col-span-1 lg:col-span-2 grid grid-cols-1 gap-8 lg:gap-0 lg:grid-cols-2 ">
              <div className="col-span-1 flex justify-center items-start flex-col  lg:pt-10">
                <div className="w-[50%]">
                  <div className="text-mainPurple border-b-2 border-mainPurple flex justify-center items-center  py-2 text-2xl w-full">
                    Links
                  </div>
                </div>
                <div className="grid grid-cols-2 ">
                  <div className="flex flex-col gap-2 mt-4 ms-auto">
                    <Link className="text-nowrap" href={"/About-us"}>
                      About Us
                    </Link>
                    <Link className="text-nowrap" href={"/Services"}>
                      Our Service
                    </Link>
                    <Link className="text-nowrap" href={""}>
                      New Request
                    </Link>
                    <Link className="text-nowrap" href={"/Contact-us"}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex justify-center items-start flex-col lg:pt-10">
                <div className="w-[50%]">
                  <div className="text-mainPurple border-b-2 border-mainPurple flex justify-center items-center  py-2 text-2xl w-full">
                    Contact Info
                  </div>
                </div>
                {/* <div className="flex justify-start w-full gap-3 items-center my-3 ">
                  <LocationIcon />
                  <div>
                    FLAT 721, 7/F, LIVEN HOUSE, NO. 61-63 KING YIP STREET, KWUN
                    TONG, HONG KONG
                  </div>
                </div> */}
                {/* <div className="flex justify-start w-full gap-3 items-center my-3 ">
                  <PhoneIcon />
                  <div>(+65) 64919201</div>
                </div> */}
                <div className="flex justify-start w-full gap-3 items-center my-3">
                  <MailIcon />
                  <div>inquiry@pacificshippinglines.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 px-10 lg:w-[90%] mx-auto">
            <div className="text-white">
              ©2024 Pacific. All rights reserved
            </div>
            <div className="text-textSecondary my-4 lg:mt-0">
            Pacific Lines Ltd.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
