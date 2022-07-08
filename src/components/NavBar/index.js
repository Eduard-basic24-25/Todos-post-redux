import { NavLink } from "react-router-dom";


function NavBar () {

    return (
        <nav className="fs-4 text-center bg-light mb-5">
            <ul className='navbar-nav me-auto mb-2 mb-lg-0' >
                <li className='nav-link'><NavLink to='/'>Home Page</NavLink></li>
                <li className="nav-link"><NavLink to='/todos'>Todos</NavLink></li>
                <li className="nav-link"><NavLink to='/posts'>Posts</NavLink></li>      
            </ul>
        </nav>
    )
};

export default NavBar;