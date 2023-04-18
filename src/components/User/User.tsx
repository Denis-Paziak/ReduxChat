import { Avatar } from "@mui/material"
import "./User.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedUser } from "../../reducers/userReducer"
import iUser from './iUser'
import {AnyAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";

interface iProps {
    user: iUser,
    container: React.MutableRefObject<null>,
}

const User = ({ user, container }: iProps): JSX.Element => {
    const selectedUser = useSelector((state: any) => state.users.selectedUser);
    const dispatch: Dispatch<AnyAction>  = useDispatch();

    let style: string = "user ";


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
                <p>{user.name}</p>
            </div>
        </div>
    )
}

export default User