import Image from "next/image";
import { Inter } from "next/font/google";
import HomeBanner from "@/Components/Templates/Home/Components/HomeBanner/HomeBanner";
import { useAppSelector } from "@/Store/StoreConfigs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLogging } from "@/Store/Slices/Auth/AuthSlice";
import GetOurService from "@/Components/Templates/Home/GetOurService/GetOurService";
import HomeServices from "@/Components/Templates/Home/HomeServices/HomeServices";
import HomeFaq from "@/Components/Templates/Home/HomeFaq/HomeFaq";
import HomeServiceProvide from "@/Components/Templates/Home/HomeServiceProvide/HomeServiceProvide";
import WhyChooseUsHome from "@/Components/Templates/Home/WhyChooseUsHome/WhyChooseUsHome";
import HomeBanners from "@/Components/Templates/Home/HomeBanners/HomeBanners";
import HomeGetInToch from "@/Components/Templates/Home/HomeGetInToch/HomeGetInToch";
import TrackingModal from "@/Components/TrackingModal/TrackingModal";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { theme: themee } = useAppSelector((state) => state.theme);
  const { ImoNumber } = useAppSelector((state) => state.trackingModal);
  const [theme, setTheme] = useState<string | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme);
    localStorage.removeItem("token");
    dispatch(setLogging({ state: false }));
  }, [themee]);

  return (
    <div className={`bg-layoutBg !w-[100vw] relative`}>
   
      <HomeBanner />
      <GetOurService />
      <HomeServices/>
      <WhyChooseUsHome/>
      <HomeServiceProvide/>
      <HomeFaq/>
      <HomeGetInToch showBg={false}/>

{
  ImoNumber && <TrackingModal/>
}


    </div>
  );
}
