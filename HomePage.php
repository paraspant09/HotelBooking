<?php session_start();
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="data:;base64,iVBORw0KGgo=">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <title>Hotel Booking</title>
  </head>
  <body>
    <ul id="navbar">
      <div id="icon" onclick="changeIcon()">&#9776;</div>
      <div id="GroupLi">
        <form action="HomePage.php" class="left_li" method="post">
           <input type="submit" onclick="Hide()" class="navpressed" name="Hotels" value="Hotels">
        </form>
        <form action="HomePage.php" class="left_li" method="post">
           <input type="submit" onclick="Hide()" id="Logout" class="navpressed" name="Logout" value="Logout">
        </form>
        <li class="left Li" id="ShowCard" onclick="CardView()"> Card </li>

        <li class="right Li" onclick="RegisterView()"> Register </li>
        <li class="right Li" onclick="LoginView()"> Login </li>
      </div>
    </ul>

  <!-- 0 denotes register 2 denotes login. -->
    <div id="bg-modal">

      <div id="modal-CardEntry">
        <label class="Cancel" onclick="RemoveAll()">+</label>
        <h2 style="text-align: center;width:100%;color:darkblue;">  CARD </h2>

        <form class="Form" action="HomePage.php" method="post">
          <label for="Hotel">Hotel Name</label>
          <input type="text" id="Hotel" class="NormalTextBox" name="hotel">

          <label for="City">City</label>
          <input type="text" id="City" class="NormalTextBox" name="city">

          <label for="State">State</label>
          <input type="text" id="State" class="NormalTextBox" name="state">

          <label for="Date">Available Date</label>
          <input type="date" id="Date" class="NormalTextBox" name="date">

          <label for="Cost">Cost</label>
          <input type="number" id="Cost" class="NormalTextBox" name="cost">

          <input type="submit" class="submit" id="CardEntry" name="Card" onclick="return CardCheckCreditionals()" value="Card">

        </form>
      </div>

      <div id="modal-Register">
        <label class="Cancel" onclick="RemoveAll()">+</label>
        <div class="Choose-auth">
          <div class="choice" onclick="Customer(0)">CUSTOMER REGISTER</div>
          <div class="choice" onclick="Hotel(0)">HOTEL REGISTER</div>
        </div>

        <form class="Form" action="HomePage.php" method="post">
          <label for="FName" class="NameLabel">First Name</label>
          <label for="LName" class="NameLabel">Last Name</label>
          <input type="text" id="FName" class="NameTextBox" name="FirstName">
          <input type="text" id="LName" class="NameTextBox" name="LastName">

          <label for="RegisterEmail">Email Address</label>
          <input type="email" id="RegisterEmail" class="NormalTextBox" name="email">

          <label for="RegisterPassword">Password</label>
          <input type="password" id="RegisterPassword" class="NormalTextBox" name="password">

          <label for="ConfirmPassword">Confirm Password</label>
          <input type="password" id="ConfirmPassword" class="NormalTextBox" name="password">

          <input type="submit" class="submit" id="RegisterAuth" name="Register" onclick="return RegisterCheckCreditionals()" value="Register">

          <p>Already a member? Login here (<span onclick="LoginView()">Customer</span> / <span onclick="LoginView()">Hotel</span>)</p>
        </form>
      </div>

      <div id="modal-Login">
        <label class="Cancel" onclick="RemoveAll()">+</label>
        <div class="Choose-auth">
          <div class="choice" onclick="Customer(2)">CUSTOMER LOGIN</div>
          <div class="choice" onclick="Hotel(2)">HOTEL LOGIN</div>
        </div>

        <form class="Form" action="HomePage.php" method="post">
          <label for="LoginEmail">User ID / Email</label>
          <input type="email" id="LoginEmail" class="NormalTextBox" name="email">

          <label for="LoginPassword">Password</label>
          <input type="password" id="LoginPassword" class="NormalTextBox" name="password">

          <div id="ForgotPassword">Forgot Password?</div>

          <input type="submit" class="submit" id="loginAuth" name="Login" onclick="return LoginCheckCreditionals()" value="Login">

          <p>Don't have an account yet? Register now (<span onclick="RegisterView()">Customer</span> / <span onclick="RegisterView()">Hotel</span>)</p>
        </form>
      </div>
    </div>
    <?php
      if(isset($_POST['Hotels'])){
         if(isset($_SESSION['username'])){
           include 'FetchCities.php';
           echo "<select class='filter' name='CityFetch' onclick='AjaxRequest(this.value)'>";
           for ($i=0; $i < count($cities); $i++) {
             echo "<option value='";
             print_r($cities[$i]);
             echo "'>";
             print_r($cities[$i]);
             echo "</option>";
           }
           echo "</select>";
         }
      }
     ?>
     <div id="CardContainer">

     </div>


     <script type="text/javascript" src="script.js"></script>

     <?php
       if(isset($_POST['Register'])){
         echo "<script> RemoveAll() </script>";
         if(isset($_COOKIE["Auth"])){
             include 'Register.php';
         }
         else {
           echo "<script> alert('Choose from customer or hotel user.'); </script>";
         }
       }
       if(isset($_POST['Login'])){
         echo "<script> RemoveAll() </script>";
         if(isset($_COOKIE["Auth"])){
             include 'Login.php';
         }
         else {
           echo "<script> alert('Choose from customer or hotel user.'); </script>";
         }
       }
       if(isset($_POST['Logout'])){
         if(isset($_SESSION['username'])){
           session_unset();
           echo "<script> document.getElementById('ShowCard').style.display='none'; </script>";
           echo "<script> document.getElementById('Logout').style.display='none'; </script>";
           echo "<script> alert('You are Logged out.'); </script>";
           echo "<script> location.href='HomePage.php' </script>";
         }
         else {
           echo "<script> alert('You are not Logged in.'); </script>";
         }
       }
       if(isset($_SESSION['username'])){
         echo "<script> document.getElementById('Logout').style.display='block'; </script>";
         if($_SESSION['Authas']=="Hotel"){
           echo "<script> document.getElementById('ShowCard').style.display='block'; </script>";
         }
       }
       if(isset($_POST['Card'])){
         echo "<script> RemoveAll() </script>";
         if($_SESSION['Authas']=="Hotel"){
             include 'CardEntry.php';
         }
         else {
           echo "<script> alert('Only Hotels can create cards.'); </script>";
         }
       }
       if(isset($_POST['Hotels'])){
         include 'CardShow.php';
       }
       if(isset($_POST['CityFetch'])){
         include 'FetchCitiesCards.php';
       }
      ?>



  </body>
</html>
