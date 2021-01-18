<?php
$conn = new mysqli('localhost', 'root', '', 'perpustakaan');
if($conn->connect_error) {
    exit('Could not connect');
  }

$nis = $_GET['NIS'];
$nama = $_GET['Nama'];
$TTG =  $_GET['TTG'];
$TTL = $_GET['TTL'];
$noHP = $_GET['noHP'];
$email =  $_GET['email'];
$jurusan = $_GET['jurusan'];

$db_querry = "INSERT INTO `anggota_perpus` (`NIS`, `Nama`, `Tmpt_Tinggal`, `tgl_lahir`, `no_HP`, `email`, `jurusan`) VALUES ('$nis', '$nama', '$TTL', '$TTG', '$noHP', '$email', '$jurusan')";

$result = mysqli_query($conn, $db_querry);
$conn->close();
/*$nama = $_GET['nama'] ;
$catatan = $_GET['catatan'];


$db_querry ="INSERT INTO `test1` (`nama`, `catatan`) VALUES ('Bamang', 'adsw');" ;
$result = mysqli_query($conn, $db_querry);
$conn->close(); */
?>


