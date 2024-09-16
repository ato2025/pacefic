import { closeTrackingModal } from "@/Store/Slices/tracking/trackingSlice";
import React, { MouseEventHandler } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import { useAppSelector } from "@/Store/StoreConfigs";
import DateOfIssueIcon from "../Icons/DateOfIssueIcon/DateOfIssueIcon";
import EtaIcon from "../Icons/EtaIcon/EtaIcon";
import ImpNumIcon from "../Icons/ImpNumIcon/ImpNumIcon";
import DischargeIcon from "../Icons/DischargeIcon/DischargeIcon";
import PortOfLoadingIcon from "../Icons/PortOfLoading/PortOfLoading";
import VesselNameIcon from "../Icons/VesselNameIcon/VesselNameIcon";
import EtdIcon from "../Icons/EtdIcon/EtdIcon";

function TrackingModal() {
  const {
    DateOfIssue,
    ETA,
    ETD,
    ImoNumber,
    portOfDischarge,
    portOfLoading,
    vesselName,
  } = useAppSelector((state) => state.trackingModal);

  const infos = [
    { id: 1, title: "Date Of Issue", value: DateOfIssue ,icon:<DateOfIssueIcon/> },
    { id: 2, title: "ETA", value: ETA ,icon:<EtaIcon/> },
    { id: 3, title: "ETD", value: ETD ,icon:<EtdIcon/> },
    { id: 4, title: "IMO", value: ImoNumber ,icon:<ImpNumIcon/> },
    { id: 5, title: "Port Of Discharge", value: portOfDischarge ,icon:<DischargeIcon/> },
    { id: 6, title: "Port Of Loading", value: portOfLoading ,icon:<PortOfLoadingIcon/> },
    { id: 7, title: "Vessel Name", value: vesselName ,icon:<VesselNameIcon/> },
  ];

  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(closeTrackingModal());
  };
  const reventPropgation: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };
  return (
    <>
      <div
        className="fixed w-full h-[100vh] left-0 top-0  flex justify-center items-center z-[10000]"
        onClick={closeModalHandler}
        onScroll={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-full h-full relative">
          <div className="w-fit h-fit" onClick={reventPropgation}>
            <div className="absolute w-[90%] md:w-[50%] lg:w-[30%] left-[5%] top-[5%] md:top-[10%]  md:left-[25%]  lg:left-[35%]  rounded-2xl bg-modalBg flex justify-center items-center flex-col gap-12 py-12 px-5  border-borderColor">
              <div className="w-full flex justify-end items-center ">
                <div
                  className="w-fit h-fit cursor-pointer text-white"
                  onClick={closeModalHandler}
                >
                  <CloseIcon />
                </div>
              </div>
              {infos.map((item) => (
                <div
                  className="flex justify-between items-center w-full"
                  key={item.id}
                >
                  <div className="flex gap-2 justify-start items-center">
                  <div>{item.icon}</div>
                  <div className="text-nowrap text-white">{item.title}</div>
                  </div>
                  <div className="text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingModal;
