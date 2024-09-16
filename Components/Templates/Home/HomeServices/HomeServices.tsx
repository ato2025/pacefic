import React from "react";
import HomeServicesItem from "../Components/HomeServicesItem/HomeServicesItem";
import HomeService1 from "@/Components/Icons/HomeService1/HomeService1";
import HomeService2 from "@/Components/Icons/HomeService2/HomeService2";
import HomeService3 from "@/Components/Icons/HomeService3/HomeService3";
import HomeService4 from "@/Components/Icons/HomeService4/HomeService4";
import { useAppSelector } from "@/Store/StoreConfigs";
import Link from "next/link";

const homeServices = [
  {
    id: 1,
    title: "I. Order Placement:",
    desc: "Customers place orders on our website, providing necessary details such as item quantity, shipping address, and payment information.",
    icon: <HomeService1 />,
  },
  {
    id: 2,
    title: "II. Processing: ",
    desc: "Our team verifies your order details and begins processing your shipment. We prepare your items for shipping and arrange transportation.",
    icon: <HomeService2 />,
  },
  {
    id: 3,
    title: "III. Shipment Tracking:",
    desc: "Track your shipment in real-time using the provided tracking number. Stay updated on its status, including departure, transit, and arrival.",
    icon: <HomeService3 />,
  },
  {
    id: 4,
    title: "IV. Delivery: ",
    desc: "Your shipment is delivered to the specified address. Upon delivery, you may need to sign for receipt, depending on the shipping method and carrier policies.",
    icon: <HomeService4 />,
  },
];

function HomeServices() {

  const {theme}=useAppSelector(state=>state.theme)

  return (
    <div className={`${theme == 'dark' ? "bg-modalBg" :"homeHowToGetService"}  px-4 lg:px-28 py-10   border-white border-t-2 border-b shadow-md grid grid-cols-1 lg:grid-cols-3`}>
      <div className={`lg:col-span-1 ${theme == 'dark' ? "bg-[#9171F8]" :"bg-[#5F2BED]"}  rounded-xl px-4 flex flex-col justify-center items-center py-10`}>
        <img src="./home/servicesPic.png" className="w-[300px] md:w-[380px]" alt="" />
        <div className="text-black text-2xl my-10">Learn More</div>
        <Link href={'/About-us'} className="bg-[#191A23] py-4 px-6 rounded-lg text-white">
        Discover Our Story
        </Link>
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2  w-full mx-auto mt-10 lg:mt-0">
        {homeServices.map((item) => (
          <HomeServicesItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default HomeServices;
