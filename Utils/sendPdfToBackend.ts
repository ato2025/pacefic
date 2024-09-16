

export const sendPdfToBackend = (pdfBase64:any) => {
   // Example of sending PDF dAta to the backend using fetch API
   fetch('http://46.21.250.175:9090/api/BLInfo/CreatePdf', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ pdfBase64 }),
   })
   .then(response => {
     if (response.ok) {
       console.log('PDF sent to backend successfully.');
     } else {
       console.error('Failed to send PDF to backend.');
     }
   })
   .catch(error => {
     console.error('Error occurred while sending PDF to backend:', error);
   });
 };