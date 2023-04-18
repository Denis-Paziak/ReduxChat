import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [
            {
                id: 0,
                userId: 1,
                message: "Hi, I'm new to this chat. How are you guys doing?",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
            },
            {
                id: 1,
                userId: 0,
                message: "Hi there! Welcome to our chat! Everything's good, how about yourself?",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
            },
            {
                id: 2,
                userId: 2,
                message: "Hello, joining in on the greetings! How are you doing, Alan?",
                image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=2"
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