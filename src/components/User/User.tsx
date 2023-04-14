import { Avatar } from "@mui/material"
import "./User.scss"

interface iProps {
    user: iUser,
    setSelectedUser: React.Dispatch<React.SetStateAction<number>>,
    selectedUser: number
}

interface iUser {
    id: number
    name: string,
    image: string,
}


const User = ({ user, setSelectedUser, selectedUser }: iProps): JSX.Element => {
    let style = "user ";

    if (selectedUser === user.id) {
        style += "active";
    }
    return (
        <div className={style} onClick={() => setSelectedUser(user.id)}>
            <Avatar className="avatar" alt="Remy Sharp" src={user.image} />
            <div className="text">
                <h2>{user.name}</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default User