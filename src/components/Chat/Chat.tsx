import Header from "../Header/Header"
import "./Chat.scss"
import Message from "../Message/Message"
import MessageForm from "../MessageForm/MessageForm"
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { sendMess } from "../../reducers/chatReducer";

import iMessage from "../Message/iMessage"
import iUser from "../User/iUser"

interface iProps {
    selectUser: iUser,
    container: React.MutableRefObject<null>
}

const Chat = ({ selectUser, container }: iProps): JSX.Element => {
    const messages: iMessage[] = useSelector((state: any) => state.chat.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        if (container.current !== null) {
            let el: HTMLElement = container.current;
            el.scrollTop = el.scrollHeight;
        }
    }, [messages, container])

    const onSendMess = (text: string): void => {
        let newData: iMessage = {
            id: messages.length,
            userId: selectUser.id,
            message: text,
            image: selectUser.image
        }

        dispatch(sendMess(newData))
    }

    return (
        <div className="chat">
            <Header selectUser={selectUser} />
            <div className="container" ref={container}>
                {messages.map((el) => {
                    if (el.userId === selectUser.id) {
                        return <Message key={el.id} data={el} isUser />
                    } else {
                        return <Message key={el.id} data={el} isUser={false} />
                    }
                })}
            </div>
            <MessageForm sendMess={onSendMess} />
        </div>
    )
}

export default Chat