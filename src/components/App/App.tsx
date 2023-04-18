import {useRef} from 'react'
import Chat from '../Chat/Chat'
import Sidebar from '../Sidebar/Sidebar'
import "./App.scss"
import {useSelector} from 'react-redux'

const App = (): JSX.Element => {
    const selectedUser = useSelector((state: any) => state.users.selectedUser);
    const users = useSelector((state: any) => state.users.users);
    const container = useRef(null);

    return (
        <div className='app'>
            <Sidebar container={container}/>
            <Chat selectUser={users[selectedUser]} container={container}/>
        </div>
    )
}

export default App