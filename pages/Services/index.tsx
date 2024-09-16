import HowItWorksIcon from "@/Components/Icons/HowItWorksIcon/HowItWorksIcon";
import React from "react";
import ServicesBoxItem from "./Components/ServicesBoxItem/ServicesBoxItem";
import ServicesShipBoxIcon from "@/Components/Icons/ServicesShipBoxIcon/ServicesShipBoxIcon";
import ServicesTruckIcon from "@/Components/Icons/ServicesTruckIcon/ServicesTruckIcon";
import ServicesAirPlaneIcon from "@/Components/Icons/ServicesAirPlaneIcon/ServicesAirPlaneIcon";
import WarehousingIcon from "@/Components/Icons/WarehousingIcon/WarehousingIcon";
import DistributionIcon from "@/Components/Icons/distributionIcon/distributionIcon";
import ClearanceIcon from "@/Components/Icons/ClearanceIcon/ClearanceIcon";
import TrackingServiceIcon from "@/Components/Icons/TrackingServiceIcon/TrackingServiceIcon";
import HomeGetInToch from "@/Components/Templates/Home/HomeGetInToch/HomeGetInToch";
import { useAppSelector } from "@/Store/StoreConfigs";

const allServicesPageInfos = [
  {
    id: 1,
    title: "A. Freight and Express Shipping",
    subTitle:'Swift and reliable freight solutions for your urgent shipments.',
    boxes: [
      {
        id: 1,
        icon: (
          <ServicesShipBoxIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: true,
        title: "Sea Deliveries.",
        desc:
          "At Pacific, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
      },
      {
        id: 2,
        icon: (
          <ServicesTruckIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: false,
        title: "Land Deliveries.",
        desc:
          "At Pacific, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
      },
      {
        id: 3,
        icon: (
          <ServicesAirPlaneIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: false,
       title: "Air Deliveries.",
       desc:
          "At Pacific, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
      },
    ],
    description:
      "Our freight and express shipping services ensure your cargo arrives swiftly and securely. Whether it's by land, sea, or air, we provide tailored solutions to meet your needs. With our expedited delivery options, urgent shipments are handled with priority, ensuring timely arrival. Trust us for reliable, efficient transportation that supports your business's success.",
    warningDescription:
      "We're currently enhancing our offerings to better serve you. Our air freight, railroad, and warehouse services are under construction and will be launched soon. Stay tuned for these exciting updates. Thank you for your patience and support!",
  },

  {
    id: 2,
    title: "B. Logistics and Supply Chain Management",
    subTitle:'Seamless coordination, warehousing, and distribution to optimize your supply chain.',
    boxes: [
      {
        id: 5,
        icon: (
          <WarehousingIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: false,
        title: "Warehousing",
        desc:
          "At Pacific, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
      },
      {
        id: 6,
        icon: (
          <DistributionIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: false,
        title: "distribution",
        desc:
          "At Pacific, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
      },
    ],
    description:
      "Our comprehensive logistics and supply chain management services ensure your business operates smoothly and efficiently. We provide end-to-end solutions, including inventory management, transportation, and distribution. Our expert team coordinates every aspect of your supply chain to optimize performance, reduce costs, and improve delivery times. With advanced technology and strategic planning, we tailor our services to meet your specific needs, ensuring seamless integration and exceptional service.  ",
    warningDescription:
      "Our warehousing service is currently under construction and will be available soon. We appreciate your patience as we work to bring you this essential service.  ",
  },

  {
    id: 3,
    title: "B. Logistics and Supply Chain Management",
    subTitle:'Expert assistance with customs clearance and meticulous documentation.',
    boxes: [
      {
        id: 7,
        icon: (
          <ClearanceIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: false,
        title: "clearance and documentation.",
        desc:"",
      },
   

    ],
    description:
      "Our customs and brokerage services streamline the complex process of international shipping, ensuring your cargo clears customs efficiently. We handle all necessary documentation, compliance with regulations, and communication with customs authorities to minimize delays and avoid penalties. Our experienced team navigates the intricacies of global trade, providing expert advice and support. With our comprehensive services, you can focus on your business while we ensure your shipments are compliant and on time.  ",
    warningDescription:"",
  },

  {
    id: 4,
    title: "D. Tracking and Reporting ",
    subTitle:'Real-time tracking and comprehensive shipment reports to keep you informed every step of the way.',
    boxes: [
      {
        id: 7,
        icon: (
          <TrackingServiceIcon className="w-9 h-9 md:w-10   md:h-10   lg:w-16 lg:h-16" />
        ),
        coloredBg: false,
        title: "Tracking ",
        desc:"At Pacific, we believe in providing our clients with personalized and efficient logistics solutions that meet their unique needs. ",
      },
   

    ],
    description:
      "Our advanced tracking and reporting services provide real-time visibility of your shipments, ensuring you stay informed every step of the way. With detailed tracking information and comprehensive reports, you can monitor your cargo's progress and make informed decisions to enhance efficiency and customer satisfaction.",
    warningDescription:"",
  },


 
];

function index() {
  const {theme}=useAppSelector(state=>state.theme)
  return (
    <div>
      <div className="w-full h-[30vh]">
        <img src="./services/serviceBg.png" className="w-full h-full" alt="" />
      </div>

      <div className="serviceProvideTitle my-20 w-full mb-20 flex justify-center items-center gap-4 lg:gap-8">
        <div>
          <HowItWorksIcon />
        </div>
        <div>
          <div className="text-textPrimary  text-3xl md:text-4xl lg:text-6xl font-bold">
            Our <span className="text-mainPurple">Service</span>
          </div>

          <div></div>
        </div>
      </div>

      <div className={`servicesContainer ${theme == 'dark'?"bg-modalBg":"bg-[#DED6FF]"}  px-6 lg:px-20 py-5 lg:py-10 mt-10 `}>
        {allServicesPageInfos.map((item) => (
          <ServicesBoxItem
          key={item.id}
            title={item.title}
            boxes={item.boxes}
            description={item.description}
            warningDescription={item.warningDescription}
            subTitle={item.subTitle}
          />
        ))}
      </div>

      <HomeGetInToch showBg={false}/>


    </div>
  );
}

export default index;
