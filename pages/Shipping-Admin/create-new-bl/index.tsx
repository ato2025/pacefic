import React from "react";
import ShippingAdminPanel from "..";
import CreateBlItem from "@/Components/CreateBlItem/CreateBlItem";
import { useAppSelector } from "@/Store/StoreConfigs";
import CreateBlItemTextArea from "@/Components/CreateBlItemTextArea/CreateBlItemTextArea";
import axios from "axios";
import UploderInput from "@/Components/UploderInput/UploderInput";
import { axiosLocal } from "@/axios/config";
import Swal from "sweetalert2";

function Index() {
  const data = useAppSelector((state) => state.newBlInfos.newBlInfos);

  const { RequestBLId } = useAppSelector((data) => data.newBlInfos.newBlInfos);

  const handleSendToBackend = () => {
    console.log(data);

try {
  axiosLocal
  .post("/admin/createNewBl",data)
  .then((res) => {
    if(res.status == 200){
      Swal.fire({
        title:'Bl CreatedSuccessfuly',
        icon:'success'
      })
    }else if(res.status == 220){
      Swal.fire({
        title:'This Bl Number Already Exist',
        icon:'info'
      })
    }
   
  })
}catch(err){console.log(err)}
  };

  return (
    <>
      <ShippingAdminPanel>
        <div className="text-lg lg:text-2xl xl:text-4xl  ps-20 font-semibold text-blue-600 pt-10">
          Shipment Overview/Basic Information
        </div>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <CreateBlItem actionType={"Blnumber"} title={"B/L Number"} />
          <CreateBlItem actionType={"Shipper"} title={"Shipper"} />
          <CreateBlItem actionType={"ShipperTel"} title={"Shipper Tel"} />
          <CreateBlItemTextArea
            actionType={"ShipperAdress"}
            title={"Shipper Address"}
          />
          <CreateBlItem actionType={"Consignee"} title={"Consignee"} />
          <CreateBlItem actionType={"ConsigneeTel"} title={"Consignee Tel"} />
          <CreateBlItemTextArea
            actionType={"ConsigneeAddress"}
            title={"Consignee Address"}
          />
          <CreateBlItem actionType={"notifyparty"} title={"Notify Party"} />
          <CreateBlItem actionType={"Delivery"} title={"Delivery Agent"} />
          <CreateBlItem
            actionType={"DeliveryTel"}
            title={"Delivery Agent Tel"}
          />
          <CreateBlItemTextArea
            actionType={"DeliveryAddress"}
            title={"Delivery Agent Address"}
          />
          <CreateBlItem
            actionType={"DeliveryContactFax"}
            title={"Delivery Agent Fax"}
          />
          <CreateBlItem
            actionType={"DeliveryTelEmail"}
            title={"Delivery Agent Email"}
          />


          <CreateBlItem
            actionType={"LocalVessel"}
            title={"Local Vessel"}
          />
          <CreateBlItem
            actionType={"From"}
            title={"From"}
          />
          <CreateBlItem
            actionType={"ForTranshipmentTo"}
            title={"For Transhipment To"}
          />
          <CreateBlItem
            actionType={"Measurement"}
            title={"Measurement"}
          />
          <CreateBlItem
            actionType={"FrightAndChanges"}
            title={"Fright And Changes"}
          />
          <CreateBlItem
            actionType={"RevenueTons"}
            title={"Revenue Tons"}
          />
          <CreateBlItem
            actionType={"Per"}
            title={"Per"}
          />
          <CreateBlItem
            actionType={"Collect"}
            title={"Collect"}
          />
          <CreateBlItem
            actionType={"PrepaidAt"}
            title={"Prepaid At"}
          />
          <CreateBlItem
            actionType={"TotalPrepaid"}
            title={"Total Prepaid"}
          />






        </div>

        <div className="text-lg lg:text-2xl xl:text-4xl  ps-20 font-semibold text-blue-600 pt-10">
          Shipping Details
        </div>

        <div className="px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <CreateBlItem actionType={"Imo"} title={"IMO Number"} />
          <CreateBlItem actionType={"OceanVessel"} title={"Vessel Name"} />
          <CreateBlItem
            actionType={"PortOfDischarge"}
            title={"Port of Discharge"}
          />
          <CreateBlItem
            actionType={"PlaceOfReceipt"}
            title={"Place of Receipt"}
          />
          <CreateBlItem
            actionType={"PortOfLoading"}
            title={"Port of Loading"}
          />
          <CreateBlItem
            actionType={"PlaceOfDelivery"}
            title={"Place of Delivery"}
          />
          <CreateBlItem actionType={"VesselType"} title={"Vessel Type"} />
          <CreateBlItem
            actionType={"originPortOfDelivery"}
            title={"Origin Port"}
          />
          <CreateBlItem
            actionType={"finalDestination"}
            title={"Final Destination"}
          />
        </div>

        <div className="text-lg lg:text-2xl xl:text-4xl  ps-20 font-semibold text-blue-600 pt-10">
          Cargo Description/Marks and Numbers
        </div>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <CreateBlItemTextArea
            actionType={"MarksAndNumber"}
            title={"Marks And Number"}
          />
          <CreateBlItemTextArea
            actionType={"DescriptionOfGoods"}
            title={"Description Of Goods"}
          />

          <CreateBlItem actionType={"NoOfPkgs"} title={"No Of Pkgs"} />
          <CreateBlItem actionType={"GrossWt"} title={"Gross Wt"} />
          <CreateBlItem actionType={"Vol"} title={"Volume (CBM)"} />
          <CreateBlItem
            actionType={"TotalNumberOfPackages"}
            title={"Total Number Of Packages"}
          />

          <CreateBlItem actionType={"netWt"} title={"Net Wt. (KGS)"} />
          <CreateBlItem actionType={"packingType"} title={"Packaging Type"} />
        </div>

        <div className="text-lg lg:text-2xl xl:text-4xl  ps-20 font-semibold text-blue-600 pt-10">
          Freight Details
        </div>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <CreateBlItem actionType={"PayableAt"} title={"Payable At"} />
          <CreateBlItem
            actionType={"NoOfOriginalBl"}
            title={"No of Original Bl"}
          />
          <CreateBlItem actionType={"PlaceOfIssue"} title={"Place of Issue"} />
          <CreateBlItem actionType={"DateOfIssue"} title={"Date of Issue"} />
          <CreateBlItem actionType={"Express"} title={"Express"} />
          <CreateBlItem actionType={"Rate"} title={"Rate"} />
          <CreateBlItem actionType={"Prepaid"} title={"Prepaid"} />
          <CreateBlItem actionType={"DateOfOrdred"} title={"Date of Ordred"} />
          <CreateBlItem
            actionType={"DateOfDelivered"}
            title={"Date of Delivered"}
          />
          <CreateBlItem actionType={"insuranceNo"} title={"Insurance No."} />
          <CreateBlItem actionType={"etd"} title={"ETD"} />
          <CreateBlItem actionType={"Atd"} title={"ATD"} />
          <CreateBlItem actionType={"eta"} title={"ETA"} />
          <CreateBlItem actionType={"Ata"} title={"ATA"} />
          <CreateBlItemTextArea actionType={"Notes"} title={"Notes"} />
        </div>

        {/* <div className="text-lg lg:text-2xl xl:text-4xl  ps-20 font-semibold text-blue-600 pt-10">
          Extra Files
        </div>
        <div className="px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <UploderInput title="File1" actionType="File1" />
          <UploderInput title="File2" actionType="File2" />
          <UploderInput title="File3" actionType="File3" />
          <UploderInput title="File4" actionType="File4" />
          <UploderInput title="Pic1" actionType="Pic1" />
          <UploderInput title="Pic2" actionType="Pic2" />
        </div> */}
        <div className="w-full pb-10 flex justify-end items-center px-40">
          <button
            className="bg-blue-600 px-4 py-2 rounded-lg text-white"
            onClick={handleSendToBackend}
          >
            Submit
          </button>
        </div>
      </ShippingAdminPanel>
    </>
  );
}

export default Index;
