import Header from "../Header/Header"
import { Avatar, TextField } from "@mui/material"
import "./Chat.scss"

const data = [
    {
        message: "hi",
        from: "denis"
    },
    {
        message: "i am a denis",
        from: "denis"
    }
];


const Chat = (): JSX.Element => {
    return (
        <div className="chat">
            <Header />
            <div className="container">
                {data.map((el) => {
                    return (
                        <div className="message">
                            <Avatar className="avatar" alt="Remy Sharp" />
                            <p className="text">{el.message}</p>
                        </div>
                    )
                })}
            </div>
            <form action="">
                <TextField fullWidth label="Write message" />
            </form>
        </div>
    )
}

export default Chat