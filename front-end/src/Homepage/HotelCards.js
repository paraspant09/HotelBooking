import React from 'react'
import Card from './Card';

function HotelCards() {
    let hotels=[
        {id:1,name:"RajRajRajRajRajRajRaj",city:"PunePuneP",state:"MumbaiMumbai",image:"/images/hotel_1.jpg",minprice:"3000"},
        {id:2,name:"Rohit",city:"CP",state:"Delhi",image:"/images/hotel_2.jpg",minprice:"4000"},
        {id:3,name:"Rits",city:"Nainital",state:"UK",image:"/images/hotel_3.jpg",minprice:"1000"},
        {id:4,name:"Taj",city:"Jaipur",state:"Rajasthan",image:"/images/hotel_4.jpg",minprice:"5000"}];
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
