import React, { useState } from "react";
import UserPanel from "./../index";
import CreateBlRequestItem from "@/Components/CreateBlRequestItem/CreateBlRequestItem";
import CreateBlRequestItemTextArea from "@/Components/CreateBlRequestItemTextArea/CreateBlRequestItemTextArea";
import Dropdown from "@/Components/DropDown/DropDown";
import { setBlRequestItem } from "@/Store/Slices/RequestBl/RequestBlSlice";
import { useAppDispatch, useAppSelector } from "@/Store/StoreConfigs";
import { axiosLocal, axiosServer } from "@/axios/config";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

interface Option {
  label: string;
  value: string;
  title: string;
}

const cargoTypeOptions = [
  { label: "RF Container 20ft.", value: "1", title: "CargoType" },
  { label: "GP Container 20ft.", value: "1", title: "CargoType" },
  { label: "HQ Container 20ft.", value: "1", title: "CargoType" },
  { label: "GP Container 40ft.", value: "1", title: "CargoType" },
  { label: "HQ Container 40ft.", value: "1", title: "CargoType" },
  { label: "ISO Tank 20 ft.", value: "1", title: "CargoType" },
  { label: "ISO Tank 40 ft.", value: "1", title: "CargoType" },
  { label: "Flexi Tank", value: "1", title: "CargoType" },
  { label: "Solid Bulk", value: "1", title: "CargoType" },
];

function CreateNewRequest() {
  const [dropDownItem, setDropDownItem] = useState<string>("");
  const dispatch = useAppDispatch();
  const { requestBlInfos } = useAppSelector((date) => date.requestBl);
  const [showText, setShowText] = useState(false);

  const handleSelectOption = (option: Option) => {
    setDropDownItem(option.value);
    dispatch(setBlRequestItem({ type: option.title, payload: option.label }));
  };
const router = useRouter()
  const submitHandler = () => {
    axiosLocal.post('/user/createNewReq',requestBlInfos)
    .then(res=>{
      if(res.status == 201){
        setShowText(true);
        Swal.fire({
          title:'Request Has Sent Successfully',
          icon:"success"
        }).then(response=>{
          if(response.isConfirmed){
            router.push('/User-Panel/all-Requests')
          }
        })
      }
    })
    .catch(err=>{
      console.log(err)
    })

  };
  return (
    <UserPanel>
      <div>
        <div className="text-lg lg:text-2xl xl:text-4xl  ps-20 font-semibold text-blue-600 pt-10">
          PLease Fill The Request Form
        </div>
        <div className="px-20 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <CreateBlRequestItem
            actionType={"ShipperName"}
            title={"Shipper Name"}
          />
          <CreateBlRequestItemTextArea
            actionType={"ShipperAddress"}
            title={"Shipper Address"}
          />
          <CreateBlRequestItem
            actionType={"ConsigneName"}
            title={"Consigne Name"}
          />
          <CreateBlRequestItemTextArea
            actionType={"ConsigneAddress"}
            title={"Consigne Address"}
          />
          <CreateBlRequestItem
            actionType={"ShipperRegisteredCountry"}
            title={"Shipper Registered Country"}
          />
          <CreateBlRequestItem
            actionType={"ConsigneeRegisteredCountry"}
            title={"Consignee Registered Country"}
          />
          <CreateBlRequestItemTextArea
            actionType={"DescriptionofGoods"}
            title={"Description of Goods"}
          />
          <CreateBlRequestItem actionType={"HsCode"} title={"Hs Code"} />
          <CreateBlRequestItem actionType={"Volume"} title={"Volume"} />
          <CreateBlRequestItem
            actionType={"GrossWeight"}
            title={"Gross Weight"}
          />
          <CreateBlRequestItemTextArea
            actionType={"Packaging"}
            title={"Packaging"}
          />

          <Dropdown
            options={[
              { label: "Yes", value: "1", title: "Hazardous" },
              { label: "No", value: "0", title: "Hazardous" },
            ]}
            onSelect={handleSelectOption}
            mainTitle="Hazardous"
          />
          <Dropdown
            options={[
              { label: "Yes", value: "1", title: "FCL" },
              { label: "No", value: "0", title: "FCL" },
            ]}
            onSelect={handleSelectOption}
            mainTitle="FCL/FCL"
          />
          <Dropdown
            options={cargoTypeOptions}
            onSelect={handleSelectOption}
            mainTitle="Cargo Type"
          />
          <CreateBlRequestItem
            actionType={"LoadingPortCountry"}
            title={"Loading Port Country"}
          />
          <CreateBlRequestItem
            actionType={"PreferredLoadingPort"}
            title={"Preferred Loading Port"}
          />
          <CreateBlRequestItem
            actionType={"DestinationPortCountry"}
            title={"Destination Port Country"}
          />
          <CreateBlRequestItem
            actionType={"PreferredDischargePort"}
            title={"Preferred Discharge Port"}
          />
          <CreateBlRequestItem
            actionType={"EstimatedTimeofLoading"}
            title={"Estimated Time of Loading"}
          />
          <Dropdown
            options={[
              {
                label: "Yes",
                value: "1",
                title: "InlandCarriageatLoadingCountry",
              },
              {
                label: "No",
                value: "0",
                title: "InlandCarriageatLoadingCountry",
              },
            ]}
            onSelect={handleSelectOption}
            mainTitle="Inland Carriageat Loading Country"
          />
          <Dropdown
            options={[
              {
                label: "Yes",
                value: "1",
                title: "InlandCarriageatDischargeCountry",
              },
              {
                label: "No",
                value: "0",
                title: "InlandCarriageatDischargeCountry",
              },
            ]}
            onSelect={handleSelectOption}
            mainTitle="Inland Carriageat Discharge Country"
          />
          <CreateBlRequestItem
            actionType={"ActualDischargePlace"}
            title={"Actual Discharge Place"}
          />
          <CreateBlRequestItem
            actionType={"ActualLoadingPlace"}
            title={"Actual Loading Place"}
          />

          <CreateBlRequestItemTextArea actionType={"Notes"} title={"Notes"} />
        </div>
        <div className="px-20 pb-10 flex justify-end items-center">
          <button
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
        {showText && (
          <p className="text-white px-20 pb-20">
            Thank you for your inquiry. We will review your request and get back
            to you within Three working days.
          </p>
        )}
      </div>
    </UserPanel>
  );
}

export default CreateNewRequest;
