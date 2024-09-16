import LocationIcon from "@/Components/Icons/LocationIcon/LocationIcon";
import { openTrackingModal } from "@/Store/Slices/tracking/trackingSlice";
import { useAppDispatch, useAppSelector } from "@/Store/StoreConfigs";
import { axiosLocal } from "@/axios/config";
import React, { useState } from "react";
import Swal from "sweetalert2";

function HomeTrackingBox() {
  const { theme } = useAppSelector((state) => state.theme);
  const [activeSection, setActiveSection] = useState("Tracking");
  const [trackingValue, setTrackingValue] = useState("");
  const dispatch = useAppDispatch();
  const trackingHandler = () => {
    if (trackingValue.length !== 13) {
      Swal.fire({
        title: "BlNumber has 13 Charecter",
        icon: "info",
      });
      return false;
    }
    axiosLocal
      .post("/tracking", { BlNumber: trackingValue })
      .then((res) => {
        if (res.status == 200) {
          const data = res.data;
          const {
            DateOfIssue,
            Eta,
            Etd,
            Imo,
            PortOfDischarge,
            PortOfLoading,
            OceanVessel,
          } = data;
          const submitedData = {
            DateOfIssue,
            ETA: Eta,
            ETD: Etd,
            ImoNumber: Imo,
            portOfDischarge: PortOfDischarge,
            portOfLoading: PortOfLoading,
            vesselName: OceanVessel,
          };
          dispatch(openTrackingModal(submitedData))
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "your Bl Number is not correct",
          icon: "info",
        });
      });
  };

  return (
    <div
      className={`${
        theme == "dark" ? "bg-modalBg darkBorder" : " border-mainPurple !border-2 bg-white"
      } rounded-xl  p-6 border `}
    >
      <div className="bannerBoxHeader flex justify-start items-center gap-8">
        <div
          className={`${
            activeSection == "Tracking" ? "border-mainPurple border-b-4" : ""
          } text-base font-bold cursor-pointer  pb-2`}
          onClick={() => {
            setActiveSection("Tracking");
          }}
        >
          Tracking
        </div>
        <div
          className={`${
            activeSection == "Schedule" ? "border-mainPurple border-b-4" : ""
          } text-base font-bold cursor-pointer  pb-2`}
          onClick={() => {
            setActiveSection("Schedule");
          }}
        >
          Schedule
        </div>
      </div>

      {activeSection == "Tracking" ? (
        <div className="HomeTrackSection">
          <p className="text-mainText text-base font-normal mb-5 mt-9 ">
            Container , Bill of landing or Booking Number{" "}
          </p>
          <input
            type="text"
            className={`border ${theme=='dark'?"border-mainText":"border-black"} rounded-2xl outline-none px-4 py-2 my-5 bg-transparent w-full`}
            placeholder="ex: ABCD1234567"
            value={trackingValue}
            onChange={(e) => {
              setTrackingValue(e.target.value);
            }}
          />
          <p className="text-mainText text-base font-normal mt-5 mb-10 ">
            To track up to three containers, please enter references separated
            by a comma.
          </p>
          <button
            className={`flex justify-center items-center ${
              trackingValue.length == 13 ? "bg-mainPurple" : "bg-gray-500"
            } py-5 px-8 rounded-2xl text-white w-full ${
              trackingValue.length == 13 ? "hover:bg-hoverColor" : ""
            }  t05`}
            onClick={trackingHandler}
          >
            Shipment Tracking
          </button>
        </div>
      ) : (
        <div className="schaduleBox">
          <div className="my-8">
            <div className="mb-5 ">Origin</div>
            <div className="w-full rounded-2xl border-gray-500 border px-4 py-2 flex justify-between items-center">
              <LocationIcon />
              <input
                type="text"
                className="w-[90%] bg-transparent"
                placeholder="Port, City, Country name or code"
              />
            </div>
          </div>

          <div className="my-8">
            <div className="mb-5 ">Destination</div>
            <div className="w-full rounded-2xl border-gray-500 border px-4 py-2 flex justify-between items-center">
              <LocationIcon />
              <input
                type="text"
                className="w-[90%] bg-transparent"
                placeholder="Port, City, Country name or code"
              />
            </div>
          </div>
          <button className="flex justify-center items-center bg-mainPurple hover:bg-hoverColor t05 py-5 px-8 rounded-2xl text-white w-full ">
            Discover More
          </button>
        </div>
      )}
    </div>
  );
}

export default HomeTrackingBox;
