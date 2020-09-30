import React from 'react'
import Menu from './Menu';

function Header() {

    let showSidebar =() => {
        const sidebar = document.querySelector(".sidebar");

        if (sidebar.classList.contains("hide-sidebar")) {
            sidebar.classList.replace("hide-sidebar", "show-sidebar");
        }
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <div className="show-sidebar-icon" onClick={showSidebar}>&#9776;</div>
                    Logo
                </div>
                <Menu/>
            </header>
        </>
    )
}

export default Header
