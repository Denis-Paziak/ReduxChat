import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [
            {
                id: 0,
                userId: 1,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
            },
            {
                id: 1,
                userId: 0,
                message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
            },
            {
                id: 2,
                userId: 1,
                message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
            },
        ],
    },
    reducers: {
        sendMess: (state, action) => {
            state.messages = [...state.messages, action.payload];
        }
    }
});

export const { sendMess } = chatSlice.actions;
export default chatSlice.reducer