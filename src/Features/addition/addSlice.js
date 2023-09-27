import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    a: 0
}
const addSlice = createSlice({
    name: "add",
    initialState,
    reducers: {
        increase: (state) => {
            state.a++
        },
        decrease: (state) => {
            state.a--;
        }
    }

})

export default addSlice.reducer
export const { increase, decrease } = addSlice.actions