<?php
try {
      $con=new PDO('mysql:host=localhost;dbname=hoteldb;','root');
      $con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

      try{
      $checkTable=$con->query("SELECT 1 FROM hotelcards LIMIT 1");
      }
      catch(Exception $e)
      {
        goto end;
      }

      $q="SELECT DISTINCT city FROM hotelcards";
      $result=$con->query($q);
      $ct=0;
      while($assoc=$result->fetch(PDO::FETCH_ASSOC)){
        $cities[$ct]=$assoc['city'];
        $ct++;
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
