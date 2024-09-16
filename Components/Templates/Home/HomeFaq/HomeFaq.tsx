import ChevUpRightIcon from "@/Components/Icons/ChevUpRightIcon/ChevUpRightIcon";
import React, { useState } from "react";
import ContainerBoxItem from "../Components/ContainerBoxItem/ContainerBoxItem";
import { useAppSelector } from "@/Store/StoreConfigs";

function HomeFaq() {

   const [selectedBox,setSelectedBox] = useState<number>(1)
   const {theme}=useAppSelector(state=>state.theme)
  return (
    <div className={` ${theme =='dark' ?"bg-modalBg":"bg-[#DED6FF] "} px-4 lg:px-28  my-10  border-white border-t-2 border-b shadow-md`}>
    <div className="w-[90%] px-4 pb-10  grid grid-cols-1 xl:grid-cols-2 mx-auto rounded-2xl mb-10 ">
      <div>
        <div className="flex justify-center items-center my-5 lg:my-20 ">
          <img src="./home/faqShip.png" alt="" />
        </div>
        <div className={`rounded-2xl border-white border shadow-md ${theme =='dark' ?"bg-modalBg":"bg-transparent !border-mainPurple"}  py-10 px-5 flex flex-col justify-center items-center gap-5`}>
          <div className={`text-3xl ${theme =='dark' ?"text-white":"text-black"} `}>
            How can I become a customer?
          </div>
          <p className="text-base text-textSecondary">
          Welcome! We're glad you're interested in joining our community of satisfied customers. Click the below link, where you'll find answers to frequently asked questions to help you get started.
          </p>
          <button className={`bg-transparent border rounded-2xl border-mainPurple ${theme =='dark' ?"text-mainPurple":"text-black"}  px-4 py-2 gap-2 flex  justify-center items-center`}>
            More Questions
            <ChevUpRightIcon />
          </button>
        </div>
      </div>
      <div className="px-4 flex flex-col justify-center items-center mt-10 xl:mt-24 ">

         
         <ContainerBoxItem selectedBox={selectedBox} setSelectedBox={setSelectedBox} item={1} title="How can I become a customer?" desc="To become a customer, please visit the 'Registration' section of our
          website. There, you will need to sign up by completing the
          registration form with your personal information. Once submitted,
          you'll become a registered member and can start using our services." />


         <ContainerBoxItem selectedBox={selectedBox} setSelectedBox={setSelectedBox} item={2} title="Is membership required to place an order?" desc="Yes, membership is required to place an order. By becoming a member, you gain access to our full range of services and benefits, including the ability to place orders, track shipments, and receive personalized assistance. Signing up is quick and easy, and it ensures a seamless experience throughout the ordering process.." />


         <ContainerBoxItem selectedBox={selectedBox} setSelectedBox={setSelectedBox} item={3} title="What happens after I place my order?" desc="After you've placed an order, you'll provide us with shipment details. We'll then process your order and provide you with the applicable rate, which you can view in your member account or dashboard. At this point, you'll have the option to finalize the order based on the provided information. Additionally, our team will reach out to you within two working days to assist with any questions or concerns." />


         <ContainerBoxItem selectedBox={selectedBox} setSelectedBox={setSelectedBox} item={4} title="How long is the rate valid, and what is the deadline for finalizing my order?" desc="The rate provided is valid for 48 hours, provided there is a seven-day gap between the requested shipment date and the date of your request. If you do not finalize your order within this time frame, the request will remain as a draft, and you can resubmit it to receive new applied rates." />




      </div>
     
    </div>
    </div>
  );
}

export default HomeFaq;
