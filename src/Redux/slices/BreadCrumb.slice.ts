import { createSlice } from "@reduxjs/toolkit"
import { IPathFromRoot } from "../../Shared/Models/DetailProduct.model";

import {IBreadCrub} from "./BreadCrumb.model"

const initialState: IBreadCrub = {
   items: []
}


const counterSlice = createSlice({
    name: "BreadCrub Slice",
    initialState,
    reducers: {
        setBreadCrub : (state: IBreadCrub, action: {payload: IPathFromRoot[]}) => {
              state.items = action.payload
        }
    }
})

export const {setBreadCrub} = counterSlice.actions;
export default counterSlice.reducer;
