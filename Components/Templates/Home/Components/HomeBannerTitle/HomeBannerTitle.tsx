import React from "react";

type props = {
  title: string;
  subTitle: string;
};

function HomeBannerTitle({ title, subTitle }: props) {
  return (
    <div className="flex flex-col justify-start items-start gap-1 relative z-[99]">
      <div className="text-2xl font-semibold lg:text-5xl ">{title}</div>
      <div className="text-sm font-semibold lg:text-2xl ">
        {subTitle}
         <span className="text-mainPurple">.</span>
      </div>
     
    </div>
  );
}

export default HomeBannerTitle;
