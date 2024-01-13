import { createSlice } from "@reduxjs/toolkit";

const AppSlice=createSlice({
    name:"app",
    initialState:{
        isMenuopen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
      state.isMenuopen=!state.isMenuopen;
        },
        closeMenu:(state)=>{
            state.isMenuopen=false;
        },

    },
})
export const {toggleMenu,closeMenu}=AppSlice.actions
export default AppSlice.reducer