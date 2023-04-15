import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [
            {
                id: 0,
                name: "James",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
            },
            {
                id: 1,
                name: "Alan",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
            },
            {
                id: 2,
                name: "Logan",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=2"
            },
        ],
        selectedUser: 0
    },
    reducers: {
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    }
});

export const { setSelectedUser } = userSlice.actions
export default userSlice.reducer