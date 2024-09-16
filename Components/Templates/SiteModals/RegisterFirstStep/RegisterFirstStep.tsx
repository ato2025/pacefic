import CustomInput from "@/Components/CustomInput/CustomInput";
import ChevRight from "@/Components/Icons/ChevRight/ChevRight";
import ToRightIcon from "@/Components/Icons/ToRightIcon/ToRightIcon";
import { setRegistrationState, setUserEmail } from "@/Store/Slices/Register/RegisterSlice";
import { useAppDispatch, useAppSelector } from "@/Store/StoreConfigs";
import { axiosLocal, axiosServer } from "@/axios/config";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

function RegisterFirstStep() {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch()
const [email,setEmail] = useState('')
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g


const sendCodeHandler =()=>{
   
if(emailRegex.test(email)){
  dispatch(setUserEmail({email}))
  const data = {Email:email}
  axiosLocal.post(`/register/sendEmail`,data)
  .then(response=>{
   if(response.status == 200){
     dispatch(setRegistrationState({item:'VerifyCodeModal'}))
   }
  }).catch((err)=>{
   Swal.fire({
     title:'Email Is Exist',
     icon:'error'
    })
  })
}else{
  Swal.fire({
    title:'Email Is Not Valid',
    icon:'error'
   })
}

   
}

  return (
    <div className="absolute w-[90%] md:w-[50%] lg:w-[30%] left-[5%] top-[10%] md:top-[20%]  md:left-[25%]  lg:left-[35%]  rounded-2xl bg-modalBg flex justify-center items-center flex-col gap-12 p-12 border-borderColor">
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
        <div
          className={`${
            theme == "dark" ? "bg-white text-black" : "bg-gray-600 text-white"
          } w-7 h-7 flex justify-center items-center rounded-full`}
        >
          2
        </div>
     
          <ToRightIcon />
      
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
        <div className="mb-4">Email :</div>
        <CustomInput type="email" placeholder="Email ..." value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>

      <button
        className={`${
          theme == "dark"
            ? "bg-white text-black hover:!bg-[#8080809a] hover:text-white"
            : "bg-slate-600 hover:bg-slate-400 hover:text-gray-800"
        }  rounded-xl  t05 w-full py-4 flex justify-center items-center`}
        onClick={sendCodeHandler}
      >
        Send verification code <ChevRight />{" "}
      </button>
    </div>
  );
}

export default RegisterFirstStep;
