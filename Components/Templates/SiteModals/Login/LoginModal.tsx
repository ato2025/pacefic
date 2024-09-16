import CustomInput from "@/Components/CustomInput/CustomInput";
import ChevRight from "@/Components/Icons/ChevRight/ChevRight";
import EyeIcon from "@/Components/Icons/EyeIcon/EyeIcon";
import EyeSlashIcon from "@/Components/Icons/EyeSlashIcon/EyeSlashIcon";
import {
  setOpenModal,
  setRegistrationState,
} from "@/Store/Slices/Register/RegisterSlice";
import { useAppSelector } from "@/Store/StoreConfigs";
import { axiosLocal } from "@/axios/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import jwt, { JwtPayload } from "jsonwebtoken";
import { setLogging, setUserName, setUserType } from "@/Store/Slices/Auth/AuthSlice";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
type tokens = {
  Token: string;
  RefreshToken: string;
};
interface MyJwtPayload extends JwtPayload {
  Role: string;
  FullName: string;
}

function LoginModal() {
  const dispatch = useDispatch();
  const { theme } = useAppSelector((state) => state.theme);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [tokens, setTokens] = useState<tokens>({ RefreshToken: "", Token: "" });
  const router = useRouter();

  const signUpBtnHandler = () => {
    dispatch(setRegistrationState({ item: "RegisterFirstStep" }));
  };

  const loginHandler = () => {
    const data = { email, password };
    axiosLocal
      .post("/auth", data)
      .then((response) => {
        if (response.status == 200) {
          setTokens(response.data);
          dispatch(setLogging({state:true}))          
        }else if(response.status == 220) {
          Swal.fire({
            title:'Please Enter Correct Info',
            icon:'info'
          })         
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  };


  const keyDownHandler =(e:React.KeyboardEvent<any>)=>{
    if(e.keyCode == 13){
      loginHandler()
    }
  }


  useEffect(() => {
    if(tokens.Token.length>0){
      const decodedToken = jwt.decode(tokens.Token) as MyJwtPayload | null;
     
      dispatch(setUserType({ item: decodedToken?.Role as string }));
      dispatch(setUserName({ userName: decodedToken?.FullName as string }));
  
      if (decodedToken?.Role == "User") {
        router.push("/User-Panel/create-new-request");
        dispatch(setOpenModal());
       
        localStorage.setItem("token", JSON.stringify(decodedToken));
      } else if (decodedToken?.Role == "Admin") {
        router.push("/Shipping-Admin/users");
        dispatch(setOpenModal());
       
        localStorage.setItem("token", JSON.stringify(decodedToken));
      }
    }
    
  }, [tokens]);

  return (
    <div className="absolute w-[90%] md:w-[50%] lg:w-[30%] left-[5%] top-[5%] md:top-[10%]  md:left-[25%]  lg:left-[35%]  rounded-2xl bg-modalBg flex justify-center items-center flex-col gap-12 p-12 border-borderColor">
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-mainPurple px-4 py-2 w-fit ">
          Login
        </div>
      </div>

      <div className="w-full">
        <div className="mb-4">Email :</div>
        <CustomInput
          type="email"
          placeholder="Email ..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className="w-full">
        <div className="mb-4">Password :</div>
        <div className="w-full h-fit relative">
          <CustomInput
            type={isShowPassword ? "text" : "password"}
            placeholder="Password ..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyDown={(e)=>{keyDownHandler(e)}}
          />
          <div
            className="w-fit h-fit absolute top-2 right-4 cursor-pointer"
            onClick={() => {
              setIsShowPassword((prev) => !prev);
            }}
          >
            {isShowPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </div>
        </div>
      </div>

      <button
        className="bg-mainPurple rounded-xl hover:!bg-hoverColor t05 w-full py-4"
        onClick={loginHandler}
      >
        Login
      </button>
      <button
        className={`${
          theme == "dark"
            ? "bg-white hover:!bg-[#8080809a] hover:text-white"
            : "bg-slate-600 hover:bg-slate-300 hover:text-gray-800"
        } text-black rounded-xl  t05 w-full py-4 flex justify-center items-center`}
        onClick={signUpBtnHandler}
      >
        Sign Up Now <ChevRight />{" "}
      </button>
    </div>
  );
}

export default LoginModal;
