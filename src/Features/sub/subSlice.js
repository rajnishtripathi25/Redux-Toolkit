import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    b: 0
}
const subSlice = createSlice({
    name: "sub",
    initialState,
    reducers: {
        decrease: (state) => {
            state.b--
        },
        increase: (state) => {
            state.b++
        }
    }

})

export default subSlice.reducer
export const { increase, decrease } = subSlice.actions