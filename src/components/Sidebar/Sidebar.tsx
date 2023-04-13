import './Sidebar.scss';
import User from '../User/User'
import { Button } from "@mui/material"

const data = [
    {
        name: "Denis",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
    },
    {
        name: "Oleg",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=2"
    }
]

const Sidebar = (): JSX.Element => {
    return (
        <div className='sidebar'>
            <h2 className='title'>Select a user</h2>
            {
                data.map((el) => {
                    return <User data={el} />
                })
            }
            <Button className='registerUser' variant="contained">Register new user</Button>
        </div>
    )
}

export default Sidebar