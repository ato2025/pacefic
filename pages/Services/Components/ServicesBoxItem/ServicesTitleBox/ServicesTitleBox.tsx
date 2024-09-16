import ServicesShipBoxIcon from '@/Components/Icons/ServicesShipBoxIcon/ServicesShipBoxIcon'
import React, { ReactNode } from 'react'
type props ={
   coloredBg:boolean,
   title:string
   icon:ReactNode
   desc:string
   
}
function ServicesTitleBox({coloredBg,desc,icon,title}:props) {
  return (
   <div className={` p-2 lg:p-6 ${coloredBg ? 'bg-mainPurple' : "bg-white"} mb-1 rounded-lg `}>
   <div>
     {icon}
   </div>
   <div className="text-black text-lg md:text-2xl  lg:text-4xl my-2 lg:my-5">
   {title}
   </div>
{
  desc && (
<p className="text-xs md:text-base text-black"> {desc} </p>
  )
}
   
 </div>
  )
}
  
export default ServicesTitleBox