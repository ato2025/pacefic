import EarthIcon from '@/Components/Icons/EarthIcon/EarthIcon'
import React, { ReactNode } from 'react'

type props = {
   icon:ReactNode
   title1:string
   title2:string
   title3:string
}

function HomeBannerItems({icon,title1,title2,title3}:props) {
  return (
   <div className="flex w-[108px] h-[83px] lg:w-44 justify-center items-center gap-4 px-2 py-2 lg:px-6 lg:py-4 !rounded-2xl  bg-[#2A2E33] border border-white">
   <div className="bg-white rounded-full">
     {icon}
   </div>
   <div>
     <div className="text-xs capitalize lg:text-base font-bold text-white">{title1}</div>
     <div className="text-xs capitalize lg:text-base  text-white">{title2}</div>
     {
      title3.length > 0 && (
        <div className="text-xs capitalize lg:text-base  text-white">{title3}</div>
      ) 
     }
    
   </div>
 </div>
  )
}

export default HomeBannerItems