import { setBlItem } from '@/Store/Slices/NewBlGebInfos/NewBlGebInfos'
import { useAppDispatch } from '@/Store/StoreConfigs'
import React, { useState } from 'react'


type Props ={
   title:string
   actionType:string
}

function CreateBlItemTextArea({title,actionType}:Props) {
   const [isFocused, setIsFocused] = useState(false)
   const [value,setValue] = useState<string>('')
   const dispatch = useAppDispatch();
  return (
   <div className="relative my-5 w-full">
      <textarea
    
        placeholder={title}
        className={`w-9/12 border bg-[#272a2c]  border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${isFocused ? 'placeholder-top-0 text-sm text-[#ffffff]' : 'placeholder-center text-base text-[#2a2e33] my-3'}`}
        value={value}
        onChange={(e)=>{
         setValue(e.target.value)
         dispatch(setBlItem({type:actionType.toLowerCase(),payload:e.target.value}))
      }}
        onFocus={() => setIsFocused(true)}
        
      ></textarea>
      <label
        className={`absolute left-2  transition-all ${isFocused ? 'text-blue-400 top-[-55%] ' : 'top-2 text-transparent '}`}
        htmlFor="basic-text-field"
      >
        {title}
      </label>
    </div>
  )
}

export default CreateBlItemTextArea