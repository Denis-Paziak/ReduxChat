import './Sidebar.scss';
import User from '../User/User'
import { Button } from "@mui/material"
import { useSelector } from 'react-redux'
import iUser from '../User/iUser'

interface iProps {
    container: React.MutableRefObject<null>
}

const Sidebar = ({ container }: iProps): JSX.Element => {
    const users: iUser[] = useSelector((state: any) => state.users.users);

    return (
        <div className='sidebar'>
            <h2 className='title'>Select a user</h2>
            {
                users.map((el) => {
                    return <User
                        key={el.id}
                        user={el}
                        container={container}
                    />
                })
            }
            <Button className='registerUser' variant="contained">Register new user</Button>
        </div>
    )
}

export default Sidebar