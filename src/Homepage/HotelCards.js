import React from 'react'
import Card from './Card';

function HotelCards() {
    let hotels=[
        {id:1,name:"Raj",place:"Mumbai",image:"/images/hotel_1.jpg",price:"3000"},
        {id:2,name:"Rohit",place:"Delhi",image:"/images/hotel_2.jpg",price:"4000"},
        {id:3,name:"Rits",place:"Agra",image:"/images/hotel_3.jpg",price:"1000"},
        {id:4,name:"Taj",place:"Rajasthan",image:"/images/hotel_4.jpg",price:"5000"}];
    return (
        <ul className="hotels">
            {
                hotels.map((hotel) =>{
                    return <Card key={hotel.id} hotel={hotel}/>
                })
            }
        </ul>
    )
}

export default HotelCards
