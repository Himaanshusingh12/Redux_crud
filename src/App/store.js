import { configureStore } from "@reduxjs/toolkit";
import Userslice from "../Features/Userslice";
import Adminslice from "../Features/Adminslice";

export const store = configureStore({
    reducer: {
        user: Userslice,
        admin: Adminslice,
    },
});