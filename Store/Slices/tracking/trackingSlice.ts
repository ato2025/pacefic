import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface trackingModalState {
  portOfLoading: string;
  portOfDischarge: string;
  vesselName: string;
  ImoNumber: string;
  DateOfIssue: string;
  ETA: string;
  ETD: string;
}

const initialState: trackingModalState = {
  DateOfIssue: "",
  ETA: "",
  ETD: "",
  ImoNumber: "",
  portOfDischarge: "",
  portOfLoading: "",
  vesselName: "",
};

const trackingModalSlice = createSlice({
  name: "trackingModal",
  initialState,
  reducers: {
    openTrackingModal: (state, payload) => {
      state.DateOfIssue = payload.payload.DateOfIssue;
      state.ETA = payload.payload.ETA;
      state.ETD = payload.payload.ETD;
      state.ImoNumber = payload.payload.ImoNumber;
      state.portOfDischarge = payload.payload.portOfDischarge;
      state.portOfLoading = payload.payload.portOfLoading;
      state.vesselName = payload.payload.vesselName;
    },
    closeTrackingModal: (state) => {
      state.DateOfIssue = "";
      state.ETA = "";
      state.ETD = "";
      state.ImoNumber = "";
      state.portOfDischarge = "";
      state.portOfLoading = "";
      state.vesselName = "";
    },
  },
  extraReducers: () => {},
});

export const { openTrackingModal,closeTrackingModal } = trackingModalSlice.actions;

export const trackingModalReducer = trackingModalSlice.reducer;
