import CustomInput from '@/Components/CustomInput/CustomInput';
import ChevLeft from '@/Components/Icons/ChevLeft/ChevLeft'
import ChevRight from '@/Components/Icons/ChevRight/ChevRight'
import CloseIcon from '@/Components/Icons/CloseIcon/CloseIcon';
import EyeIcon from '@/Components/Icons/EyeIcon/EyeIcon';
import EyeSlashIcon from '@/Components/Icons/EyeSlashIcon/EyeSlashIcon';
import ToRightIcon from '@/Components/Icons/ToRightIcon/ToRightIcon'
import { setOpenModal, setRegistrationState, setVerifyCode } from '@/Store/Slices/Register/RegisterSlice';
import { useAppDispatch, useAppSelector } from '@/Store/StoreConfigs';
import { axiosLocal, axiosServer } from '@/axios/config';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

function EnterPasswordModal() {

  const [isShowPassword,setIsShowPassword] = useState<boolean>(false)
  const [isShowVerifyPassword,setIsShowVerifyPassword] = useState<boolean>(false)
   const { theme } = useAppSelector((state) => state.theme);
   const [password,setPassword] = useState<string>('')
   const [verifyPassword,SETverifyPassword] = useState<string>('')

   const {companyName,email,fullName,jobTitle,verifyCode} = useAppSelector(state=>state.registeration.userInfo)

   const dispatch = useAppDispatch();
const registerBtnHandler =()=>{

  if(password.trim() === verifyPassword.trim()){
    const data ={
      Email: email,
      FullName: fullName,
      Company: companyName,
      JobTitle: jobTitle,
      Code: verifyCode,
      Password: password
    }

axiosLocal.post('/register/sendAllInfos',data)
.then(res=>{
  if(res.status == 200){
    Swal.fire({
      title:'userRegistred Successfully',
      icon:'success'
    })
    .then(response=>{
      dispatch(setRegistrationState({item:'Login'}))
    })
  }
})
.catch(err=>{
  // Swal.fire({
  //   title:'registration faild',
  //   icon:'error'
  // })
})


  }else{
    Swal.fire({
      title:'varify password not valid',
      icon:'info'
    })
  }
  Swal.fire({
    title:'please fill the inputs',
    icon:'info'
  })
  // dispatch(setOpenModal());
}

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

     <div className="bg-mainPurple w-7 h-7 flex justify-center items-center rounded-full">
       4
     </div>
   </div>

  

   <div className="w-full">
     <div className="mb-4">Password :</div>
    <div className='w-full h-fit relative'>
     <CustomInput type={isShowPassword ? 'text' : 'password'} placeholder="Password ..." value={password} onChange={(e)=>{setPassword(e.target.value)}} />
     <div className='w-fit h-fit absolute top-2 right-4 cursor-pointer' onClick={()=>{setIsShowPassword(prev=>!prev)}}>
      {
        isShowPassword ? <EyeSlashIcon/> :<EyeIcon/>
      }
      
     </div>
    </div>
     
   </div>
   <div className="w-full">
     <div className="mb-4">Verify Password :</div>
    <div className='w-full h-fit relative'>
     <CustomInput type={isShowVerifyPassword ? 'text' : 'password'} placeholder="Verify Password ..." value={verifyPassword} onChange={(e)=>{SETverifyPassword(e.target.value)}} />
     <div className='w-fit h-fit absolute top-2 right-4 cursor-pointer' onClick={()=>{setIsShowVerifyPassword(prev=>!prev)}}>
      {
        isShowVerifyPassword ? <EyeSlashIcon/> :<EyeIcon/>
      }
      
     </div>
    </div>
     
   </div>
  

   <button className="bg-mainPurple rounded-xl hover:!bg-hoverColor t05 w-full py-4 flex justify-center items-center" onClick={registerBtnHandler}>
    Register
     <ChevRight />
   </button>
   <button
     className={`${
       theme == "dark"
         ? "bg-white hover:!bg-[#8080809a] hover:text-white"
         : "bg-slate-600 hover:bg-slate-300 hover:text-gray-800"
     } text-black rounded-xl  t05 w-full py-4 flex justify-center items-center gap-2`}
   >
     Cancel
     <div className='border border-black rounded-full text-base'>
     <CloseIcon />
     </div>
   </button>
 </div>
  )
}

export default EnterPasswordModal