import { TextField } from "@mui/material"
import { useState } from "react"


interface iProps {
    sendMess: (text: string) => void
}

const MessageForm = ({ sendMess }: iProps) => {
    const [text, setText] = useState('');

    const formHandler = (e: any) => {
        e.preventDefault();
        setText(e.target.value);
    }

    const send = (e: any) => {
        e.preventDefault();
        e.target.reset();

        if (text.length > 0) {
            sendMess(text);
            setText('');
        } else {
            alert("Write a message")
        }
    }

    return (
        <form action="" onSubmit={send}>
            <TextField fullWidth label="Write message" onChange={formHandler} />
        </form>
    )
}

export default MessageForm