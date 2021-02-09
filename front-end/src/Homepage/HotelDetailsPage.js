import React,{useState} from 'react'
import RoomDetailCard from './RoomDetailCard';

function HotelDetailsPage() {

    const [showFullDescription, setshowFullDescription] = useState(false);

    let hotelDetails={
        id:1,
        name:"Taj Hotel",
        city:"bhajanpura",
        state:"Mumbai",
        minprice:3000,
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?",
        restrictions:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?",
        facilities:["full Air Conditioned","free Wifi","free Dinner"],
        chargableFacilities:[{name:"full Air Conditioned",cost:200},{name:"free Wifi",cost:500},{name:"free Dinner",cost:600}],
        frontimage:"/images/hotel_1.jpg",
        extraImages:["/images/hotel_1.jpg","/images/hotel_2.jpg","/images/hotel_3.jpg","/images/hotel_4.jpg"],
        roomDetails:[
            {type:"single bed room",image:"/images/hotel_1.jpg",cost:3000,specialities:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"+
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"},
            {type:"double bed room",image:"/images/hotel_2.jpg",cost:4000,specialities:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"},
            {type:"garden view room",image:"/images/hotel_3.jpg",cost:5000,specialities:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit molestiae fugiat, expedita nam provident corporis sed adipisci quidem itaque, libero quia velit? Aspernatur labore ducimus autem ipsam molestiae quaerat?"}
        ]
    };

    const rightMove=()=>{
        var first=document.getElementById("corousel-images").firstChild;
        document.getElementById("corousel-images").appendChild(first);
    }

    const leftMove=()=>{
        var first=document.getElementById("corousel-images").firstChild;
        var last=document.getElementById("corousel-images").lastChild;
        document.getElementById("corousel-images").insertBefore(last,first);
    }

    return (
        <div className="page">
            <div className="details-container">
                <div className="front-image">
                    <img src={hotelDetails.frontimage} alt="Not Found!!"/>
                </div>
                <div className="hotel-details">
                    <h1 className="main-heading">{hotelDetails.name}</h1>
                    <h2 className="main-heading">{hotelDetails.city+" , "+hotelDetails.state}</h2>
                    {/* Later check find minimum room price from all room prices instead of taking input from user */}
                    {/* <h2 className="main-heading">$ {hotelDetails.minprice} Minimum Room Price</h2> */}
                    <h2 className="heading">Hotel Description</h2>
                    <p className="content">{
                        !showFullDescription && hotelDetails.description.length > 500 &&
                        hotelDetails.description.substr(0,500)+" ... "
                    }
                    {
                        !showFullDescription && hotelDetails.description.length > 500 &&
                        <span className="show-hide-link" onClick={e => setshowFullDescription(!showFullDescription)}>read more</span>
                    }
                    {
                        (showFullDescription || hotelDetails.description.length <= 500) &&
                        hotelDetails.description+" "
                    }
                    {
                        showFullDescription && hotelDetails.description.length > 500 &&
                        <span className="show-hide-link" onClick={e => setshowFullDescription(!showFullDescription)}>hide text</span>
                    }
                    </p>
                </div>
                <div className="extra-hotel-details">
                    <h2 className="heading">Hotel Restrictions</h2>
                    <p className="content">{hotelDetails.restrictions}</p>
                    <h2 className="heading">Facilities</h2>
                    <ol className="content">
                        {
                            hotelDetails.facilities.map((facility,index)=>{
                            return <li key={index}>{facility}</li>
                            })
                        }
                    </ol>
                    <h2 className="heading">Chargable Facilities</h2>
                    <table className="table-content">
                        <thead>
                            <tr>
                                <th>FACILITY</th>
                                <th>COST</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            hotelDetails.chargableFacilities.map((facility,index)=>{
                            return <tr key={index}>
                                    <td>{facility.name} </td>
                                    <td>$ {facility.cost} </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
            <h2 className="heading">Hotel Images</h2>
            <div className="corousel-container">
                <div onClick={leftMove} className="button">&larr;</div>
                <div id="corousel-images">
                    {
                        hotelDetails.extraImages.map((image,index)=>{
                            return <img key={index} src={image} alt="Not Found!!" className="item" />
                        })
                    }
                </div>
                <div onClick={rightMove} className="button">&rarr;</div>
            </div>
            <h2 className="heading">Types of Rooms</h2>
            <div className="rooms-card-container">
                {
                    hotelDetails.roomDetails.map((detail,index)=>{
                        return <RoomDetailCard key={index} roomDetails={detail} />
                    })
                }
            </div>
        </div>
        
    )
}

export default HotelDetailsPage
