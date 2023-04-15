import { Avatar } from '@mui/material'
import "./Message.scss"
import iMessage from "./iMessage"


interface iProps {
    data: iMessage,
    isUser: boolean
}

const Message = ({ data, isUser }: iProps): JSX.Element => {
    let style = "message ";

    if (isUser) {
        style += "userMessage";
    }

    return (
        <div className={style}>
            <Avatar className="avatar" src={data.image} alt="Remy Sharp" />
            <p className="text">{data.message}</p>
        </div>
    )
}

export default Message