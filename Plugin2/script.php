<?php
  $data = $_GET['deselect'];
  $data2 = $_GET['lasso'];
  $dataary = explode(",", $data);
  $dataary2 = explode(",", $data2);
  $vals = "";
  $vals2 = "";
  foreach( $dataary as $x ){
    $vals .= "('".$x."')".", ";
  }
  foreach( $dataary2 as $x ){
    $vals2 .= "('".$x."')".", ";
  }

  $vals = substr($vals , 0 , -2);
  $vals2 = substr($vals2 , 0 , -2);
  $bridge = mysqli_connect('localhost','root','','al');
  #$query = "INSERT INTO lasso(Image_link) values('$data')";

  $query = "INSERT INTO deselect(Image_link) values ".$vals."";
  $query2 = "INSERT INTO lasso(Image_link) values ".$vals2."";
  #$query  = "INSERT INTO lasso(Image_link) SELECT('$data') WHERE NOT EXISTS (SELECT * FROM lasso WHERE Image_link = '$data')";
  if ($bridge->query($query)){
    echo 'Data Inserted';
  }
  else{
    echo 'Fail';
  }
  if ($bridge->query($query2)){
    echo 'Data Inserted';
  }
  else{
    echo 'Fail';
  }
?>
