export type RecivedBlTypes = {
  Id: number;
  CargoType: string;
  ConsigneAddress: string;
  ConsigneeRegisteredCountry: string;
  ConsigneName: string;
  DescriptionofGoods: string;
  DestinationPortCountry: string;
  EstimatedTimeofLoading: string;
  FCL: string;
  GrossWeight: string;
  Hazardous: string;
  HsCode: string;
  InlandCarriageatDischargeCountry: string;
  InlandCarriageatLoadingCountry: string;
  LoadingPortCountry: string;
  Notes: string;
  Packaging: string;
  PreferredDischargePort: string;
  PreferredLoadingPort: string;
  ShipperAddress: string;
  ShipperName: string;
  ShipperRegisteredCountry: string;
  Volume: string;
  ActualLoadingPlace: string;
  ActualDischargePlace: string;
  FileUrl1: string;
  FileUrl2: string;
  FileUrl3: string;
  FileUrl4: string;
  PicUrl1: string;
  PicUrl2: "string";
  State: string;
  CreateDate: string;
  RequestBLNumber:number
Response:string
setUpdateState: (toggle: (prev: boolean) => boolean) => void;
};

export type allGetedBlsTypes = {
  InfoReadDTOs:[]
  CurrentPage?: number
    PageSize?: number
    PageCount?: number
    Total: number
}


export type allGetedRequestsTypes = {
  RequestBLDTOs: [];
  PageCount?: number;
  CurrentPage?: number;
  PageSize?: number;
};


export type BlinfoUserSummary = {
  Blnumber:string
  BLUrl:string
}
export type allGetedUsersTypes = {  
    Id: number
    FullName: string
    Email: string
    Company: string
    JobTitle: string
    BlinfoUserSummaryDTOs:BlinfoUserSummary[]
  
};


export type getAllUserItemType= {
  Users: allGetedUsersTypes[],
  CurrentPage?: number
  PageSize?: number
  PageCount:number
  Total?: number
}

export type getAllUserType = getAllUserItemType[]


