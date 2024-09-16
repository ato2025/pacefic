import { sendPdfToBackend } from "@/Utils/sendPdfToBackend";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface pdfHandlerState {
  base64:string
}

const initialState: pdfHandlerState = {
   base64:'users'
};

const pdfHandlerSlice = createSlice({
  name: "pdfHandler",
  initialState,
  reducers: {
    setBase64: (state, action: PayloadAction<{ base64: string }>) => {
       sendPdfToBackend(action.payload.base64)
      state.base64 = action.payload.base64;
    },
  },
  extraReducers: () => {
  
  },
});

export const { setBase64 } = pdfHandlerSlice.actions;

export const pdfHandlerReducer = pdfHandlerSlice.reducer;
