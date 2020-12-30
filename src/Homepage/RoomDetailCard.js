import React from 'react'

function RoomDetailCard({ roomDetails }) {
    return (
        <div className="room-card">
            <img src={roomDetails.image} alt="Not Found!!" className="room-image" />
            <div className="data">
                <h1 className="heading">{roomDetails.type}</h1>
                <h3 className="content">$ {roomDetails.cost}</h3>
                <h3 className="content">{roomDetails.specialities}</h3>
                <button>BOOK NOW</button>
            </div>
        </div>
    )
}

export default RoomDetailCard
