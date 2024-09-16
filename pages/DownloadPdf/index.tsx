import axios from 'axios';
import { useEffect, useState } from 'react';

function DownloadFile() {
   const [address,setAddress] = useState('')
  useEffect(() => {
    const downloadFile = async () => {
      try {
        
         await axios.get('http://46.21.250.175:9090/api/BLInfo/GetPdf')
         .then((res)=>{
            // setAddress(res.dAta)
            console.log(`http://46.21.250.175:9090${res.data}`)
         })

        
      
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    };
   
    downloadFile();
  }, []);
console.log(address)
  return <div>Downloading...</div>;
}

export default DownloadFile;
