<?php
  try {
        $con=new PDO('mysql:host=localhost;dbname=hoteldb;','root');
        $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        try{
        $checkTable=$con->query("SELECT 1 FROM hotelcards LIMIT 1");
        }
        catch(Exception $e)
        {
          echo "<script>alert('No table is created yet please save records of hotels.')</script>";
          goto end;
        }

        $q="SELECT hotelname,city,state,AvailableDate,totalcost FROM hotelcards";
        $result=$con->query($q);
        $ct=0;
        echo "<div id='Create'>";
        while($assoc=$result->fetch(PDO::FETCH_ASSOC)){
          $name=$assoc['hotelname'];
          $location=$assoc['city'].",".$assoc['state'];
          $date=$assoc['AvailableDate'];
          $cost=$assoc['totalcost'];
          echo "<script> CreateCard('$name','$location','$date','$cost','$ct') </script>";
          $ct++;
        }
        echo "</div>";
        if(!$ct)
        {
          echo "<script> alert('Save records to show.') </script>";
        }
end:  }
      catch (PDOException $e) {
      $message=$e->getMessage();
      echo "<script> alert(\"$message\") </script>";
      }
      finally{
      $con=NULL;
      }
 ?>
