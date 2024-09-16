import CustomInput from "@/Components/CustomInput/CustomInput";
import ChevRight from "@/Components/Icons/ChevRight/ChevRight";
import ToRightIcon from "@/Components/Icons/ToRightIcon/ToRightIcon";
import { setRegistrationState, setVerifyCode } from "@/Store/Slices/Register/RegisterSlice";
import { useAppDispatch, useAppSelector } from "@/Store/StoreConfigs";
import { axiosLocal, axiosServer } from "@/axios/config";
import React, { useState } from "react";
import Swal from "sweetalert2";

function VerifyCodeModal() {
  const { theme } = useAppSelector((state) => state.theme);
  const {email} = useAppSelector(state=>state.registeration.userInfo)

const [Verification,setVerification] = useState<string>('')

  const dispatch = useAppDispatch();
  const verifyCodeHandler = () => {

    axiosLocal.post('/register/verifyEmail',{
      Code:Verification,
      Email:email
    })
    .then(res=>{
      if(res.status == 200){
        dispatch(setVerifyCode({verifyCode:Verification}))
        dispatch(setRegistrationState({ item: "BasicInfosModal" }));
      }
    }).catch(err=>{
      Swal.fire({
        title:'Code is not valid',
        icon:'error'
      })
    })

  };

  return (
    <div className="absolute w-[90%] md:w-[50%] lg:w-[30%] left-[5%] top-[5%] md:top-[10%]  md:left-[25%]  lg:left-[35%]  rounded-2xl bg-modalBg flex justify-center items-center flex-col gap-12 p-12 border-borderColor">
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
        <div
          className={`${
            theme == "dark" ? "bg-white text-black" : "bg-gray-600 text-white"
          } w-7 h-7 flex justify-center items-center rounded-full`}
        >
          3
        </div>

        <ToRightIcon />

        <div
          className={`${
            theme == "dark" ? "bg-white text-black" : "bg-gray-600 text-white"
          } w-7 h-7 flex justify-center items-center rounded-full`}
        >
          4
        </div>
      </div>

      <div className="w-full">
        <p className="text-textPrimary">Verification Code has sent to {email}</p>
      </div>

      <div className="w-full">
        <div className="mb-4">Verification Code :</div>
        <CustomInput type="number"  placeholder="Verification Code ..." value={Verification} onChange={(e)=>{setVerification(e.target.value)}}/>
      </div>

      <button
        className="bg-mainPurple rounded-xl hover:!bg-hoverColor t05 w-full py-4 flex justify-center items-center"
        onClick={verifyCodeHandler}
      >
        Verify code
        <ChevRight />
      </button>
      <button
        className={`${
          theme == "dark"
            ? "bg-white hover:!bg-[#8080809a] hover:text-white"
            : "bg-slate-600 hover:bg-slate-300 hover:text-gray-800"
        } text-black rounded-xl  t05 w-full py-4 flex justify-center items-center`}
      >
        Send new code <ChevRight />{" "}
      </button>
    </div>
  );
}

export default VerifyCodeModal;
