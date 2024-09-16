import HowItWorksIcon from '@/Components/Icons/HowItWorksIcon/HowItWorksIcon'
import { useAppSelector } from '@/Store/StoreConfigs';
import React from 'react'

function GetOurService() {
  const { theme } = useAppSelector((state) => state.theme);
  return (
   <>
 
      <div className="flex flex-col justify-center items-center py-8 mt-8 homeGetOurService relative ">
         <div className='w-[20%] h-1 bg-mainPurple my-5'></div>
        <div className={`text-2xl lg:text-5xl mb-5 ${theme == 'dark'?"text-white":"text-black"}`}>How To Get Our Service</div>
        <HowItWorksIcon />

      </div>
   </>
  )
}

export default GetOurService