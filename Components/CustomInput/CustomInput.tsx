import React, { KeyboardEventHandler } from 'react'
type props = {
       type:string
       placeholder:string
       onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
       value?:string
       onKeyDown?:KeyboardEventHandler<any> | undefined
       className?:string
}
function CustomInput({onChange,placeholder,type,value,onKeyDown,className}:props) {




  return (
       <input
       type={type}
       placeholder={placeholder}
       className={` ${className ? className + "w-full  bg-transparent rounded-2xl px-4 py-2" :"w-full border border-borderColor bg-transparent rounded-2xl px-4 py-2"}`}
       onChange={onChange}
       value={value}
       onKeyDown={onKeyDown}
     />
  )
}

export default CustomInput