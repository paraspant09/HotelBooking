import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Register() {
    const [authType, setauthType] = useState(null);

    const AuthTypeChange=type  => e =>{
        
        if(document.getElementById("reg-type-error").classList.contains("error-show"))
            document.getElementById("reg-type-error").classList.replace("error-show","error-hide");

        if(authType!==null && authType!==type)
            document.getElementById(authType).classList.remove("active");
        if(authType!==type){
            document.getElementById(type).classList.add("active");
            setauthType(type);
        }
    }

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

    const RegisterCheckCreditionals=(e)=>{
        e.preventDefault();
        let firstName=document.getElementById("FName");
        let lastName=document.getElementById("LName");
        let user=document.getElementById("RegisterEmail");
        let pass=document.getElementById("RegisterPassword");
        let confirmpass=document.getElementById("ConfirmPassword");
        let auth_as=authType;
        let checkInvalidity=false;

        if(auth_as===null)
          {
              ShowError("reg-type-error","Choose Authentication as customer or hotel.!!");
              checkInvalidity=true;
          }
        if(firstName.value==="")
          {
              ShowError("name-error","Enter First Name!!");
              if(!checkInvalidity)  firstName.focus();
              checkInvalidity=true;
          }
        if(lastName.value==="")
          {
              ShowError("name-error","Enter Last Name!!");
              if(!checkInvalidity)  lastName.focus();
              checkInvalidity=true;
          }
        if(user.value==="")
          {
              ShowError("reg-email-error","Enter Email!!");
              if(!checkInvalidity)  user.focus();
              checkInvalidity=true;
          }
        if(pass.value==="")
          {
              ShowError("reg-pass-error","Enter Password!!");
              if(!checkInvalidity)  pass.focus();
              checkInvalidity=true;
          }
        if(pass.value.length<=6)
          {
              ShowError("reg-pass-error","Password length must be greater than 6!!");
              if(!checkInvalidity)  pass.focus();
              checkInvalidity=true;
          }
        if(confirmpass.value==="")
          {
              ShowError("confirm-pass-error","Enter password for confirmation!!");
              if(!checkInvalidity)  confirmpass.focus();
              checkInvalidity=true;
          }
        if(pass.value !== confirmpass.value)
        {
              ShowError("confirm-pass-error","Passwords are not matching!!");
              if(!checkInvalidity)  confirmpass.focus();
              checkInvalidity=true;
        }

        return checkInvalidity;
    }

    return (
        <div className="card-container">
            <div className="card">
                {/* <div className="cancel" onClick={RemoveAll}>✖</div> */}

                <div className="type">
                    <div id="RegisterCustomer" className="choice" onClick={AuthTypeChange("RegisterCustomer")}>CUSTOMER REGISTER</div>
                    <div id="RegisterHotel" className="choice" onClick={AuthTypeChange("RegisterHotel")}>HOTEL REGISTER</div>
                </div>

                <form className="form" action="HomePage.php" method="post">
                    
                    <p id="reg-type-error" className="error-hide"></p>

                    <div className="name-labels">
                        <label htmlFor="FName" className="NameLabel">First Name</label>
                        <label htmlFor="LName" className="NameLabel">Last Name</label>
                    </div>

                    <div className="name-inputs">
                        <input type="text" id="FName" className="text-box" name="FirstName" onChange={RemoveError("name-error")}/>
                        <input type="text" id="LName" className="text-box" name="LastName" onChange={RemoveError("name-error")}/>
                    </div>

                    <p id="name-error" className="error-hide"></p>

                    <label htmlFor="RegisterEmail">Email Address</label>
                    <input type="email" id="RegisterEmail" className="text-box" name="email" onChange={RemoveError("reg-email-error")}/>

                    <p id="reg-email-error" className="error-hide"></p>

                    <label htmlFor="RegisterPassword">Password</label>
                    <input type="password" id="RegisterPassword" className="text-box" name="password" onChange={RemoveError("reg-pass-error")}/>

                    <p id="reg-pass-error" className="error-hide"></p>

                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password" id="ConfirmPassword" className="text-box" name="password" onChange={RemoveError("confirm-pass-error")}/>

                    <p id="confirm-pass-error" className="error-hide"></p>

                    <input type="submit" className="submit-btn" id="RegisterAuth" name="Register" onClick={RegisterCheckCreditionals} value="Register"/>

                    <p className="bottom-link">Already a member? <Link to="/login"> Login here </Link></p>
                </form>
                
            </div>
        </div>
    )
}

export default Register
