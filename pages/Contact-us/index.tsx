import HomeGetInToch from "@/Components/Templates/Home/HomeGetInToch/HomeGetInToch";
import ServiceGetInToch from "@/Components/Templates/Services/ServiceGetInToch/ServiceGetInToch";
import React from "react";

function index() {
  return (
    <>
      <div className="w-full h-[60vh] absolute top-0 left-0">
        <div className="w-full h-full relative">
          <img
            src="./contact/contactUsShip.png"
            className="w-full h-full"
            alt=""
          />
          <div className="w-full h-full absolute top-0 left-0 bg-[#00000094]"></div>
        </div>
      </div>
      <div className="pt-[55vh]">
        <ServiceGetInToch />
      </div>  
      <HomeGetInToch showBg={false}/>
    </>
  );
}

export default index;
