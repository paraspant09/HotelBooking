<?php

      $Hotel=$_POST['hotel'];
      $city=$_POST['city'];
      $state=$_POST['state'];
      $Date=$_POST['date'];
      $Cost=$_POST['cost'];
      $username=$_SESSION['username'];

      try {
        $con=new PDO('mysql:host=localhost;dbname=HotelDB;','root');
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        try{
          $checkTable=$con->query("SELECT 1 FROM HotelCards LIMIT 1");  //check if table exists or not
        }
        catch(Exception $e)
        {
          $q="CREATE TABLE HotelCards(hotelname varchar(50) NOT NULL,city varchar(50) NOT NULL,state varchar(50) NOT NULL,AvailableDate varchar(50) NOT NULL,totalcost varchar(10) NOT NULL)";
          $con->exec($q);
        }
        $q="SELECT hotelname,city,state,AvailableDate,totalcost FROM HotelCards WHERE hotelname='$Hotel' And city='$city' And state='$state' And AvailableDate='$Date' And totalcost='$Cost'";
        $result=$con->query($q);
        $assoc=$result->fetch();
        if(empty($assoc))
        {
          $q="INSERT INTO HotelCards(hotelname,city,state,AvailableDate,totalcost) VALUES('$Hotel','$city','$state','$Date','$Cost')";
          $con->exec($q);

          echo "<script> alert('\"$username\",Your card is saved.') </script>";
        }
        else {
          echo "<script> alert('Same card is already saved.') </script>";
        }

      }
      catch (PDOException $e) {
        $message=$e->getMessage();
        echo "<script> alert(\"$message\") </script>";
      }
      finally{
        $con=NULL;
      }

 ?>
