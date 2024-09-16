import AdminSideBar from '@/Components/AdminSideBar/AdminSideBar';
import AdminTrackingIcon from '@/Components/Icons/AdminTrackingIcon/AdminTrackingIcon';
import AllBlsIcon from '@/Components/Icons/AllBlsIcon/AllBlsIcon';
import AllRequestsIcon from '@/Components/Icons/AllRequestsIcon/AllRequestsIcon';
import CreateNewBlIcon from '@/Components/Icons/CreateNewBlIcon/CreateNewBlIcon';
import UserPanelHeader from '@/Components/UserPanelHeader/UserPanelHeader'
import { setOpenItem } from '@/Store/Slices/NavBar/NavbarSlice';
import { setOpenModal, setRegistrationState } from '@/Store/Slices/Register/RegisterSlice';
import { useAppDispatch } from '@/Store/StoreConfigs';
import { axiosServer } from '@/axios/config';
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react'


type Props = {
   children: ReactNode;
 };

function index({ children }: Props) {
   const [openSideBar, setOpenSideBar] = useState<boolean>(false);
   const router = useRouter()
   const dispatch = useAppDispatch()
   const [isShowPage,setIsShowPage] = useState<boolean>(false)
   const userPanelSideBarItem = [
      { title: "All BLs", icon: <AllBlsIcon />, href: "/User-Panel/all-bls" },
     {
       title: "New BL Request",
       icon: <CreateNewBlIcon />,
       href: "/User-Panel/create-new-request",
     },
     {
       title: "Tracking",
       icon: <AdminTrackingIcon />,
       href: "/User-Panel/userPanel-tracking",
     },
     {
       title: "All Requests",
       icon: <AllRequestsIcon />,
       href: "/User-Panel/all-Requests",
     },
   ];
  
   useEffect(()=>{
 //  dispatch(changeTheme())
  const menuItem = router.pathname
 userPanelSideBarItem.forEach(itemm=>{
   if(itemm.href == menuItem){
     dispatch(setOpenItem({item:itemm.title}))
   }
 })

 const showPageFlg = localStorage.getItem('token')
showPageFlg ? setIsShowPage(true) : setIsShowPage(false)
   },[])

   const registerBtnHandler = ()=>{
    router.push('/')
    dispatch(setOpenModal())
    dispatch(setRegistrationState({item:'Login'}))
  }
  return (
    <>
      {
        isShowPage ? (
          <ThemeProvider>
          <div className="w-full h-[100vh] relative bg-BGseconday">
            <UserPanelHeader />
            <div className="w-full h-[93vh]  grid grid-cols-12 lg:grid-cols-24">
              <AdminSideBar
                openSideBar={openSideBar}
                setOpenSideBar={setOpenSideBar}
                menuItems={userPanelSideBarItem}
              />
              <div className={`${openSideBar ? "col-span-9 lg:col-span-21" : "col-span-11 lg:col-span-23"} h-[93vh] overflow-y-auto`}>
                {children}
              </div>
            </div>
          </div>
          </ThemeProvider>
        ):(
          <div className="w-full h-[90vh] bg-slate-800 flex justify-center items-center flex-col">
          <div className="text-3xl">Please Log in</div>
          <div>
            <button className="bg-blue-600 px-4 py-2 rounded-lg mt-8" onClick={registerBtnHandler}>Login</button>
            </div>
        </div>
        )

      }
      
    </>
  
  )
}

export default index