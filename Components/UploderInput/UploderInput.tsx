import { setBlItem } from '@/Store/Slices/NewBlGebInfos/NewBlGebInfos';
import { useAppDispatch } from '@/Store/StoreConfigs';
import React, { useState } from 'react'
type props = {
   actionType:string
   title:string
}
function UploderInput({actionType,title}:props) {

   const [isFocused, setIsFocused] = useState(false)
   const [value,setValue] = useState<string>('')
   const dispatch = useAppDispatch();
   const [base64String,setBase64String] = useState<string>()
// const chooseHandler = (e:any)=>{
//    setValue(e.target.value)
//    dispatch(setBlItem({type:actionType.toLowerCase(),payload:e.target.value}))
// }

const handleFileChange = (e:any) => {
   setValue(e.target.value)
   const file = e.target.files[0];
   const reader = new FileReader();
   
   reader.onload = () => {
      if(typeof(reader.result) == 'string'){
         const base64 = reader?.result?.split(',')[1]; 
         setBase64String(base64);
         dispatch(setBlItem({type:actionType,payload:base64}))
      }
    
   };

   reader.readAsDataURL(file);
 };


  return (
   <div className="relative my-5 w-full">
       <div
     className='capitalize'
     
   >
     {title}
   </div>
   <input
     type="file"
     className={`border w-9/12 bg-[#272a2c]  border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${isFocused ? 'placeholder-top-0 text-sm text-[#ffffff]' : 'placeholder-center text-base text-[#2a2e33] my-3'}`}
     value={value}
     onChange={handleFileChange}
     onFocus={() => setIsFocused(true)}
     
   />
  
 </div>
  )
}

export default UploderInput