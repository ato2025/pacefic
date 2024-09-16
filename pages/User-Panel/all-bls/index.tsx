import React, { useEffect, useState } from 'react'
import UserPanel from './../index'
import { axiosLocal } from '@/axios/config';
import AllBlsTableRow from '@/Components/AllBlsTableRow/AllBlsTableRow';
import { allGetedBlsTypes } from '@/Types/RecivedBlType';

const pageSize = 5;
function allbls() {

  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<allGetedBlsTypes>({InfoReadDTOs:[],Total:0});


  const fetchPosts = async () => {
   axiosLocal.post('/user/getAllBls',{  CurrentPage: currentPage,
   PageSize: pageSize})
   .then(res=>{
    if(res.status == 200 && Array.isArray(res.data.InfoReadDTOs)){
      setPosts(res.data)
    }
   })
   .catch(err=>{
    console.log(err)
   })
  };

  useEffect(()=>{
    fetchPosts()
  },[currentPage])


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // fetchPosts();
  };

 
  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(Number(posts.Total) / pageSize);
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} className={` ${i === currentPage ? 'bg-sky-600':'bg-slate-200 !text-blue-600 hover:text-white'} text-white mx-2 p-4 rounded-lg hover:bg-sky-800 hover:!text-white transition-all cp`} onClick={() => handlePageChange(i)} disabled={i === currentPage}>
          {i}
        </button>
      );
    }
    return buttons;
  };


  return (
      <UserPanel>
    <div className=" w-full h-full px-20 py-8">
      <div className="my-6 text-lg text-white lg:text-2xl xl:text-4xl">All BLs</div>


        <div className="w-full h-[55vh] rounded-lg overflow-hidden bg-[#00000054]">
          <div className="h-full overflow-y-auto overflow-x-hidden relative ">
            <div className="w-full h-[7vh] sticky top-0 left-0 flex justify-around items-center text-black bg-slate-300 font-semibold">
              <div className="fCenter w-1/5 lg:w-1/6 text-nowrap">Bl Number</div>
              <div className=" hidden lg:!flex justify-center items-center text-nowrap">Shipper</div>
              <div className=" hidden lg:!flex justify-center items-center text-nowrap">Consignee</div>
              <div className=" hidden lg:!flex justify-center items-center w-1/5 text-nowrap">Date Of Ordred</div>
              <div className=" hidden lg:!flex justify-center items-center w-1/5">File</div>
              <div className=" w-1/6 flex lg:!hidden justify-center items-center">More </div>
            </div>
            {
             posts.InfoReadDTOs.map((item:any,index)=>(
              <AllBlsTableRow key={index} {...item} />
             ))
            }

      
            
            
          </div>
        </div>

        <div className="w-full flex justify-center py-10">
        {renderPaginationButtons()}
      </div>


      </div>
      </UserPanel>
  )
}

export default allbls