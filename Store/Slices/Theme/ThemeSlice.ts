import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface themeState {
  theme: string;
}



const initialState: themeState = {
  theme: '',
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state,payload) => {
 state.theme = payload.payload.theme 
    
    },
  },
  extraReducers: () => {},
});

const updateTheme = (newTheme: string) => {
  if (newTheme === "light") {
    document.documentElement.style.setProperty(
      "--color-bg-main",
      "#757A82"
    );
    document.documentElement.style.setProperty(
      "--color-bg-subMain",
      "#D4D6D9"
    );
    document.documentElement.style.setProperty(
      "--main-bg",
      "#D4D6D9"
    );
    document.documentElement.style.setProperty(
      "--modal-bg",
      "#2A2E33"
    );
    document.documentElement.style.setProperty(
      "--text",
      "#2A2E33"
    );
    document.documentElement.style.setProperty(
      "--mainText",
      "#212529"
    );
  } else {
    document.documentElement.style.setProperty(
      "--color-bg-main",
      "#1A1A1A"
    );
    document.documentElement.style.setProperty(
      "--color-bg-subMain",
      "#3f3e3e"
    );
    document.documentElement.style.setProperty(
      "--main-bg",
      "#ffffff"
    );
    document.documentElement.style.setProperty(
      "--modal-bg",
      "#E0DBF7"
    );
    document.documentElement.style.setProperty(
      "--text",
      "#2A2C2D"
    );
    document.documentElement.style.setProperty(
      "--mainText",
      "#ffffff"
    );
  }}


export const { changeTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
