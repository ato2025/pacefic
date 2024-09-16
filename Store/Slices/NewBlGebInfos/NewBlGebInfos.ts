import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface NewBlState {
  newBlInfos: {
    Blnumber: string;
    Shipper: string;
    ShipperTel: string;
    ShipperAdress: string;
    Consignee: string;
    ConsigneeTel: string;
    ConsigneeAddress: string;
    Delivery: string;
    DeliveryTel: string;
    DeliveryContactFax: string;
    DeliveryTelEmail: string;
    NotifyParty: string;
    Imo: string;
    OceanVessel: string;
    PortOfDischarge: string;
    PlaceOfReceipt: string;
    PortOfLoading: string;
    PlaceOfDelivery: string;
    MarksAndNumber: string;
    NoOfPkgs: string;
    GrossWt: string;
    Vol: string;
    TotalNumberOfPackages: string;
    PayableAt: string;
    NoOfOriginalBl: string;
    PlaceOfIssue: string;
    DateOfIssue: string;
    Express: string;
    Rate: string;
    Prepaid: string;
    DateOfOrdred: string;
    Notes: string;
    DescriptionOfGoods: string
    DeliveryAddress: string
    VesselType: string
    OriginPortOfDelivery: string
    FinalDestination: string
    NetWt: string
    PackingType: string
    DateOfDelivered: string
    InsuranceNo: string
    Atd: string
    Etd: string
    Eta: string
    Ata: string
    File1: string
    File2: string
    File3: string
    File4: string
    Pic1: string
    Pic2: string
    RequestBLId: null | number
    LocalVessel:string
    From:string
    ForTranshipmentTo:string
    Measurement:string
    FrightAndChanges:string
    RevenueTons:string
    Per:string
    Collect:string
    PrepaidAt:string
    TotalPrepaid:string
  };
}










const initialState: NewBlState = {
  newBlInfos: {
    DescriptionOfGoods: '',
    Blnumber: "",
    Consignee: "",
    ConsigneeAddress: "",
    ConsigneeTel: "",
    DateOfIssue: "",
    DateOfOrdred: "",
    Delivery: "",
    DeliveryContactFax: "",
    DeliveryTel: "",
    DeliveryTelEmail: "",
    Express: "",
    GrossWt: "",
    Imo: "",
    MarksAndNumber: "",
    NoOfOriginalBl: "",
    NoOfPkgs: "",
    Notes: "",
    NotifyParty: "",
    OceanVessel: "",
    PayableAt: "",
    PlaceOfDelivery: "",
    PlaceOfIssue: "",
    PlaceOfReceipt: "",
    PortOfDischarge: "",
    PortOfLoading: "",
    Prepaid: "",
    Rate: "",
    Shipper: "",
    ShipperAdress: "",
    ShipperTel: "",
    TotalNumberOfPackages: "",
    Vol: "",
    Ata: '',
    Atd: '',
    DateOfDelivered: '',
    DeliveryAddress: '',
    Eta: '',
    Etd: '',
    FinalDestination: '',
    InsuranceNo: '',
    NetWt: '',
    OriginPortOfDelivery: '',
    PackingType: '',
    VesselType: '',
    File1: '',
    File2: '',
    File3: '',
    File4: '',
    Pic1: '',
    Pic2: '',
    RequestBLId: null,
    LocalVessel:"",
    From:"",
    ForTranshipmentTo:"",
    Measurement:"",
    FrightAndChanges:"",
    RevenueTons:"",
    Per:"",
    Collect:"",
    PrepaidAt:"",
    TotalPrepaid:"",
  },
};

const newBlSlice = createSlice({
  name: "newBl",
  initialState,
  reducers: {
    setBlItem: (
      state,
      action: PayloadAction<{ type: string; payload: string }>
    ) => {

      switch (action.payload.type) {
        case "blnumber": {
          state.newBlInfos.Blnumber = action.payload.payload;
          break
        }
        case "shipper": {
          state.newBlInfos.Shipper = action.payload.payload;
          break
        }
        case "shippertel": {
          state.newBlInfos.ShipperTel = action.payload.payload;
          break
        }
        case "shipperadress": {
          state.newBlInfos.ShipperAdress = action.payload.payload;
          break
        }
        case "consignee": {
          state.newBlInfos.Consignee = action.payload.payload;
          break
        }
        case "consigneetel": {
          state.newBlInfos.ConsigneeTel = action.payload.payload;
          break
        }
        case "consigneeaddress": {
          state.newBlInfos.ConsigneeAddress = action.payload.payload;
          break
        }
        case "delivery": {
          state.newBlInfos.Delivery = action.payload.payload;
          break
        }
        case "deliverytel": {
          state.newBlInfos.DeliveryTel = action.payload.payload;
          break
        }
        case "deliverycontactfax": {
          state.newBlInfos.DeliveryContactFax = action.payload.payload;
          break
        }
        case "deliverytelemail": {
          state.newBlInfos.DeliveryTelEmail = action.payload.payload;
          break
        }
        case "imo": {
          state.newBlInfos.Imo = action.payload.payload;
          break
        }
        case "oceanvessel": {
          state.newBlInfos.OceanVessel = action.payload.payload;
          break
        }
        case "portofdischarge": {
          state.newBlInfos.PortOfDischarge = action.payload.payload;
          break
        }
        case "placeofreceipt": {
          state.newBlInfos.PlaceOfReceipt = action.payload.payload;
          break
        }
        case "portofloading": {
          state.newBlInfos.PortOfLoading = action.payload.payload;
          break
        }
        case "placeofdelivery": {
          state.newBlInfos.PlaceOfDelivery = action.payload.payload;
          break
        }
        case "marksandnumber": {
          state.newBlInfos.MarksAndNumber = action.payload.payload;
          break
        }
        case "noofpkgs": {
          state.newBlInfos.NoOfPkgs = action.payload.payload;
          break
        }
        case "grosswt": {
          state.newBlInfos.GrossWt = action.payload.payload;
          break
        }
        case "vol": {
          state.newBlInfos.Vol = action.payload.payload;
          break
        }
        case "totalnumberofpackages": {
          state.newBlInfos.TotalNumberOfPackages = action.payload.payload;
          break
        }
        case "payableat": {
          state.newBlInfos.PayableAt = action.payload.payload;
          break
        }
        case "noofOriginalbl": {
          state.newBlInfos.NoOfOriginalBl = action.payload.payload;
          break
        }
        case "placeofissue": {
          state.newBlInfos.PlaceOfIssue = action.payload.payload;
          break
        }
        case "dateofissue": {
          state.newBlInfos.DateOfIssue = action.payload.payload;
          break
        }
        case "express": {
          state.newBlInfos.Express = action.payload.payload;
          break
        }
        case "rate": {
          state.newBlInfos.Rate = action.payload.payload;
          break
        }
        case "prepaid": {
          state.newBlInfos.Prepaid = action.payload.payload;
          break
        }
        case "dateofordred": {
          state.newBlInfos.DateOfOrdred = action.payload.payload;
          break
        }
        case "notes": {
          state.newBlInfos.Notes = action.payload.payload;
          break
        }
        case "descriptionofgoods": {
          state.newBlInfos.DescriptionOfGoods = action.payload.payload;
          break
        }
        case "ata": {
          state.newBlInfos.Ata = action.payload.payload;
          break
        }
        case "atd": {
          state.newBlInfos.Atd = action.payload.payload;
          break
        }
        case "dateofdelivered": {
          state.newBlInfos.DateOfDelivered = action.payload.payload;
          break
        }
        case "deliveryaddress": {
          state.newBlInfos.DeliveryAddress = action.payload.payload;
          break
        }
        case "eta": {
          state.newBlInfos.Eta = action.payload.payload;
          break
        }
        case "etd": {
          state.newBlInfos.Etd = action.payload.payload;
          break
        }
        case "finaldestination": {
          state.newBlInfos.FinalDestination = action.payload.payload;
          break
        }
        case "insuranceno": {
          state.newBlInfos.InsuranceNo = action.payload.payload;
          break
        }
        case "netwt": {
          state.newBlInfos.NetWt = action.payload.payload;
          break
        }
        case "originportofdelivery": {
          state.newBlInfos.OriginPortOfDelivery = action.payload.payload;
          break
        }
        case "packingtype": {
          state.newBlInfos.PackingType = action.payload.payload;
          break
        }
        case "notifyparty": {
          state.newBlInfos.NotifyParty = action.payload.payload;
          break
        }
        case "vesseltype": {
          state.newBlInfos.VesselType = action.payload.payload;
          break
        }
        case "File1": {
          state.newBlInfos.File1 = action.payload.payload;
          break
        }
        case "File2": {
          state.newBlInfos.File2 = action.payload.payload;
          break
        }
        case "File3": {
          state.newBlInfos.File3 = action.payload.payload;
          break
        }
        case "File4": {
          state.newBlInfos.File4 = action.payload.payload;
          break
        }
        case "Pic1": {
          state.newBlInfos.Pic1 = action.payload.payload;
          break
        }
        case "Pic2": {
          state.newBlInfos.Pic2 = action.payload.payload;
          break
        }
        case "RequestBLId": {
          state.newBlInfos.RequestBLId = Number(action.payload.payload);
          break
        }
        
        case "localvessel": {
          state.newBlInfos.LocalVessel = action.payload.payload;
          break
        }
        case "from": {
          state.newBlInfos.From = action.payload.payload;
          break
        }
        case "fortranshipmentto": {
          state.newBlInfos.ForTranshipmentTo = action.payload.payload;
          break
        }
        case "measurement": {
          state.newBlInfos.Measurement = action.payload.payload;
          break
        }
        case "frightandchanges": {
          state.newBlInfos.FrightAndChanges = action.payload.payload;
          break
        }
        case "revenuetons": {
          state.newBlInfos.RevenueTons = action.payload.payload;
          break
        }
        case "per": {
          state.newBlInfos.Per = action.payload.payload;
          break
        }
        case "collect": {
          state.newBlInfos.Collect = action.payload.payload;
          break
        }
        case "prepaidat": {
          state.newBlInfos.PrepaidAt = action.payload.payload;
          break
        }
        case "totalprepaid": {
          state.newBlInfos.TotalPrepaid = action.payload.payload;
          break
        }
      
      }
    },
  },
  extraReducers: () => { },
});

export const { setBlItem } = newBlSlice.actions;

export const newBlReducer = newBlSlice.reducer;
