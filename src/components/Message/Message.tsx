import { Avatar } from '@mui/material'
import "./Message.scss"

interface iProps {
    data: iMessage,
    isUser: boolean
}

interface iMessage {
    userId: number,
    message: string,
    image: string
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