import { Avatar } from "@mui/material"
import "./User.scss"

interface iProps {
    user: iUser,
    setSelectedUser: React.Dispatch<React.SetStateAction<number>>
}

interface iUser {
    id: number
    name: string,
    image: string,
}


const User = ({ user, setSelectedUser }: iProps): JSX.Element => {

    return (
        <div className="user" onClick={() => setSelectedUser(user.id)}>
            <Avatar className="avatar" alt="Remy Sharp" src={user.image} />
            <div className="text">
                <h2>{user.name}</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default User