import Chat from '../Chat/Chat'
import Sidebar from '../Sidebar/Sidebar'
import "./App.scss"

const App = (): JSX.Element => {
    return (
        <div className='app'>
            <Sidebar />
            <Chat />
        </div>
    )
}

export default App