import './Sidebar.scss';
import User from '../User/User'
import { Button } from "@mui/material"

interface iUser {
    id: number,
    name: string,
    image: string
}

interface iProps {
    users: iUser[],
    setSelectedUser: React.Dispatch<React.SetStateAction<number>>,
    selectedUser: number
}

const Sidebar = ({ users, setSelectedUser, selectedUser }: iProps): JSX.Element => {
    return (
        <div className='sidebar'>
            <h2 className='title'>Select a user</h2>
            {
                users.map((el) => {
                    if (el.id !== selectedUser) {
                        return <User key={el.id} user={el} setSelectedUser={setSelectedUser} />
                    }
                })
            }
            <Button className='registerUser' variant="contained">Register new user</Button>
        </div>
    )
}

export default Sidebar