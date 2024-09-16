import React, { useEffect, useState } from "react";
import { Margin, usePDF } from "react-to-pdf";
import QRCodee from "../../Components/QrCode/QrCode";
import PdfBox from "../../Components/PdfBox/PdfBox";
import LogoSvgCode from "../Icons/LogoSvgCode/LogoSvgCode";
import { useAppSelector } from "@/Store/StoreConfigs";
function NewPdf() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [downloadPdf,setDownloadPdf] = useState<boolean>(false)

const {DateOfIssue,DateOfOrdred,Delivery,DeliveryContactFax,DeliveryTel,DeliveryTelEmail,DescriptionOfGoods,Express,GrossWt,Imo,MarksAndNumber,NoOfOriginalBl,NoOfPkgs,Notes,NotifyParty,OceanVessel,PayableAt,PlaceOfDelivery,PlaceOfIssue,PortOfDischarge,PortOfLoading,Prepaid,Rate,TotalNumberOfPackages,Vol,Blnumber,Consignee,ConsigneeAddress,ConsigneeTel,PlaceOfReceipt,Shipper,ShipperAdress,ShipperTel} = useAppSelector(state=>state.newBlInfos.newBlInfos)

  const options = {
    page: {
      // margin is in MM, default is Margin.NONE = 0
      margin: Margin.SMALL,
      // default is 'A4'
      format: "A4",
      // default is 'portrait'
      orientation: "portrait",
    },
  };
  useEffect(()=>{
    setDownloadPdf(true)
  },[])
  const getTargetElement = () => document.getElementById("content-id");
   downloadPdf && toPDF()
  return (
    <div className="mt-28" style={{ minWidth: "1000px" }}>
      {/* <button onClick={() => toPDF()}>Download PDF</button> */}
      <div ref={targetRef} className="py-5 overflow-x-auto px-20">
        <div className="flex justify-center text-3xl items-center font-semibold my-20">
          COMBINED TRANSPORT BILL OF LADING
        </div>
        <div className="grid grid-cols-2 border-b border-black ">
          <div className="border-e border-black pb-10">
            <div className="flex justify-between items-center border-black border-b  px-4 py-1">
              <div className="blSectionTitle">B/L Number</div>
              <div className="me-10 font-semibold text-xl">{Blnumber}</div>
            </div>
            <div className="border-b px-4 pb-2 border-black">
              <div className="blSectionTitle">Shipper</div>
              <div className="w-1/2 pdf-md-title">
                <div>{Shipper}</div>
                <div>{ShipperAdress}</div>
                <div>{ShipperTel}</div>
              </div>
            </div>
            <div className="border-b px-4 pb-2 border-black">
              <div className="blSectionTitle">Consignee</div>
              <div className="w-1/2 pdf-md-title">
                <div>{Consignee}</div>
                <div>{ConsigneeAddress}</div>
                <div>{ConsigneeTel}</div>
              </div>
            </div>
            <div className=" h-full px-4 pb-2 border-black">
              <div className="blSectionTitle">
                Notify Party(no Claim shall attach for failure to notify)
              </div>
              <div className="w-1/2 pdf-md-title">Same as Consignee</div>
            </div>
          </div>

          <div className=" pb-10">
            <div className="grid grid-cols-2 ">
              <div className="flex justify-center items-center">
                <QRCodee value={`http://localhost:3000/${Blnumber}`} />
              </div>
              <div>
                <LogoSvgCode />
              </div>
            </div>
            <div className="flex justify-between items-center px-4 my-2">
              <div className="text-xl">Trade Licence No.542329</div>
              <div className="text-xl">Commercial Register No. 61832</div>
            </div>
            <div className="text-center blSectionTitle">
              Ocean Bill Of Landing
            </div>
            <p className="px-4 text-base py-2">
              SHIPPED in apparent good order and condition, unless otherwise
              stated herein, weight, measure, marks, numbers, quality, contents
              and value unknown , by named Shipper for carriage to named port of
              discharge or so near thereunto as the vessel may safely get,
              always afloat , the foregoing goods which are to be delivered in
              the like order and condition at the named port of discharge or any
              substitute port or place of discharge as herein provided either to
              the on-carrier pursuant to Clause 7, if forwarding to final
              destination is herein expressly indicated , or if not to named
              Consignee or his or their Assigns, he or they paying freight as
              per note on the margin plus other charges incurred in accordance
              with the provision contained in this Bill of Lading. In accepting
              this Bill of Lading, the Merchant expressly accepts and agrees to
              all stipulations , exceptions and conditions, whether written,
              printed, stamped or otherwise incorporated, as fully as if they
              were all signed by the Merchant. The stipulations , exceptions and
              conditions printed on the back hereof (which are also accessible
              at www.http://www.atlanticshipping.sg are part of this Bill of
              Lading . One original Bill of Lading must be surrendered duly
              endorsed in exchange for the goods or delivery order. One being
              accomplished the others stand void.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 border-b">
          <div className="grid grid-cols-2 ">
            <div className="border-e border-black">
              <PdfBox border={true} title="Imo" subTitle={Imo} />
              <PdfBox
                border={true}
                title="Ocean Vessel"
                subTitle={OceanVessel}
              />
              <PdfBox
                border={false}
                title="Port Of Discharge"
                subTitle={PortOfDischarge}
              />
            </div>
            <div className="border-e border-black">
              <PdfBox
                border={true}
                title="Place Of Recipt"
                subTitle={PlaceOfReceipt}
              />
              <PdfBox
                border={true}
                title="Port Of Loading"
                subTitle={PortOfLoading}
              />
              <PdfBox
                border={false}
                title="Port Of Delivery"
                subTitle={PlaceOfDelivery}
              />
            </div>
          </div>

          <div>
            <div>
              <div className={`  px-4 pb-2 border-black h-full`}>
                <div className="blSectionTitle">
                  For Delivery Please Contact
                </div>
                <div className="pdf-md-title">
                  {Delivery}
                </div>
                <div className="pdf-md-title">
                  {DeliveryContactFax}
                </div>
                <div className="pdf-md-title">
                  {DeliveryTelEmail}
                </div>
                <div className="pdf-md-title">Tel:{DeliveryTel}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 border-t border-black">
          <div className="col-span-2 border-e border-b border-black py-2">
            <div>
              <div className="text-base font-semibold text-center border-b border-black pt-2 pb-5 blSectionTitle ">
                Marks & Numbers
              </div>
              <div className="text-sm  py-2 text-center relative">
                {
                  MarksAndNumber.split('\n').map((item,index)=>(
                    MarksAndNumber.split('\n').length -1 == index ? (<div className="mb-10 pdf-md-title mt-2" key={index}>{item}</div>)  : (<div className="pdf-md-title mt-2" key={index}>{item}</div>)

                  ))
                }


                <div className="absolute bottom-0 w-full left-0 pdf-md-title">
                  Freight Charges, Etc.
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 border-e border-b border-black py-2">
            <div>
              <div className="text-base font-semibold text-center border-b border-black pt-2 pb-5 blSectionTitle">
                No. Of Packages
              </div>
              <div className="text-sm  h-fit py-2 text-center pdf-md-title">
               {NoOfPkgs}
              </div>
            </div>
          </div>

          <div className="col-span-3 border-e border-b border-black py-2">
            <div>
              <div className="text-base font-semibold text-center border-b border-black py-2 blSectionTitle pt-2 pb-5">
                Description goods & Packages
              </div>
              <div className="text-sm  h-fit py-2 px-4">
                {
                  DescriptionOfGoods.split('\n').map((item,index)=>(
                    <div className="pdf-md-title my-2" key={index}>{item}</div>
                  ))
                }
               
              </div>
              <div className="  w-full py-2 pdf-md-title">
                ALL CHARGES HAS BEEN PREPAID BY THE Shipper AT THE LOADING PORT
              </div>
            </div>
          </div>

          <div className="col-span-1 border-e border-b border-black py-2">
            <div>
              <div className="text-base font-semibold text-center border-b border-black py-2 blSectionTitle pt-2 pb-5">
                Gross Wt. (KGS)
              </div>
              <div className="text-sm h-fit py-2 pdf-md-title text-center">{GrossWt}</div>
            </div>
          </div>
          <div className="col-span-1 border-b border-black py-2">
            <div>
              <div className="text-base font-semibold text-center border-b border-black py-2 blSectionTitle pt-2 pb-5">
                VOl(CBM)
              </div>
              <div className="text-sm h-fit py-2 pdf-md-title">{Vol}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 border-b border-black">
          <div className="col-span-2">
            <div className="text-base blSectionTitle font-semibold text-center border-b border-e border-black pt-2 pb-5">
              Description
            </div>
            <div className="!border-e !border-black text-center h-10 w-full"></div>
            <div className="w-full h-10 border-e border-black border-t"></div>
          </div>
          <div className="col-span-1">
            <div className="text-base blSectionTitle font-semibold text-center border-b border-e border-black pt-2 pb-5">
              Rate
            </div>
            <div className="!border-e   !border-black text-center h-10 w-full"></div>
            <div className="w-full h-10 border-e border-black border-t"></div>
          </div>
          <div className="col-span-3">
            <div className="text-base blSectionTitle font-semibold text-center border-b border-e border-black pt-2 pb-5">
              PrePaid
            </div>
            <div className="!border-e !border-black  h-10 w-full pdf-md-title flex justify-center items-center">
              x
            </div>
            <div className="w-full h-10 border-e border-black border-t">
            INSURANCE CLAUSE A, INSURANCE NO.:
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-base blSectionTitle font-semibold text-center border-b  border-black pt-2 pb-5">
              Collect
            </div>
            <div className=" !border-black text-center h-10 w-full"></div>
            <div className="w-full h-10  border-black border-t"></div>
          </div>
        </div>

        <div className="grid grid-cols-8 border-b border-black">
          <div className="col-span-3 py-1 px-4 border-e border-black">
            <div className="text-center text-base font-semibold w-full capitalize blSectionTitle">
              jurisdication and law clause
            </div>
            <p className="text-lg py-4">
              The contract evidenced by this Bill of Lading is between the
              Merchant and the owner or demise charterer , in case of demise
              charter , of the vessel named herein (or substitute ) and it is
              therefore agreed that said shipowner or demise charterer is the
              carrier and shall alone be liable for any damage or loss due to
              any breach or non -performance of any obligation arising out of
              the contract of carriage, whether or not relating to the vessel’s
              seaworthiness . If, despite the foregoing , it is adjudged that
              any other is the carrier and/or bailee of the goods shipped
              hereunder, all limitations of, and exonerations from, liability
              provided for by law or by this Bill of Lading shall be available
              to such other. It is further understood and agreed that neither
              the company nor the agent (s) who has executed this Bill of Lading
              for and on behalf of the Master is a principal in the transaction
              , and neither said company nor agent(s) shall be under any
              liability arising out of the contract of carriage either as
              carrier or as bailee of the goods.
            </p>
          </div>
          <div className="col-span-1 py-1  border-e border-black">
            <div className="text-center text-base font-semibold w-full capitalize blSectionTitle">
              Exchange Rate
            </div>
          </div>
          <div className="col-span-4   grid grid-cols-2">
            <div className="border-e border-black">
              <div className="w-full h-[33%] items-center flex border-b border-black blSectionTitle px-4">
                Payble at
              </div>
              <div className="w-full h-[33%] items-center flex border-b border-black blSectionTitle px-4">
                No of original B/L(s)
              </div>
              <div className="w-full h-[33%] items-center flex  blSectionTitle px-4">
                Place and date of issue
              </div>
            </div>
            <div>
              <div className="w-full h-[33%] items-center flex px-4 border-b border-black"></div>
              <div className="w-full h-[33%] items-center flex px-4 border-b border-black text-xl">
                Three(3)
              </div>
              <div className="w-full h-[33%] items-center flex px-4 text-xl ">
                Shenzen,China 4/5/2024
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 border-b border-black">
          <div className="col-span-3 border-e border-black px-4">
            <div className="blSectionTitle py-5">
              Excess Value Description :
            </div>
            <div className="pdf-md-title"></div>
          </div>
          <div className="col-span-5 px-4">
            <div className="blSectionTitle py-5">Note:</div>
            <div className="pdf-md-title"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewPdf;
