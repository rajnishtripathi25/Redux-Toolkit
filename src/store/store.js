import { configureStore } from "@reduxjs/toolkit";
import addSlice from "../Features/addition/addSlice";
import subSlice from "../Features/sub/subSlice";
import userSlice from "../Features/multi/userSlice";

const store = configureStore({
    reducer: {
        add: addSlice,
        sub: subSlice,
        user: userSlice
    }
})

export default store