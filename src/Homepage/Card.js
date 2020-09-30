import React from 'react'

function Card({hotel}) {
    return (
        <div className="card-container">
            <li className="hotel">
                <div className="hotel-name">{hotel.name}</div>
                <div className="hotel-place">{hotel.place}</div>
                <img className="hotel-image" src={hotel.image} alt={hotel.name} />
                <div className="hotel-price">Starting @{hotel.price} -&gt;</div>
            </li>
        </div>
    )
}

export default Card
