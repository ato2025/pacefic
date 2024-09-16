import EarthIcon from "@/Components/Icons/EarthIcon/EarthIcon";
import NorthEastIcon from "@/Components/Icons/NorthEastIcon/NorthEastIcon";
import React from "react";
import HomeBannerTitle from "../HomeBannerTitle/HomeBannerTitle";
import HomeBannerItems from "../HomeBannerItems/HomeBannerItems";
import HomeUserIcon from "@/Components/Icons/HomeUserIcon/HomeUserIcon";
import HomeShipIcon from "@/Components/Icons/HomeShipIcon/HomeShipIcon";
import HomeTrackingBox from "../HomeTrackingBox/HomeTrackingBox";
import { useAppSelector } from "@/Store/StoreConfigs";
import { useRouter } from "next/router";
import Link from "next/link";


function HomeBanner() {
  const { theme } = useAppSelector((state) => state.theme);
  const router = useRouter()
  const bannerBtnHandler = ()=>{
router.push('/About-us')
  }
  return (
    <div className={`w-full grid grid-cols-3 lg:py-12 px-6 lg:px-28 ${theme == 'dark'? "heroSection":"heroSection2"} `}>
      <div className="col-span-3 lg:col-span-2    ">
        <div className="bannerTitles flex flex-col lg:gap-3 relative mt-8 lg:mt-0">
          <HomeBannerTitle title="Shipping Service" subTitle="Reliable and efficient shipping services for all your needs" />

          <HomeBannerTitle title="Online Tracking" subTitle="Track your shipments effortlessly with our advanced online tracking system" />

        </div>
        <div className="bannerBtn  flex justify-start items-center my-8">
          <Link href={'/About-us'} className="flex justify-center items-center gap-2  bg-mainPurple py-3 cursor-pointer px-8 rounded-2xl text-white w-fit hover:bg-hoverColor t05 z-50" onClick={bannerBtnHandler}>
            GET ABOUT US
            <NorthEastIcon />
          </Link>
        </div>
        <div className="flex justify-start items-center gap-1 lg:gap-6">
          <HomeBannerItems
            icon={<EarthIcon />}
            title1="144"
            title2="Countries"
            title3=""
          />
          <HomeBannerItems
            icon={<HomeUserIcon />}
            title1="10,000+"
            title2="satisfied"
            title3="Customers"
          />
          <HomeBannerItems
            icon={<HomeShipIcon />}
            title1="509"
            title2="Shipping"
            title3="Vessels"
          />
        </div>
      </div>
      <div className="col-span-3 lg:col-span-1 mt-5 lg:mt-0">
        <HomeTrackingBox />
      </div>
    </div>
  );
}

export default HomeBanner;
