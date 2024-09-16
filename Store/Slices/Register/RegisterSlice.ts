import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface RegistersState {
  isOpenModal:boolean,
  registrationState:string
  userInfo:{
    email:string,
    fullName:string
    companyName:string
    jobTitle:string
    password:string
    verifyCode:string
  }
}

const initialState: RegistersState = {
   isOpenModal:false,
   registrationState:'',
   userInfo:{
    companyName:'',
    email:'',
    fullName:"",
    jobTitle:'',
    password:'',
    verifyCode:''
   }
};

const RegisterSlice = createSlice({
  name: "Register",
  initialState,
  reducers: {
    setOpenModal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
    setRegistrationState: (state, action: PayloadAction<{ item: string }>) => {
      state.registrationState = action.payload.item;
    },
    setUserEmail:(state, action: PayloadAction<{ email: string }>) => {
      state.userInfo.email = action.payload.email
    },
    setUserExtraInfo:(state, action: PayloadAction<{ fullName: string,jobTitle:string,companyName:string }>) => {
      state.userInfo.companyName = action.payload.companyName
      state.userInfo.fullName = action.payload.fullName
      state.userInfo.jobTitle = action.payload.jobTitle
    },
    setUserPassword:(state, action: PayloadAction<{ password: string }>) => {
      state.userInfo.password = action.payload.password
    },
    setVerifyCode:(state, action: PayloadAction<{ verifyCode: string }>) => {
      state.userInfo.verifyCode = action.payload.verifyCode
    },
  },
  extraReducers: () => {
  
  },
});

export const { setOpenModal,setRegistrationState,setUserEmail ,setUserExtraInfo , setUserPassword,setVerifyCode} = RegisterSlice.actions;

export const RegisterReducer = RegisterSlice.reducer;
