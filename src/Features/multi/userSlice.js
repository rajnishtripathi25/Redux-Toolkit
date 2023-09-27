import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'



const initialState = {
    users: [],
    loading: false,
    err: ''
}

const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const respose = await axios.get('https://jsonplaceholder.typicode.com/users')
    return respose.data.map(data => data.name)

})
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.err = ' '
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.err = action.error

        })
    }

})

export default userSlice.reducer
export { fetchUser }