import { Avatar } from "@mui/material"
import "./User.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../../reducers/userReducer"
import iUser from './iUser'

interface iProps {
    user: iUser,
    container: React.MutableRefObject<null>
}

const User = ({ user, container }: iProps): JSX.Element => {
    const selectedUser = useSelector((state: any) => state.chat.selectedUser);
    const dispatch = useDispatch();

    let style = "user ";

    if (selectedUser === user.id) {
        style += "active";
    }

    const handler = (): void => {
        if (container.current !== null) {
            let el: HTMLElement = container.current;
            el.scrollTop = el.scrollHeight;
        }
        dispatch(setSelectedUser(user.id));
    }

    return (
        <div className={style} onClick={handler}>
            <Avatar className="avatar" alt="Remy Sharp" src={user.image} />
            <div className="text">
                <h2>{user.name}</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default User