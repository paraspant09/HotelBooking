<?php
    if(isset($_SESSION['username'])){
      echo "<script> alert('You are  already Logged in.') </script>";
    }
    else{

      $name=$_POST['FirstName'] . " " . $_POST['LastName'];
      $username=$_POST['email'];
      $password=$_POST['password'];
      $authAs=$_COOKIE['Auth'];

      try {
        $con=new PDO('mysql:host=localhost;dbname=authdb;','root');
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        try{
          $checkTable=$con->query("SELECT 1 FROM Users LIMIT 1");  //check if table exists or not
        }
        catch(Exception $e)
        {
          $q="CREATE TABLE Users(username varchar(50) PRIMARY KEY,password varchar(50) NOT NULL,name varchar(50) NOT NULL,authas varchar(8) NOT NULL)";
          $con->exec($q);
        }

        $q="SELECT username FROM Users WHERE username='$username'";
        $result=$con->query($q);
        $assoc=$result->fetch();
        if(empty($assoc))
        {
          $q="INSERT INTO Users(username,password,name,authas) VALUES('$username','$password','$name','$authAs')";
          $con->exec($q);
          echo "<script> alert('$name,You are registered.') </script>";
        }
        else {
          echo "<script> alert('$username is already a registered email.') </script>";
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
