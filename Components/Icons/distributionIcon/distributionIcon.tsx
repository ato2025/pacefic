import React from 'react'
type props = {
   className:string
}
function DistributionIcon({className}:props) {
  return (
   <svg className={className} viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
   <rect width="76" height="76" rx="8" fill="#594A99"/>
   <g clipPath="url(#clip0_484_17400)">
   <path d="M41.8705 51.5479C40.8034 51.5479 39.935 52.4163 39.935 53.4834C39.935 54.5505 40.8034 55.4189 41.8705 55.4189C42.9376 55.4189 43.806 54.5505 43.806 53.4834C43.806 52.4163 42.9376 51.5479 41.8705 51.5479ZM41.8705 54.1286C41.7044 54.1212 41.5476 54.0499 41.4326 53.9298C41.3177 53.8096 41.2536 53.6497 41.2536 53.4834C41.2536 53.3171 41.3177 53.1573 41.4326 53.0371C41.5476 52.9169 41.7044 52.8457 41.8705 52.8383C42.0366 52.8457 42.1935 52.9169 42.3084 53.0371C42.4233 53.1573 42.4875 53.3171 42.4875 53.4834C42.4875 53.6497 42.4233 53.8096 42.3084 53.9298C42.1935 54.0499 42.0366 54.1212 41.8705 54.1286ZM26.3867 51.5479C25.3196 51.5479 24.4512 52.4163 24.4512 53.4834C24.4512 54.5505 25.3196 55.4189 26.3867 55.4189C27.4538 55.4189 28.3221 54.5505 28.3221 53.4834C28.3221 52.4163 27.4538 51.5479 26.3867 51.5479ZM26.3867 54.1286C26.2205 54.1212 26.0637 54.0499 25.9488 53.9298C25.8338 53.8096 25.7697 53.6497 25.7697 53.4834C25.7697 53.3171 25.8338 53.1573 25.9488 53.0371C26.0637 52.9169 26.2205 52.8457 26.3867 52.8383C26.5528 52.8457 26.7096 52.9169 26.8245 53.0371C26.9395 53.1573 27.0036 53.3171 27.0036 53.4834C27.0036 53.6497 26.9395 53.8096 26.8245 53.9298C26.7096 54.0499 26.5528 54.1212 26.3867 54.1286ZM27.677 28.3221C28.7441 28.3221 29.6125 27.4538 29.6125 26.3867C29.6125 25.3196 28.7441 24.4512 27.677 24.4512C26.6099 24.4512 25.7415 25.3196 25.7415 26.3867C25.7415 27.4538 26.6099 28.3221 27.677 28.3221ZM27.677 25.7415C27.8048 25.7414 27.9297 25.7792 28.036 25.8501C28.1423 25.921 28.2252 26.0218 28.2741 26.1399C28.3231 26.2579 28.3359 26.3878 28.3111 26.5131C28.2862 26.6385 28.2246 26.7536 28.1343 26.844C28.0439 26.9343 27.9288 26.9958 27.8035 27.0207C27.6781 27.0456 27.5482 27.0328 27.4302 26.9838C27.3122 26.9349 27.2113 26.852 27.1404 26.7457C27.0695 26.6394 27.0317 26.5144 27.0318 26.3867C27.0318 26.0305 27.3215 25.7415 27.677 25.7415ZM53.4834 41.2254C52.4163 41.2254 51.5479 42.0938 51.5479 43.1608C51.5479 44.2279 52.4163 45.0963 53.4834 45.0963C54.5505 45.0963 55.4189 44.2279 55.4189 43.1608C55.4189 42.0938 54.5505 41.2254 53.4834 41.2254ZM53.4834 43.806C53.3173 43.7986 53.1605 43.7274 53.0455 43.6072C52.9306 43.487 52.8665 43.3271 52.8665 43.1608C52.8665 42.9946 52.9306 42.8347 53.0455 42.7145C53.1605 42.5943 53.3173 42.5231 53.4834 42.5157C53.6495 42.5231 53.8064 42.5943 53.9213 42.7145C54.0362 42.8347 54.1004 42.9946 54.1004 43.1608C54.1004 43.3271 54.0362 43.487 53.9213 43.6072C53.8064 43.7274 53.6495 43.7986 53.4834 43.806Z" fill="white"/>
   <path d="M54.1006 38.6923C54.1103 38.4613 54.129 38.2303 54.129 38C54.129 35.0594 53.3265 32.2006 51.8194 29.6968C52.4841 28.5301 52.8353 27.2111 52.8387 25.8684V25.7419C52.8387 21.4729 49.3658 18 45.0968 18C42.2335 18 39.7335 19.5665 38.3942 21.8839C35.8712 21.8285 33.3697 22.3592 31.0865 23.4342C30.6639 22.944 30.1407 22.5506 29.5524 22.2809C28.9641 22.0111 28.3246 21.8713 27.6774 21.871C25.1871 21.871 23.1613 23.8974 23.1613 26.3871C23.1633 27.3637 23.48 28.3137 24.0645 29.0961L24.3316 29.4523C22.8422 31.828 22.002 34.5529 21.8948 37.3548H20.5806C19.869 37.3548 19.2903 37.9335 19.2903 38.6452V51.5484C18.5787 51.5484 18 52.1271 18 52.8387V54.129C18 54.8406 18.5787 55.4194 19.2903 55.4194H22.3129C23.0394 56.9426 24.5903 58 26.3871 58C28.1839 58 29.7348 56.9426 30.4613 55.4194H37.7968C38.5232 56.9426 40.0742 58 41.871 58C43.6677 58 45.2187 56.9426 45.9452 55.4194H47.6774C48.389 55.4194 48.9677 54.8406 48.9677 54.129V52.3523C48.9677 52.1948 48.9484 52.0374 48.9103 51.8826L48.4974 50.231C49.4567 49.4082 50.3159 48.4756 51.0574 47.4523L53.4839 50.6884L57.0968 45.871C57.6814 45.0884 57.9981 44.1381 58 43.1613C58 40.8813 56.2994 38.9948 54.1006 38.6923ZM45.0968 19.2903C48.6542 19.2903 51.5484 22.1845 51.5484 25.7419V25.8677C51.5484 27.3065 51.0587 28.7226 50.1697 29.8535L45.0968 36.311L40.0239 29.8535C39.1325 28.716 38.6472 27.3129 38.6452 25.8677V25.7419C38.6452 22.1845 41.5394 19.2903 45.0968 19.2903ZM27.6774 23.1613C29.4561 23.1613 30.9032 24.6084 30.9032 26.3871C30.902 27.0847 30.6758 27.7632 30.2581 28.3219L27.6774 31.7632L25.0968 28.3219C24.6791 27.7632 24.4528 27.0847 24.4516 26.3871C24.4516 24.6084 25.8987 23.1613 27.6774 23.1613ZM20.5806 38.6452H25.7419V43.56L28.9677 41.9471L32.1935 43.56V38.6452H37.3548V51.5484H30.4613C29.7348 50.0252 28.1839 48.9677 26.3871 48.9677C24.5903 48.9677 23.0394 50.0252 22.3129 51.5484H20.5806V38.6452ZM27.0323 38.6452H30.9032V41.4723L28.9677 40.5045L27.0323 41.4723V38.6452ZM38.6452 42.5161H44.7342C44.878 42.5161 45.0177 42.5642 45.1311 42.6527C45.2445 42.7412 45.3251 42.865 45.36 43.0045L45.5606 43.8064H42.5161C41.8045 43.8064 41.2258 44.3852 41.2258 45.0968V46.3871C41.2258 47.0987 41.8045 47.6774 42.5161 47.6774H46.5284L47.4961 51.5484H45.9452C45.2187 50.0252 43.6677 48.9677 41.871 48.9677C40.6077 48.9677 39.4658 49.4903 38.6452 50.3297V42.5161ZM46.2058 46.3871H42.5161V45.0968H45.8832L46.2058 46.3871ZM19.2903 54.129V52.8387H21.9226C21.8923 53.0503 21.871 53.2645 21.871 53.4839C21.871 53.7032 21.8923 53.9174 21.9226 54.129H19.2903ZM26.3871 56.7097C24.6084 56.7097 23.1613 55.2626 23.1613 53.4839C23.1613 51.7052 24.6084 50.2581 26.3871 50.2581C28.1658 50.2581 29.6129 51.7052 29.6129 53.4839C29.6129 55.2626 28.1658 56.7097 26.3871 56.7097ZM30.8516 54.129C30.8819 53.9174 30.9032 53.7032 30.9032 53.4839C30.9032 53.2645 30.8819 53.0503 30.8516 52.8387H37.4065C37.3761 53.0503 37.3548 53.2645 37.3548 53.4839C37.3548 53.7032 37.3761 53.9174 37.4065 54.129H30.8516ZM41.871 56.7097C40.0923 56.7097 38.6452 55.2626 38.6452 53.4839C38.6452 51.7052 40.0923 50.2581 41.871 50.2581C43.6497 50.2581 45.0968 51.7052 45.0968 53.4839C45.0968 55.2626 43.6497 56.7097 41.871 56.7097ZM46.3355 54.129C46.3658 53.9174 46.3871 53.7032 46.3871 53.4839C46.3871 53.2645 46.3658 53.0503 46.3355 52.8387H47.6774V54.129H46.3355ZM48.1452 48.8226L46.6123 42.6916C46.5077 42.2727 46.266 41.9009 45.9257 41.6352C45.5853 41.3696 45.1659 41.2255 44.7342 41.2258H38.6452V38.6452C38.6452 37.9335 38.0665 37.3548 37.3548 37.3548H23.1845C23.283 34.9635 23.9621 32.6321 25.1632 30.5619L27.6774 33.9142L31.2903 29.0968C31.875 28.3142 32.1917 27.364 32.1935 26.3871C32.1931 25.7447 32.0545 25.1099 31.7871 24.5258C33.6735 23.6508 35.7246 23.1877 37.8039 23.1671C37.5087 23.9936 37.3568 24.8644 37.3548 25.7419V25.8677C37.3548 27.5948 37.9426 29.2942 39.009 30.651L45.0968 38.3987L51.0129 30.869C52.2124 33.0543 52.8404 35.5072 52.8387 38C52.8387 38.2329 52.8206 38.4671 52.8103 38.7013C50.6394 39.0284 48.9677 40.9006 48.9677 43.1613C48.9697 44.1379 49.2865 45.0879 49.871 45.8703L50.2432 46.3671C49.6351 47.2594 48.9316 48.0827 48.1452 48.8226ZM56.0645 45.0961L53.4839 48.5374L50.9032 45.0961C50.4855 44.5374 50.2593 43.8589 50.2581 43.1613C50.2581 41.3826 51.7052 39.9355 53.4839 39.9355C55.2626 39.9355 56.7097 41.3826 56.7097 43.1613C56.7085 43.8589 56.4822 44.5374 56.0645 45.0961Z" fill="white"/>
   <path d="M45.0963 30.9027C47.9421 30.9027 50.2576 28.5872 50.2576 25.7414C50.2576 22.8956 47.9421 20.5801 45.0963 20.5801C42.2505 20.5801 39.935 22.8956 39.935 25.7414C39.935 28.5872 42.2505 30.9027 45.0963 30.9027ZM45.0963 21.8704C47.2311 21.8704 48.9673 23.6065 48.9673 25.7414C48.9673 27.8762 47.2311 29.6123 45.0963 29.6123C42.9615 29.6123 41.2253 27.8762 41.2253 25.7414C41.2253 23.6065 42.9615 21.8704 45.0963 21.8704ZM33.4834 34.7736H34.7737V36.0639H33.4834V34.7736ZM36.064 34.7736H37.3544V36.0639H36.064V34.7736ZM38.6447 34.7736H39.935V36.0639H38.6447V34.7736Z" fill="white"/>
   </g>
   <defs>
   <clipPath id="clip0_484_17400">
   <rect width="40" height="40" fill="white" transform="translate(18 18)"/>
   </clipPath>
   </defs>
   </svg>
   
  )
}

export default DistributionIcon