import React from 'react'

function HomeBanners() {
  return (
    <div className='w-[85%] mx-auto bg-[#C2B2FF] rounded-3xl grid grid-cols-1 lg:grid-cols-2 py-10 px-4 lg:px-20 mb-20'>
      <div className='flex justify-center items-start flex-col'>
         <div className='text-3xl font-medium text-black'>Let’s make things happen</div>
         <p className='text-lg font-normal my-10 text-black'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
         <button className='text-xl px-6 py-3 rounded-lg text-white bg-black text-nowrap'>Get In Toch Togeder</button>
      </div>

      <div className='flex justify-center items-center'>
         <img src="./home/homeBannerShip.png" alt="" />
      </div>
    </div>
  )
}

export default HomeBanners