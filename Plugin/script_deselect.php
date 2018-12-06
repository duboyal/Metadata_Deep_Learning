<?php
  $data = $_GET['data'];
  $bridge = mysqli_connect('localhost','root','','al');
  #$query = "INSERT INTO deselect(Image_link) values('$data') ";
  $query = "INSERT INTO deselect(Image_link) SELECT('$data') WHERE NOT EXISTS (SELECT * FROM deselect WHERE Image_link = '$data')";
  if ($bridge->query($query)){
    echo 'Data Inserted';
  }
  else{
    echo 'Fail';
  }

?>
