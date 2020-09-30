import React from 'react'
import SidebarDropDown from './SidebarDropDown';

function Sidebar() {

    let sideNavMenu={
        category:"menu",
        subCategory:[
            {name:"Hotel",link:"/"},
            {name:"Logout",link:"/"},
            {name:"Card",link:"/card-create"},
            {name:"Register",link:"/register"},
            {name:"Login",link:"/login"}
        ]
    };

    let dropDownList=[
        {category:"home",subCategory:[{name:"Goto",link:"/"},{name:"Where",link:"/"}]},
        {category:"about",subCategory:[{name:"Hi",link:"/"}]},
        {category:"contact",subCategory:[{name:"Hello",link:"/"},{name:"No-Way",link:"/"},{name:"Why",link:"/"}]},];

    let hideSidebar =() => {
        const sidebar = document.querySelector(".sidebar");

        if (sidebar.classList.contains("show-sidebar")) {
            sidebar.classList.replace("show-sidebar", "hide-sidebar");
        }
    }
    
    return (
        <aside className="sidebar hide-sidebar">
            <div className="hide-sidebar-icon" onClick={hideSidebar}>x</div>
            <SidebarDropDown key={sideNavMenu.category} item={sideNavMenu}/>
            {
                dropDownList.map((item)=>{
                    return <SidebarDropDown key={item.category} item={item}/>
                })
            }
        </aside>
    )
}

export default Sidebar
