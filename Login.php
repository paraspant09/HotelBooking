<?php
    if(isset($_SESSION['username'])){
      echo "<script> alert('You are  already Logged in.') </script>";
    }
    else{

      $username=$_POST['email'];
      $password=$_POST['password'];
      $authAs=$_COOKIE['Auth'];

      try {
        $con=new PDO('mysql:host=localhost;dbname=authdb;','root');
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        $q="SELECT username FROM Users WHERE username='$username' AND password='$password' AND authas='$authAs'";
        $result=$con->query($q);
        $assoc=$result->fetch();
        if(!empty($assoc))
        {
            echo "<script> alert('Welcome $username.') </script>";
            $_SESSION['username']=$username;
            $_SESSION['Authas']=$authAs;
          //  print_r($_SESSION['username']);

            echo "<script> location.href='HomePage.php' </script>";
        }
        else {
            echo "<script> alert('No Data Found.') </script>";
        }
      }
      catch (PDOException $e) {
        $message=$e->getMessage();
        echo "<script> alert(\"$message\") </script>";
      }
      finally{
        $con=NULL;
      }
    }
 ?>
