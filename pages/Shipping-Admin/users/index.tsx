import React, { useEffect, useState } from "react";
import ShippingAdminPanel from "..";
import AdminPanelUserListItem from "@/Components/AdminPanel-UserListItem/AdminPanelUserListItem";
import { axiosLocal } from "@/axios/config";
import { allGetedRequestsTypes, getAllUserItemType, getAllUserType } from "@/Types/RecivedBlType";

const pageSize = 5;
function Users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<getAllUserItemType>({Users:[],PageCount:0});
  const [updateState,setUpdateState] = useState<boolean>(false)
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getAllRequests()
  }, [currentPage,updateState]);



  const getAllRequests = async () => {
    const data = {
      currentPage,
      pageSize
    }
    await axiosLocal
      .post("/admin/getAllUsers",data)
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
    const totalPages =  posts.PageCount as number
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
          Users List
        </div>

        <div className="w-full h-[55vh] rounded-lg overflow-hidden bg-[#00000054]">
          <div className="h-full overflow-y-auto overflow-x-hidden relative ">
            <div className="w-full h-[7vh] sticky top-0 left-0 flex justify-around items-center bg-slate-300 font-semibold">
              <div className="fCenter">FullName</div>
              <div className="fCenter w-1/5">Email</div>
              <div className=" hidden md:!flex justify-center items-center">
                Submitted Bl's
              </div>
            </div>
            {posts.Users.length > 0 && posts.Users.map((item:any) => (
              <AdminPanelUserListItem key={item.Id} {...item}  />
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

export default Users;
