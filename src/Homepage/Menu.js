import React from 'react'
import {Link} from 'react-router-dom'

function Menu() {
    return (
        <>
            <div className="menu">
                    <ul className="nav-links">
                        <Link className="link" to="/"> <li > Hotels </li> </Link>
                        <Link className="link" to="/"> <li > Logout </li> </Link>
                        <Link className="link" to="/card-create"> <li > Card </li> </Link>
                        <Link className="link" to="/register"> <li > Register </li> </Link>
                        <Link className="link" to="/login"> <li > Login </li> </Link>
                    </ul>
            </div>
        </>
    )
}

export default Menu
