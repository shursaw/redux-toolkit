import {Link, Outlet} from 'react-router-dom'
import "./layout.css"

const Layout = () => {
    return (
        <>
        <header className='header'>
            <Link to="/">Counter</Link>
            <Link to="/todo">ToDo</Link>
            <Link to="/table">Async</Link>
        </header>

        <Outlet/>
        
        </>
    )
}

export default Layout