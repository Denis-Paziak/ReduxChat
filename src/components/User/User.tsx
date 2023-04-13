import { Avatar } from "@mui/material"
import "./User.scss"

interface iProps {
    data: iData
}

interface iData {
    name: string,
    image: string,
}


const User = ({ data }: iProps): JSX.Element => {
    const { name, image }: iData = data;

    return (
        <div className="user">
            <Avatar className="avatar" alt="Remy Sharp" src={image} />
            <div className="text">
                <h2>{name}</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default User