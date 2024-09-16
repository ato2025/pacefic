import React from 'react'
import DownloadIcon from '../Icons/DownloadIcon/DownloadIcon'
import { BlinfoUserSummary, allGetedUsersTypes } from '@/Types/RecivedBlType'

function UserListBLsModalItem({BLUrl,Blnumber}:BlinfoUserSummary) {
  return (
   <div className="w-full flex justify-between items-center px-2 text-white my-5 border-b border-white py-3">
   <div>{Blnumber}</div>
   <div className="text-red-600 w-fit h-fit cp">
   <a className="w-fit h-fit cp" href={`http://46.21.250.175:9090/media/bl/${BLUrl}`} target="_blank">
      <DownloadIcon />
    </a>
   </div>
 </div>
  )
}

export default UserListBLsModalItem