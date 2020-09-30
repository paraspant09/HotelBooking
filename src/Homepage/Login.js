import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Login() {

    const [authType, setauthType] = useState(null);

    const AuthTypeChange=type  => e =>{
        
        if(document.getElementById("login-type-error").classList.contains("error-show"))
            document.getElementById("login-type-error").classList.replace("error-show","error-hide");

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

    const LoginCheckCreditionals=(e)=>{
        e.preventDefault();
        let user=document.getElementById("LoginEmail");
        let pass=document.getElementById("LoginPassword");
        let auth_as=authType;
        let checkInvalidity=false;

        if(auth_as===null)
          {
              ShowError("login-type-error","Choose Authentication as customer or hotel.!!");
              checkInvalidity=true;
          }
        if(user.value==="")
          {
              ShowError("login-email-error","Enter Email!!");
              if(!checkInvalidity)  user.focus();
              checkInvalidity=true;
          }
        if(pass.value==="")
          {
              ShowError("login-pass-error","Enter Password!!");
              if(!checkInvalidity)  pass.focus();
              checkInvalidity=true;
          }
        if(pass.value.length<=6)
          {
              ShowError("login-pass-error","Password length must be greater than 6!!");
              if(!checkInvalidity)  pass.focus();
              checkInvalidity=true;
          }

        return checkInvalidity;
    }

    return (
        <div className="card-container">

            <div className="card">
                <div className="type">
                    <div id="LoginCustomer" className="choice" onClick={AuthTypeChange("LoginCustomer")}>CUSTOMER LOGIN</div>
                    <div id="LoginHotel" className="choice" onClick={AuthTypeChange("LoginHotel")}>HOTEL LOGIN</div>
                </div>

                <form className="form" action="HomePage.php" method="post">

                    <p id="login-type-error" className="error-hide"></p>

                    <label htmlFor="LoginEmail">User ID / Email</label>
                    <input type="email" id="LoginEmail" className="text-box" name="email" onChange={RemoveError("login-email-error")}/>

                    <p id="login-email-error" className="error-hide"></p>

                    <label htmlFor="LoginPassword">Password</label>
                    <input type="password" id="LoginPassword" className="text-box" name="password" onChange={RemoveError("login-pass-error")}/>

                    <p id="login-pass-error" className="error-hide"></p>

                    <div id="ForgotPassword">Forgot Password?</div>

                    <input type="submit" className="submit-btn" id="loginAuth" name="Login" onClick={LoginCheckCreditionals} value="Login" />

                    <p className="bottom-link">Don't have an account yet? <Link to="/register"> Register here </Link></p>
                </form>
            </div>
            
        </div>
    )
}

export default Login
