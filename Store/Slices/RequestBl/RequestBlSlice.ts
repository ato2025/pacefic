import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface requestBlState {
  requestBlInfos: {
    ShipperName: string;
    ShipperAddress: string;
    ConsigneName: string;
    ConsigneAddress: string;
    ShipperRegisteredCountry: string;
    ConsigneeRegisteredCountry: string;
    DescriptionofGoods: string;
    HsCode: string;
    Volume: string;
    GrossWeight: string;
    Packaging: string;
    Hazardous: string;
    FCL: string;
    CargoType: string;
    LoadingPortCountry: string;
    PreferredLoadingPort: string;
    DestinationPortCountry: string;
    PreferredDischargePort: string;
    EstimatedTimeofLoading: string;
    InlandCarriageatLoadingCountry: string;
    InlandCarriageatDischargeCountry: string;
    Notes: string;
    ActualLoadingPlace:string
    ActualDischargePlace:string
  };
}

const initialState: requestBlState = {
  requestBlInfos: {
    CargoType: "",
    ConsigneAddress: "",
    ConsigneeRegisteredCountry: "",
    ConsigneName: "",
    DescriptionofGoods: "",
    DestinationPortCountry: "",
    EstimatedTimeofLoading: "",
    FCL: "",
    GrossWeight: "",
    Hazardous: "",
    HsCode: "",
    InlandCarriageatDischargeCountry: "",
    InlandCarriageatLoadingCountry: "",
    LoadingPortCountry: "",
    Notes: "",
    Packaging: "",
    PreferredDischargePort: "",
    PreferredLoadingPort: "",
    ShipperAddress: "",
    ShipperName: "",
    ShipperRegisteredCountry: "",
    Volume: "",
    ActualLoadingPlace:'',
    ActualDischargePlace:''
  },
};

const requestBlSlice = createSlice({
  name: "requestBl",
  initialState,
  reducers: {
    setBlRequestItem: (
      state,
      action: PayloadAction<{ type: string; payload: string }>
    ) => {
      switch (action.payload.type) {
         case "CargoType": {
           state.requestBlInfos.CargoType = action.payload.payload;
           break
         }

         case "ConsigneAddress": {
           state.requestBlInfos.ConsigneAddress = action.payload.payload;
           break
         }

         case "ConsigneeRegisteredCountry": {
           state.requestBlInfos.ConsigneeRegisteredCountry = action.payload.payload;
           break
         }

         case "ConsigneName": {
           state.requestBlInfos.ConsigneName = action.payload.payload;
           break
         }

         case "DescriptionofGoods": {
           state.requestBlInfos.DescriptionofGoods = action.payload.payload;
           break
         }

         case "DestinationPortCountry": {
           state.requestBlInfos.DestinationPortCountry = action.payload.payload;
           break
         }

         case "EstimatedTimeofLoading": {
           state.requestBlInfos.EstimatedTimeofLoading = action.payload.payload;
           break
         }

         case "FCL": {
           state.requestBlInfos.FCL = action.payload.payload;
           break
         }

         case "GrossWeight": {
           state.requestBlInfos.GrossWeight = action.payload.payload;
           break
         }

         case "Hazardous": {
           state.requestBlInfos.Hazardous = action.payload.payload;
           break
         }

         case "HsCode": {
           state.requestBlInfos.HsCode = action.payload.payload;
           break
         }

         case "InlandCarriageatDischargeCountry": {
           state.requestBlInfos.InlandCarriageatDischargeCountry = action.payload.payload;
           break
         }

         case "InlandCarriageatLoadingCountry": {
           state.requestBlInfos.InlandCarriageatLoadingCountry = action.payload.payload;
           break
         }

         case "LoadingPortCountry": {
           state.requestBlInfos.LoadingPortCountry = action.payload.payload;
           break
         }

         case "Notes": {
           state.requestBlInfos.Notes = action.payload.payload;
           break
         }

         case "Packaging": {
           state.requestBlInfos.Packaging = action.payload.payload;
           break
         }

         case "PreferredDischargePort": {
           state.requestBlInfos.PreferredDischargePort = action.payload.payload;
           break
         }

         case "PreferredLoadingPort": {
           state.requestBlInfos.PreferredLoadingPort = action.payload.payload;
           break
         }

         case "ShipperAddress": {
           state.requestBlInfos.ShipperAddress = action.payload.payload;
           break
         }

         case "ShipperName": {
           state.requestBlInfos.ShipperName = action.payload.payload;
           break
         }

         case "ShipperRegisteredCountry": {
           state.requestBlInfos.ShipperRegisteredCountry = action.payload.payload;
           break
         }


         case "Volume": {
           state.requestBlInfos.Volume = action.payload.payload;
           break
         }
         case "ActualLoadingPlace": {
           state.requestBlInfos.ActualLoadingPlace = action.payload.payload;
           break
         }
         case "ActualDischargePlace": {
           state.requestBlInfos.ActualDischargePlace = action.payload.payload;
           break
         }
      }}
  },
  extraReducers: () => {},
});

export const { setBlRequestItem } = requestBlSlice.actions;

export const requestBlReducer = requestBlSlice.reducer;
