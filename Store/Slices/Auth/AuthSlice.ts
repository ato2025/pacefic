import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface authState {
  userType:string,
  userName:string
  logIn:boolean
}

const initialState: authState = {
  userType:'usual',
  userName:'User',
  logIn:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<{ item: string }>) => {
      state.userType = action.payload.item;
    },
    setUserName:(state,action: PayloadAction<{ userName: string }>)=>{
      state.userName = action.payload.userName;
    },
    setLogging:(state,action: PayloadAction<{ state: boolean}>)=>{
      state.logIn = action.payload.state;
    },
  },
  extraReducers: () => {
  
  },
});

export const { setUserType,setUserName,setLogging } = authSlice.actions;

export const authReducer = authSlice.reducer;
