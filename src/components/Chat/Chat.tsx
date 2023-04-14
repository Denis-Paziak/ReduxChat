import Header from "../Header/Header"
import "./Chat.scss"
import Message from "../Message/Message"
import MessageForm from "../MessageForm/MessageForm"
import { useEffect, useRef, useState } from "react"

const data = [
    {
        userId: 1,
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
    },
    {
        userId: 0,
        message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
    },
    {
        userId: 1,
        message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
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

interface iMessage {
    userId: number,
    message: string,
    image: string
}


const Chat = ({ selectUser }: iProps): JSX.Element => {
    const [messages, setMessages] = useState(data);
    const container = useRef(null);

    useEffect(() => {
        if (container.current !== null) {
            let el: HTMLElement = container.current;
            el.scrollTop = el.scrollHeight;
        }
    }, [messages])


    const sendMess = (text: string): void => {
        let data: iMessage = {
            userId: selectUser.id,
            message: text,
            image: selectUser.image
        }

        const newArr = [...messages, data];
        setMessages(newArr)
    }

    return (
        <div className="chat">
            <Header selectUser={selectUser} />
            <div className="container" ref={container}>
                {messages.map((el) => {
                    if (el.userId === selectUser.id) {
                        return <Message data={el} isUser />
                    } else {
                        return <Message data={el} isUser={false} />
                    }
                })}
            </div>
            <MessageForm sendMess={sendMess} />
        </div>
    )
}

export default Chat