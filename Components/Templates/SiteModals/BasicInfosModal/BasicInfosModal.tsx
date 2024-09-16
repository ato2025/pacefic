import CustomInput from "@/Components/CustomInput/CustomInput";
import ChevLeft from "@/Components/Icons/ChevLeft/ChevLeft";
import ChevRight from "@/Components/Icons/ChevRight/ChevRight";
import ToRightIcon from "@/Components/Icons/ToRightIcon/ToRightIcon";
import { setRegistrationState, setUserExtraInfo } from "@/Store/Slices/Register/RegisterSlice";
import { useAppDispatch, useAppSelector } from "@/Store/StoreConfigs";
import React, { useState } from "react";

function BasicInfosModal() {
  const { theme } = useAppSelector((state) => state.theme);

const [fullName,setFullName] = useState<string>('')
const [companyName,setCompanyName] = useState<string>('')
const [jobTitle,setJobTitle] = useState<string>('')

  const dispatch = useAppDispatch();
  const nextBtnClickHandler = () => {
    dispatch(setUserExtraInfo({companyName,fullName,jobTitle}))
    dispatch(setRegistrationState({ item: "EnterPasswordModal" }));
  };

  const backBtnClickHandler = () => {
    dispatch(setRegistrationState({ item: "VerifyCodeModal" }));
  };

  return (
    <div className="absolute w-[90%] md:w-[50%] lg:w-[30%] left-[5%] top-[10%]   md:left-[25%]  lg:left-[35%]  rounded-2xl bg-modalBg flex justify-center items-center flex-col gap-6 p-12 border-borderColor">
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-mainPurple px-4 py-2 w-fit ">
          Register
        </div>
      </div>

      <div className="w-full flex justify-center items-center gap-2">
        <div className="bg-mainPurple w-7 h-7 flex justify-center items-center rounded-full">
          1
        </div>
        <div className="text-mainPurple">
          <ToRightIcon />
        </div>
        <div className="bg-mainPurple w-7 h-7 flex justify-center items-center rounded-full">
          2
        </div>
        <div className="text-mainPurple">
          <ToRightIcon />
        </div>
        <div className="bg-mainPurple w-7 h-7 flex justify-center items-center rounded-full">
          3
        </div>

        <div className="text-mainPurple">
          <ToRightIcon />
        </div>

        <div
          className={`${
            theme == "dark" ? "bg-white text-black" : "bg-gray-600 text-white"
          } w-7 h-7 flex justify-center items-center rounded-full`}
        >
          4
        </div>
      </div>

      <p className="text-textSecondary">
        Email address verified . You can now continue.
      </p>

      <div className="w-full">
        <div className="mb-4">Full Name :</div>
        <CustomInput type="text" placeholder="Full Name ..." value={fullName} onChange={(e)=>{setFullName(e.target.value)}} />
      </div>

      <div className="w-full">
        <div className="mb-4">Company Name :</div>
        <CustomInput  type="text"
          placeholder="Company Name ..."
          onChange={(e)=>{setCompanyName(e.target.value)}} 
          value={companyName} />

      </div>


      <div className="w-full">
        <div className="mb-4">Job Title :</div>
        <CustomInput  type="text"
         placeholder="Job Title ..."
          onChange={(e)=>{setJobTitle(e.target.value)}}
          value={jobTitle}  />
      </div>

      <button
        className="bg-mainPurple rounded-xl hover:!bg-hoverColor t05 w-full py-4 flex justify-center items-center"
        onClick={nextBtnClickHandler}
      >
        Next
        <ChevRight />
      </button>
      <button
        className={`${
          theme == "dark"
            ? "bg-white hover:!bg-[#8080809a] hover:text-white"
            : "bg-slate-600 hover:bg-slate-300 hover:text-gray-800"
        } text-black rounded-xl  t05 w-full py-4 flex justify-center items-center`}
        onClick={backBtnClickHandler}
      >
        <ChevLeft />
        Back
      </button>
    </div>
  );
}

export default BasicInfosModal;
