import React, { useState, ChangeEvent } from "react";
import ShippingAdminPanel from "..";
import CustomInput from "@/Components/CustomInput/CustomInput";
import { axiosLocal } from "@/axios/config";
import Swal from "sweetalert2";

const Index: React.FC = () => {
  const [blNumber, setBlNumber] = useState<string>("");
  const [fileBase64, setFileBase64] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileBase64((reader.result as string).split(',')[1]); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    const data = {
      Blnumber: blNumber,
      ImageBase64: fileBase64
    }
    

    axiosLocal.post("/admin/uploadScan",data)
    .then(res=>{
      if(res.status==200){
         Swal.fire({
            title:"uplodeded successfully",
            icon:"success"
         })
      }else{
         Swal.fire({
            title:"doesnt upload",
            icon:"error"
         })
      }
    })


  };

  return (
    <ShippingAdminPanel>
      <div className="w-full h-full px-20 py-8">
        <div className="my-6 text-lg text-white lg:text-2xl xl:text-4xl">
          Upload Scanned BL
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-8 mt-20">
          <CustomInput
            placeholder="BL Number"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setBlNumber(e.target.value);
            }}
            value={blNumber}
          />
          <CustomInput
            placeholder="Upload"
            type="file"
            onChange={handleFileChange}
          />
          <button
            className="bg-blue-700 hover:bg-sky-900 rounded-lg px-4 py-2 w-fit text-white"
            onClick={handleUpload}
          >
            Upload
          </button>
        </div>
      </div>
    </ShippingAdminPanel>
  );
}

export default Index;
