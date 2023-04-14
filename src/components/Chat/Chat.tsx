import Header from "../Header/Header"
import { Avatar, TextField } from "@mui/material"
import "./Chat.scss"

const data = [
    {
        userId: 0,
        message: "Hi",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
    },
    {
        userId: 1,
        message: "Hi",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
    },
    {
        userId: 0,
        message: "My name is James",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
    },
];

interface iUser {
    id: number,
    name: string,
    image: string
}

interface iProps {
    selectUser: iUser
}

const Chat = ({ selectUser }: iProps): JSX.Element => {
    return (
        <div className="chat">
            <Header selectUser={selectUser} />
            <div className="container">
                {data.map((el) => {
                    if (el.userId === selectUser.id) {
                        return (
                            <div className="message userMessage">
                                <p className="text">{el.message}</p>
                            </div>
                        )
                    } else {
                        return (
                            <div className="message">
                                <Avatar className="avatar" src={el.image} alt="Remy Sharp" />
                                <p className="text">{el.message}</p>
                            </div>
                        )
                    }
                })}
            </div>
            <form action="">
                <TextField fullWidth label="Write message" />
            </form>
        </div>
    )
}

export default Chat