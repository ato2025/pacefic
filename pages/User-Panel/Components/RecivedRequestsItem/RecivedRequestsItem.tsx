import React, { useState } from "react";

import { RecivedBlTypes } from "@/Types/RecivedBlType";
import { axiosLocal } from "@/axios/config";
import Swal from "sweetalert2";
import Ellipsis3 from "@/Components/Icons/Ellipsis3/Ellipsis3";
import CloseIcon from "@/Components/Icons/CloseIcon/CloseIcon";
import BlAdminDetailModal from "@/Components/BlAdminDetailModal/BlAdminDetailModal";
import EyeIcon from "@/Components/Icons/EyeIcon/EyeIcon";

function RecivedRequestsItem({
  ActualDischargePlace,
  ActualLoadingPlace,
  CargoType,
  ConsigneAddress,
  ConsigneName,
  ConsigneeRegisteredCountry,
  DescriptionofGoods,
  DestinationPortCountry,
  EstimatedTimeofLoading,
  FCL,
  FileUrl1,
  FileUrl2,
  FileUrl3,
  FileUrl4,
  GrossWeight,
  Hazardous,
  HsCode,
  Id,
  InlandCarriageatDischargeCountry,
  InlandCarriageatLoadingCountry,
  LoadingPortCountry,
  Notes,
  Packaging,
  PicUrl1,
  PicUrl2,
  PreferredDischargePort,
  PreferredLoadingPort,
  ShipperAddress,
  ShipperName,
  ShipperRegisteredCountry,
  Volume,
  CreateDate,
  State,
  RequestBLNumber,
  Response,
  setUpdateState
}: RecivedBlTypes) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const showMoreInfos = () => {
    setShowModal((prev) => !prev);
  };

  const [isShowMessageModal, setIsShowMessageModal] = useState(false);
  const showMessageModalHandler = () => {
    setIsShowMessageModal((prev) => !prev);
  };

  const sendMessageHandler = (State: number) => {
    const data = {
      Id,
      State,
    };
    axiosLocal
      .post("/user/UpdateRequestState", data)
      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            title: "Message Sent Successfully",
            icon: "success",
          }).then(click=>{
            if(click.isConfirmed){
               setIsShowMessageModal(false)
               setUpdateState(prev=>!prev)
            }
          })
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "error",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="!overflow-x-hidden ">
        <div className="w-full h-[7vh] flex justify-around items-center bg-slate-500 my-3 font-semibold text-stone-300">
          <div className="fCenter w-1/5 text-nowrap">{RequestBLNumber} </div>
          {/* <div className=" fCenter w-1/5">
            {Response ? (
              <button
                className="bg-sky-500 rounded-lg text-white px-4 py-2 shadow-lg flex justify-center items-center gap-2 hover:bg-sky-800 t05"
                onClick={showMessageModalHandler}
              >
                Show
                <EyeIcon />
              </button>
            ) : (
              <div className="text-white">No Message Yet</div>
            )}
          </div> */}
          <div className=" w-1/5 hidden md:!flex justify-center items-center">
            {
               State == 'Approve' && (
                  <button className="bg-green-700 rounded-lg text-white px-4 py-2 shadow-lg">
              {State}
            </button>
               )
            }
            {
               State == 'Reject' && (
                  <button className="bg-red-500 rounded-lg text-white px-4 py-2 shadow-lg">
              {State}
            </button>
               )
            }
            {
               State == 'Inprogress' && (
                  <button className="bg-blue-500 rounded-lg text-white px-4 py-2 shadow-lg">
              {State}
            </button>
               )
            }
             {
               State == 'Pending' && (
                  <button className="bg-stone-500 rounded-lg text-white px-4 py-2 shadow-lg">
              {State}
            </button>
               )
            }
            
          </div>
          <div className="hidden md:!flex justify-center items-center w-1/5">
            <div className="w-fit h-fit cp" onClick={showMoreInfos}>
              <Ellipsis3 />
            </div>
          </div>
        </div>

        <div
          className={`w-[80%] h-[80%] bg-slate-600 fixed overflow-x-hidden rounded-lg overflow-y-auto  top-[10%]  z-[9999]  t07 ${
            showModal ? "left-[10%] opacity-100" : "left-full opacity-0"
          } `}
        >
          <div className="flex justify-end items-center px-4 pt-3">
            <div
              className="text-white font-semibold w-fit  h-fit cp "
              onClick={showMoreInfos}
            >
              <CloseIcon />
            </div>
          </div>

          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 py-2">
            <BlAdminDetailModal
              title="Actual Discharge Place"
              subTitle={ActualDischargePlace}
            />
            <BlAdminDetailModal
              title="Actual Loading Place"
              subTitle={ActualLoadingPlace}
            />
            <BlAdminDetailModal title="Cargo Type" subTitle={CargoType} />
            <BlAdminDetailModal
              title="Consigne Address"
              subTitle={ConsigneAddress}
            />
            <BlAdminDetailModal title="Consigne Name" subTitle={ConsigneName} />
            <BlAdminDetailModal
              title="Consignee Registered Country"
              subTitle={ConsigneeRegisteredCountry}
            />
            <BlAdminDetailModal
              title="Description of Goods"
              subTitle={DescriptionofGoods}
            />
            <BlAdminDetailModal
              title="Destination Port Country"
              subTitle={DestinationPortCountry}
            />
            <BlAdminDetailModal
              title="Estimated Time of Loading"
              subTitle={EstimatedTimeofLoading}
            />
            <BlAdminDetailModal title="FCL" subTitle={FCL} />
            <BlAdminDetailModal title="Gross Weight" subTitle={GrossWeight} />
            <BlAdminDetailModal title="Hazardous" subTitle={Hazardous} />
            <BlAdminDetailModal title="Hs Code" subTitle={HsCode} />
            <BlAdminDetailModal
              title="Inland Carriageat Discharge Country"
              subTitle={InlandCarriageatDischargeCountry}
            />
            <BlAdminDetailModal
              title="Inland Carriageat Loading Country"
              subTitle={InlandCarriageatLoadingCountry}
            />
            <BlAdminDetailModal
              title="Loading Port Country"
              subTitle={LoadingPortCountry}
            />
            <BlAdminDetailModal title="Notes" subTitle={Notes} />
            <BlAdminDetailModal title="Packaging" subTitle={Packaging} />
            <BlAdminDetailModal
              title="Preferred Discharge Port"
              subTitle={PreferredDischargePort}
            />
            <BlAdminDetailModal
              title="Preferred Loading Port"
              subTitle={PreferredLoadingPort}
            />
            <BlAdminDetailModal
              title="Shipper Address"
              subTitle={ShipperAddress}
            />
            <BlAdminDetailModal title="Shipper Name" subTitle={ShipperName} />
            <BlAdminDetailModal
              title="Shipper Registered Country"
              subTitle={ShipperRegisteredCountry}
            />
            <BlAdminDetailModal title="Volume" subTitle={Volume} />
          </div>
        </div>

        {isShowMessageModal && (
          <div className="absolute left-[5%] px-4 py-2 top-[10%] rounded-lg w-[300px] h-[300px] overflow-y-auto bg-slate-700">
            <div className="flex justify-end items-center">
              <div
                className="w-fit h-fit cursor-pointer text-white"
                onClick={showMessageModalHandler}
              >
                <CloseIcon />
              </div>
            </div>

            <div className="text-white text-xl">Message : </div>
            <p className="text-slate-300">{Response}</p>
            <div className="flex justify-center items-center gap-8 mt-10">
              <button
                className="bg-blue-600 rounded-md hover:bg-blue-700 t05 px-4 py-2 text-white"
                onClick={() => {
                  sendMessageHandler(3);
                }}
              >
                Accept
              </button>
              <button
                className="bg-red-600 rounded-md hover:bg-red-700 t05 px-4 py-2 text-white"
                onClick={() => {
                  sendMessageHandler(4);
                }}
              >
                Reject
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default RecivedRequestsItem;
