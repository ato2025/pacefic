import { useAppSelector } from '@/Store/StoreConfigs'
import React from 'react'

function ChevUpRightIcon() {
  const {theme} = useAppSelector(state=>state.theme)
  return (
   <svg width="20" height="20" viewBox="0 0 20 20" fill={`${theme == 'dark' ? "white" :"white"}`} xmlns="http://www.w3.org/2000/svg">
   <path d="M7.747 4.75313C7.747 5.2198 8.122 5.58647 8.58034 5.58647H13.2387L4.16367 14.6615C3.83867 14.9865 3.83867 15.5115 4.16367 15.8365C4.48867 16.1615 5.01367 16.1615 5.33867 15.8365L14.4137 6.76147V11.4198C14.4137 11.8781 14.7887 12.2531 15.247 12.2531C15.7053 12.2531 16.0803 11.8781 16.0803 11.4198V4.75313C16.0803 4.2948 15.7053 3.9198 15.247 3.9198H8.58034C8.122 3.9198 7.747 4.2948 7.747 4.75313Z" fill={`${theme == 'dark' ? "white" :"white"}`}/>
   </svg>
  )
}

export default ChevUpRightIcon