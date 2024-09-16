import React, { useState } from "react";
import Ellipsis3 from "../Icons/Ellipsis3/Ellipsis3";
import CloseIcon from "../Icons/CloseIcon/CloseIcon";
import BlAdminDetailModal from "../BlAdminDetailModal/BlAdminDetailModal";
import { RecivedBlTypes } from "@/Types/RecivedBlType";
import { useAppDispatch } from "@/Store/StoreConfigs";
import { setBlItem } from "@/Store/Slices/NewBlGebInfos/NewBlGebInfos";
import { useRouter } from "next/router";
import { axiosLocal } from "@/axios/config";
import Swal from "sweetalert2";

function RecivedBlsTableItem({
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
  setUpdateState
}: RecivedBlTypes) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isShowMessageModal, setIsShowMessageModal] = useState(false);
  const [message,setMessage] = useState('')
  const showMoreInfos = () => {
    setShowModal((prev) => !prev);
  };
  const router = useRouter();
  const dispatch = useAppDispatch();
  const createBlHandler = () => {
    dispatch(setBlItem({ type: "RequestBLId", payload: String(Id) }));
    router.push("/Shipping-Admin/create-new-bl");
  };
 
  const handleAdminMessageModal = () => {
    setIsShowMessageModal(prev=>!prev)
  };
  const sendMessageHandler = () => {
    const data = {
      Id,
      Response:message
    }
    axiosLocal.post('/admin/adminSendMessage',data)
    .then(res=>{
      if(res.status == 200){
        requestStateHandler(2)
            setMessage('')
            handleAdminMessageModal()
            showMoreInfos()
            setShowModal(false)
            setUpdateState((prev: boolean) =>!prev)
        Swal.fire({
          title:'Message Sent Successfully',
          icon:'success'
        })
      }
    })
    .catch(err=>{
      Swal.fire({
        title:'error',
        icon:'error'
      })
    })
  };

  const requestStateHandler =(State:number)=>{
    const data = {
      Id,
      State
    };
    axiosLocal
      .post("/user/UpdateRequestState", data)
      .then((res) => {
        if (res.status == 200) {
          // showMoreInfos()
          // Swal.fire({
          //   title: "Message Sent Successfully",
          //   icon: "success",
          // })
        }
      })
      .catch((err) => {
        // Swal.fire({
        //   title: "error",
        //   icon: "error",
        // });
      });
  }

  return (
    <>
      <div className="!overflow-x-hidden ">
        <div className="w-full h-[7vh] flex justify-around items-center bg-slate-500 my-3 font-semibold text-stone-300">
          <div className="fCenter">#</div>
          <div className="fCenter w-1/5">sajjad</div>
          <div className=" hidden md:!flex justify-center items-center">
            {CreateDate}
          </div>
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
          <div className="fCenter w-1/5">
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
            <div>
              <div>Action</div>
              <div>
                <button
                  onClick={createBlHandler}
                  className="bg-green-600 text-white  px-4 py-2 rounded-lg mx-3 my-7"
                >
                  {" "}
                  Create Bl
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg mx-3 my-7" onClick={()=>{requestStateHandler(4)}}>
                  Reject
                </button>
                {/* {
                  State == 'Inprogress' && (
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-3 my-7" onClick={handleAdminMessageModal}>
                  Message
                </button>
                  )
                } */}
                
              </div>
            </div>
          </div>
        </div>

        {/* {isShowMessageModal && (
          <div
            className="absolute w-[300px] h-[300px] left-[30%] bottom-0
                   bg-[#2d4677] z-[9999] rounded-lg overflow-y-auto"
          >
            <div className="text-white flex justify-end items-center p-2">
              <div
                className="w-fit h-fit cursor-pointer"
                onClick={handleAdminMessageModal}
              >
                <CloseIcon />
              </div>
            </div>
            <div className="text-white px-4">please enter your message</div>
            <textarea className="bg-transparent border w-[250px] px-4 py-2 border-white mx-4 rounded-md my-5" value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            <div className="flex justify-end px-4">
              <button className="bg-blue-500 px-4 py-2 rounded-lg mt-10 text-white" onClick={sendMessageHandler} >
                Send
              </button>
            </div>
          </div>
        )} */}
      </div>
    </>
  );
}

export default RecivedBlsTableItem;
