import React from 'react'
import { Link } from 'react-router-dom'

function Card({hotel}) {
    return (
        <div className="card-container">
            <li className="hotel">
                <div className="hotel-name">{hotel.name.length<20?hotel.name:hotel.name.substr(0,20)+" ... "}</div>
                <div className="hotel-place">{hotel.city.length<10?hotel.city:hotel.city.substr(0,10)+" ..."}{" , "}{hotel.state.length<10?hotel.state:hotel.state.substr(0,10)+" ... "}</div>
                <img className="hotel-image" src={hotel.image} alt={hotel.name} />
                <Link style={{textDecoration: "none"}} to={"/details-page/"+hotel.id}><div className="hotel-price">Starting @{hotel.minprice} -&gt;</div></Link>
            </li>
        </div>
    )
}

export default Card
