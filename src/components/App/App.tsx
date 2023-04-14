import { useState } from 'react'
import Chat from '../Chat/Chat'
import Sidebar from '../Sidebar/Sidebar'
import "./App.scss"

const users = [
    {
        id: 0,
        name: "James",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=0"
    },
    {
        id: 1,
        name: "Alan",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=1"
    },
    {
        id: 2,
        name: "Logan",
        image: "https://api.dicebear.com/6.x/pixel-art/svg?seed=2"
    },
]

const App = (): JSX.Element => {
    const [selectedUser, setSelectedUser] = useState(0);

    return (
        <div className='app'>
            <Sidebar users={users} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
            <Chat selectUser={users[selectedUser]} />
        </div>
    )
}

export default App