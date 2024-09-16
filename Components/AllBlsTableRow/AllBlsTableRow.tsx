import React, { useState } from "react";
import Ellipsis3 from "../Icons/Ellipsis3/Ellipsis3";
import DownloadIcon from "../Icons/DownloadIcon/DownloadIcon";

type props = {Shipper:string,Blnumber:string,Consignee:string,DateOfOrdred:string,BLUrl:string}

function AllBlsTableRow({Shipper,Blnumber,Consignee,DateOfOrdred,BLUrl}:props) {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);

  const showMoreInfoHandler = () => {
    setShowMoreInfo((prev) => !prev);
  };

  return (
    <div className="w-full h-[7vh] sticky top-0 left-0 flex justify-around items-center my-3 bg-slate-500 font-semibold text-white">
      <div className="fCenter w-1/5 lg:w-1/6 text-nowrap">{Blnumber}</div>
      <div className=" hidden lg:!flex justify-center items-center text-nowrap">{Shipper}</div>
      <div className=" hidden lg:!flex justify-center items-center text-nowrap">
        {Consignee}
      </div>
     
      <div className=" hidden lg:!flex justify-center items-center w-1/5 text-nowrap">
        {DateOfOrdred}
      </div>
      {/* <div className=" hidden lg:!flex justify-center overflow-hidden items-center w-1/6">
      <input type="file" />
      </div> */}
      <div className=" hidden lg:!flex justify-center items-center w-1/5 text-red-500">
        <a className="w-fit h-fit cp" href={`http://46.21.250.175:9090/media/bl/${BLUrl}`} target="_blank">
          <DownloadIcon />
        </a>
      </div>
      <div className=" w-1/6 flex lg:!hidden justify-center items-center z-0 relative">
        <div className="w-fit h-fit cp" onClick={showMoreInfoHandler}>
          <Ellipsis3 />
        </div>
        {
         showMoreInfo && (
            <div className="absolute right-[60%] top-[-80%] w-[300px] px-4 z-10 bg-[#21488bf1] rounded-lg overflow-hidden">
            <div className="flex justify-between items-center my-2 ">
              <div>Shipper</div>
              <div>{Shipper}</div>
            </div>
            <div className="flex justify-between items-center my-2 text-green-400">
              <div>Consignee</div>
              <div>{Consignee}</div>
            </div>
            <div className="flex justify-between items-center my-2 text-green-400">
              <div>Date Of Ordred</div>
              <div>{DateOfOrdred}</div>
            </div>
            {/* <div className="flex justify-between items-center my-2 text-green-400">
              <div>Scan File</div>
              <div>
                <input type="file" />
              </div>
            </div> */}
            <div className="flex justify-between items-center my-2">
              <div>File</div>
              <div className="text-red-500">
              <a className="w-fit h-fit cp" href={`http://46.21.250.175:9090/media/bl/${BLUrl}`} target="_blank">
                  <DownloadIcon />
                </a>
              </div>
            </div>
          </div>
         )
        }
       
      </div>
    </div>
  );
}

export default AllBlsTableRow;
