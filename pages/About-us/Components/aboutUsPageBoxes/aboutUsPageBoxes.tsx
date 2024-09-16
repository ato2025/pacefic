import React from 'react'
type props = {
   title:string 
   subTitle:string
   img:string
}
function AboutUsPageBoxes({img,subTitle,title}:props) {
  return (
   <div className="px-4 lg:px-32 relative mb-[25vh]">
   <div>
     <img src={img} className="w-full lg:w-fit" alt="" />
   </div>
   <div className="absolute top-[80%]  lg:bottom-[-15%] w-[90%] lg:w-[60%]  right-[5%] px-2 lg:px-8 bg-modalBg py-5  lg:py-10 rounded-lg h-fit">
     <h1 className="text-mainPurple text-base lg:text-3xl mx-auto w-full text-center mb-5">
       
      {title}
     </h1>
     <p className="text-xs lg:text-2xl text-white">
       {subTitle}
     </p>
   </div>
 </div>
  )
}

export default AboutUsPageBoxes