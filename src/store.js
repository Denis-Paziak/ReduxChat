import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./reducers/chatReducer";
import userReducer from "./reducers/userReducer";

export default configureStore({
    reducer: {
        chat: chatReducer,
        users: userReducer
    }
});