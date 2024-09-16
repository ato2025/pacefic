import CustomInput from '@/Components/CustomInput/CustomInput';
import { useAppSelector } from '@/Store/StoreConfigs';
import React from 'react'

type props = {
   value:string
   onChange:(e:string)=>void
   placeHolder:string
   type:string
   title:string
}

function GetInTocheItem({onChange,placeHolder,type,value,title}:props) {
  const {theme} = useAppSelector(state=>state.theme)
  return (
   <div className="w-full my-8">
   <div className={`mb-1 ${theme == 'dark' ? "text-white" :"text-black"} `}>{title}</div>
   <CustomInput
     type={type}
     placeholder={placeHolder}
     className={theme == 'dark' ? 'border border-borderColor ':'border border-black '}
     value={value}
     onChange={(e) => {
       onChange(e.target.value);
     }}
   />
 </div>
  )
}

export default GetInTocheItem