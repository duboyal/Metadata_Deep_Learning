<?php
  $data = $_GET['data'];
  $bridge = mysqli_connect('localhost','root','','al');
  #$query = "INSERT INTO lasso(Image_link) values('$data')";
  $query  = "INSERT INTO lasso(Image_link) SELECT('$data') WHERE NOT EXISTS (SELECT * FROM lasso WHERE Image_link = '$data')";
  if ($bridge->query($query)){
    echo 'Data Inserted';
  }
  else{
    echo 'Fail';
  }

?>
