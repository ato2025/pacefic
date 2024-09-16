import HowItWorksIcon from "@/Components/Icons/HowItWorksIcon/HowItWorksIcon";
import React from "react";
import AboutUsPageBoxes from "./Components/aboutUsPageBoxes/aboutUsPageBoxes";
import HomeGetInToch from "@/Components/Templates/Home/HomeGetInToch/HomeGetInToch";

function index() {

const items = [
  {title:'Continuous Learning:' , subTitle:"We remain abreast of industry trends to enhance our service delivery. Moreover, we are open to learning from our experiences and continuously improving along the way." , img:'./about/p1.png'},
  {title:'Transparent Communication: ' , subTitle:"Expect clear, straightforward updates and prompt responses to your inquiries." , img:'./about/p2.png'},
  {title:'Environmental Responsibility:  ' , subTitle:"While sustainability is paramount, we recognize our ongoing journey toward minimizing our environmental impact. We are committed to making strides within our means." , img:'./about/p3.png'},
  {title:'Client-Centric:' , subTitle:"Your needs are our priority. We focus on delivering practical solutions without unnecessary embellishment." , img:'./about/p4.png'},

]
  

  return (
    <div>
       <div className="w-full h-[60vh] absolute top-0 left-0">
        <div className="w-full h-full relative">
          <img
            src="./about/banner.png"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-20 mt-[45vh]">
        <div className="order-2 lg:order-1 flex justify-center items-center">
          <p className="text-xl lg:text-2xl text-justify  w-[70%]">
          We are a shipping company specializing in maritime transportation, containerized cargo handling, intermodal transport, and integrated logistics solutions. Our team brings extensive industry
expertise and a strong commitment to operational excellence.
          </p>
        </div>
        <div className="order-1 lg:order-2 w-full h-full">
          <div className="homeWhyUsTitleBox  flex w-full h-full justify-center items-center text-2xl lg:text-4xl ">
            About Us
          </div>
        </div>
      </div>

      <div className="serviceProvideTitle w-full mb-20 flex justify-center items-center gap-4 lg:gap-8">
        <div>
          <HowItWorksIcon />
        </div>
        <div>
          <div className="text-textPrimary  text-3xl lg:text-5xl xl:text-6xl">
            Our <span className="text-mainPurple">Approach</span> that
          </div>
          <div className="flex justify-between items-center gap-[20px] lg:gap-[100px]">
            <div className="text-textPrimary  text-3xl lg:text-5xl xl:text-6xl">
              we belive
            </div>

          </div>
          <div></div>
        </div>
      </div>

{
  items.map((item,index)=>(
    <AboutUsPageBoxes
    key={index}
    img={item.img}
    subTitle={item.subTitle}
    title={item.title}
  />
  ))
}

<HomeGetInToch showBg={true} />
     
    </div>
  );
}

export default index;
