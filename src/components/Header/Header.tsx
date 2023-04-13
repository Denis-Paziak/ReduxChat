import { Avatar } from "@mui/material"
import "./Header.scss"

const Header = (): JSX.Element => {
    return (
        <header className="header">
            <Avatar className="avatar" alt="Remy Sharp" />
            <h2 className="name">User</h2>
        </header>
    )
}

export default Header