import React, { useEffect, useState } from "react";
import ShippingAdminPanel from "..";
import { axiosLocal } from "@/axios/config";
import { allGetedRequestsTypes } from "@/Types/RecivedBlType";
import { pages } from "next/dist/build/templates/app-page";
import RecivedRequestsItem from "../Components/RecivedRequestsItem/RecivedRequestsItem";

const pageSize = 5;

function index() {
  const [currentPage, setCurrentPage] = useState(1);
  const [updateState,setUpdateState] = useState(false)
  const [posts, setPosts] = useState<allGetedRequestsTypes>({
    RequestBLDTOs: [],
    PageCount: 0,
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAllRequests();
  }, [currentPage,updateState]);

  const getAllRequests = async () => {
    const data = {
      currentPage,
      pageSize,
    };
    await axiosLocal
      .post("/user/GetAllRequests", data)
      .then((res) => {
        if (res.status == 200) {
          setPosts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderPaginationButtons = () => {
    // const totalPages = Math.ceil(posts.RequestBLDTOs.length / pageSize);
    const totalPages = posts.PageCount as number;
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          className={` ${
            i === currentPage
              ? "bg-sky-600"
              : "bg-slate-200 !text-blue-600 hover:text-white"
          } text-white mx-2 p-4 rounded-lg hover:bg-sky-800 hover:!text-white transition-all cp`}
          onClick={() => handlePageChange(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  return (
    <ShippingAdminPanel>
      <div className=" w-full h-full px-20 py-8">
        <div className="my-6 text-lg text-white lg:text-2xl xl:text-4xl">
          All Requests
        </div>

        <div className="w-full h-[55vh] rounded-lg overflow-hidden bg-[#00000054]">
          <div className="h-full overflow-y-auto overflow-x-hidden relative ">
            <div className="w-full h-[7vh] sticky top-0 left-0 flex justify-around items-center bg-slate-300 font-semibold">

              <div className="fCenter w-1/5 text-gray-700 text-nowrap">Request Number</div>
              {/* <div className=" fCenter w-1/5 text-nowrap text-gray-700">
                Admin Message
              </div> */}
              <div className=" hidden md:!flex justify-center items-center w-1/5 text-gray-700">
                State
              </div>
              <div className="hidden md:!flex justify-center items-center w-1/5 text-gray-700">More Infos</div>
            </div>
            {posts.RequestBLDTOs.length > 0 &&
              posts.RequestBLDTOs.map((item: any) => (
                <RecivedRequestsItem key={item.Id} {...item} setUpdateState={setUpdateState} />
              ))}
          </div>
        </div>

        <div className="w-full flex justify-center py-10">
          {renderPaginationButtons()}
        </div>
      </div>
    </ShippingAdminPanel>
  );
}

export default index;
