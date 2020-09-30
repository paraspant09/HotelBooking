import React from 'react'
import {Link} from 'react-router-dom'

function SidebarDropDown({item}) {
    let showCategories=categoryName  => e =>{
        let subCategory = document.querySelector("#"+categoryName);

        if(subCategory.style.maxHeight==="0em")
            subCategory.style.maxHeight="10em";
        else
        subCategory.style.maxHeight="0em";
    }
    return (
        <div className={item.category==="menu"?"drop-down sidenav-menu":"drop-down"}>
            <div className="category" onClick={showCategories(`dd-${item.category}`)}>{item.category}</div>
            <div id={`dd-${item.category}`} className="sub-category">
                {
                    item.subCategory.map((subCat)=>{
                        return <Link key={subCat.name} className="sidenav-link" to={subCat.link}><div>{subCat.name}</div></Link>
                    })
                }
            </div>
        </div>
    )
}

export default SidebarDropDown
