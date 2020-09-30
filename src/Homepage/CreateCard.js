import React from 'react';
import {Link} from 'react-router-dom';

function CreateCard() {

    const RemoveError=errorElement => e =>{
        if(e.target.value!==""){
            if(document.getElementById(errorElement).classList.contains("error-show"))
                document.getElementById(errorElement).classList.replace("error-show","error-hide");
        }
    }

    function ShowError(errorElement, errText) {
        if (document.getElementById(errorElement).classList.contains("error-hide")) {
            document.getElementById(errorElement).classList.replace("error-hide", "error-show");
            document.getElementById(errorElement).innerText = errText;
        }
    }

    const CardCheckCreditionals=(e)=>{
        e.preventDefault();
        let hotel=document.getElementById("Hotel");
        let city=document.getElementById("City");
        let state=document.getElementById("State");
        let date=document.getElementById("Date");
        let cost=document.getElementById("Cost");
        let checkInvalidity=false;

        if(hotel.value==="")
          {
              ShowError("hotel-name-error","Enter Hotel Name!!");
              if(!checkInvalidity)  hotel.focus();
              checkInvalidity=true;
          }
        if(city.value==="")
          {
              ShowError("hotel-city-error","Enter City!!");
              if(!checkInvalidity)  city.focus();
              checkInvalidity=true;
          }
        if(state.value==="")
          {
              ShowError("hotel-state-error","Enter State!!");
              if(!checkInvalidity)  state.focus();
              checkInvalidity=true;
          }
        if(date.value==="")
          {
              ShowError("hotel-date-error","Enter Date!!");
              if(!checkInvalidity)  date.focus();
              checkInvalidity=true;
          }
        if(cost.value==="")
          {
              ShowError("hotel-cost-error","Enter Cost!!");
              if(!checkInvalidity)  cost.focus();
              checkInvalidity=true;
          }

        return checkInvalidity;
    }

    return (
        <div className="card-container">
            <div className="card">
                <div className="type">
                    DISPLAY CARD
                </div>

                <form className="form" action="HomePage.php" method="post">
                    <label htmlFor="Hotel">Hotel Name</label>
                    <input type="text" id="Hotel" className="text-box" name="hotel" onChange={RemoveError("hotel-name-error")}/>

                    <p id="hotel-name-error" className="error-hide"></p>

                    <label htmlFor="City">City</label>
                    <input type="text" id="City" className="text-box" name="city" onChange={RemoveError("hotel-city-error")}/>

                    <p id="hotel-city-error" className="error-hide"></p>

                    <label htmlFor="State">State</label>
                    <input type="text" id="State" className="text-box" name="state" onChange={RemoveError("hotel-state-error")}/>

                    <p id="hotel-state-error" className="error-hide"></p>

                    <label htmlFor="Date">Available Date</label>
                    <input type="date" id="Date" className="text-box" name="date" onChange={RemoveError("hotel-date-error")}/>

                    <p id="hotel-date-error" className="error-hide"></p>

                    <label htmlFor="Cost">Cost</label>
                    <input type="number" id="Cost" className="text-box" name="cost" onChange={RemoveError("hotel-cost-error")}/>

                    <p id="hotel-cost-error" className="error-hide"></p>

                    <input type="submit" className="submit-btn" id="CardEntry" name="Card" onClick={CardCheckCreditionals} value="Card"/>

                    <p className="bottom-link">Authenticate ? ( <Link to="/login"> Login here </Link> / <Link to="/register"> Register here </Link> )</p>

                </form>
            </div>
      </div>
    )
}

export default CreateCard
