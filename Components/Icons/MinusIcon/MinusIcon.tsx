import { useAppSelector } from '@/Store/StoreConfigs'
import React from 'react'

function MinusIcon() {
  const {theme} = useAppSelector(state=>state.theme)
  return (
   <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M5 12H19" stroke={theme=='dark'?"white":"black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
   </svg>
   
  )
}

export default MinusIcon