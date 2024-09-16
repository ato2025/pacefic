import React, { useEffect, useState } from 'react'
import AlertIcon from '../Icons/AlertIcon/AlertIcon'
import LogOutIcon from '../Icons/LogOutIcon/LogOutIcon'
import { ThemeChanger } from '@/Hooks/useTheme/useTheme'
import { useAppDispatch, useAppSelector } from '@/Store/StoreConfigs'
import { useRouter } from 'next/router'
import { setLogging, setUserName, setUserType } from '@/Store/Slices/Auth/AuthSlice'
import { useDispatch } from 'react-redux'
import { axiosLocal} from '@/axios/config'
import Swal from 'sweetalert2'

function UserPanelHeader() {

  const {userName} = useAppSelector(state=>state.auth)
  const router = useRouter()
  const dispatch = useDispatch()
  
  
  const logOutHandler =()=>{
    axiosLocal.get('/LogOut')
    .then(res=>{
      if(res.status ==200){
        dispatch(setLogging({state:false}))
        localStorage.removeItem('token')
        router.push("/");
        dispatch(setUserType({item:'usual'}))
      }
    })
    .catch(err=>{
      Swal.fire({
        title:'Error',
        icon:'error'
      })
    })

  }
useEffect(()=>{
  const storedToken = localStorage.getItem('token');
  if (storedToken) {
    const userName = JSON.parse(storedToken).FullName;
    dispatch(setUserName({ userName }));
  }
},[])
  return (
   <div className="w-full  h-[7vh] sticky top-0 left-0 right-0 bg-BGprimary flex justify-between items-center text-gray-700 px-20">
   <div className="text-white">Hello Dear {userName}</div>
   <div className="flex justify-center items-center gap-8">
   

     <div className="group inline-block relative">
       <div className="text-white hover:text-blue-500 cp">
         <AlertIcon />
       </div>
       <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-100 text-black text-xs rounded-md p-1 absolute z-10 top-[150%] right-[-30%] -translate-y-1/2 transform pointer-events-none text-nowrap">
         Notification
       </div>
     </div>

     <div className="group inline-block relative">
       <div className="text-white hover:text-blue-500 cp" onClick={logOutHandler}>
         <LogOutIcon />
       </div>
       <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-gray-100 text-black text-xs rounded-md p-1 absolute z-10 top-[150%] right-[-30%] -translate-y-1/2 transform pointer-events-none text-nowrap">
         Log Out
       </div>
     </div>
   </div>
 </div>
  )
}

export default UserPanelHeader