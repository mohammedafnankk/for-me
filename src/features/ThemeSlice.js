import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"theme",
    initialState:{
        theme:"light"
    },
    reducers:{
        themes:(state,action)=>{
            state.theme=action.payload
        }
    }

})

export const {themes} = themeSlice.actions;
export default themeSlice.reducer;