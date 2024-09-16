import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface NavbarsState {
  openedItem:string
}

const initialState: NavbarsState = {
  openedItem:'users'
};

const navbarSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    setOpenItem: (state, action: PayloadAction<{ item: string }>) => {
      state.openedItem = action.payload.item;
    },
  },
  extraReducers: () => {
  
  },
});

export const { setOpenItem } = navbarSlice.actions;

export const navbarReducer = navbarSlice.reducer;
