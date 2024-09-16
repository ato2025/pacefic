import React, { useState } from 'react'
import UserPanel from './../index'
import OTPInput from '@/Components/OtpInput/OtpInput';
import { axiosLocal } from '@/axios/config';


type Detail = {
  UserFullName: string;
  CreateDate: string;
  Shipper: string;
  Consignee: string;
  BLUrl: string;
  ImageUrl:string
};
function userPanelTracking() {
  const [detail, setDetail] = useState<Detail>({UserFullName:'',BLUrl:'',Consignee:'',CreateDate:'',Shipper:'',ImageUrl:''});
  const [BlNumber,setBlNumber] = useState('')
  const handleTracking = () => {
    axiosLocal.post('/tracking',{BlNumber})
      .then((res) => {
        if (res.status == 200) {
          setDetail(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <UserPanel>
        <div className="w-full h-[93vh]">
        <div className="px-20 text-blue-500 text-2xl lg:text-4xl font-bold pt-28">
          Track BL :
        </div>
        <div className="w-7/12 pt-20 lex justify-center items-center  mx-auto">
          <OTPInput
            autoFocus
            //      isNumberInput
            length={13}
            className="flex justify-between items-center w-full flex-wrap  group-focus-within:text-golden-light "
            inputClassName="group-focus-within:text-golden-light border focus:border-2 border-golden w-10 h-12 text-center focus:border-golden outline-none rounded-md bg-gray-900 text-white  opacity-50"
            onChangeOTP={(otp) => {
              setBlNumber(otp);
            }}
          />
        </div>
        <div className="flex justify-end items-center mt-10 pe-48">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all font-semibold" onClick={handleTracking}>
            Go
          </button>
        </div>


{
  detail.BLUrl  && (
<div>

          <div className="px-4 lg:px-24 flex justify-start items-center mt-5">
            <div className=" text-2xl text-white">Created Date :</div>
            <div className="text-gray-400 text-xl lg:text-2xl ms-5">{detail.CreateDate}</div>
          </div>
          <div className="px-4 lg:px-24 flex justify-start items-center mt-5">
            <div className=" text-2xl text-white">Shipper :</div>
            <div className="text-gray-400 text-xl lg:text-2xl ms-5">
              {detail.Shipper}
            </div>
          </div>
          <div className="px-4 lg:px-24 flex justify-start items-center mt-5">
            <div className=" text-2xl text-white">Consignee :</div>
            <div className="text-gray-400 text-xl lg:text-2xl ms-5">{detail.Consignee}</div>
          </div>
          <div className="px-4 lg:px-24 flex justify-start items-center mt-9">
            <div className=" text-2xl text-white">Bl  :</div>
            <a
              href={`http://46.21.250.175:9090/media/bl/img/${detail.ImageUrl}`}
              target="_blank"
              className="text-red-400 text-xl lg:text-xl ms-5"
            >
              <img src={`http://46.21.250.175:9090/media/bl/img/${detail.ImageUrl}`} className="w-[100px] rounded-lg" alt="" />
            </a>
          </div>
        </div>
  )
}
        
      </div>
    </UserPanel>
  )
}

export default userPanelTracking