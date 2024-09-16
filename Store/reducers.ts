import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { navbarReducer, NavbarsState } from "./Slices/NavBar/NavbarSlice";
import { newBlReducer, NewBlState } from "./Slices/NewBlGebInfos/NewBlGebInfos";
import { themeReducer, themeState } from "./Slices/Theme/ThemeSlice";
import { pdfHandlerReducer, pdfHandlerState } from "./Slices/Pdf/PdfSlice";
import { authReducer, authState } from "./Slices/Auth/AuthSlice";
import { requestBlReducer, requestBlState } from "./Slices/RequestBl/RequestBlSlice";
import { RegisterReducer, RegistersState } from "./Slices/Register/RegisterSlice";
import { trackingModalReducer, trackingModalState } from "./Slices/tracking/trackingSlice";


export type RootState = {
 navbarItem:NavbarsState,
 newBlInfos:NewBlState,
 theme:themeState,
 pdfHandler:pdfHandlerState
 auth:authState,
 requestBl:requestBlState,
 registeration:RegistersState,
 trackingModal:trackingModalState
}

const reducers: Reducer<RootState> = combineReducers({
 navbarItem:navbarReducer,
 newBlInfos:newBlReducer,
 theme:themeReducer,
 pdfHandler:pdfHandlerReducer,
 auth:authReducer,
 requestBl:requestBlReducer,
 registeration:RegisterReducer,
 trackingModal:trackingModalReducer
});

export default reducers;
