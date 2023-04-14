import { Avatar } from "@mui/material"
import "./Header.scss"

interface iUser {
    id: number,
    name: string,
    image: string
}

interface iProps {
    selectUser: iUser
}

const Header = ({ selectUser }: iProps): JSX.Element => {
    return (
        <header className="header">
            <Avatar className="avatar" src={selectUser.image} alt="Remy Sharp" />
            <h2 className="name">{selectUser.name}</h2>
        </header>
    )
}

export default Header