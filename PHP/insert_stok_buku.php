<?php
$conn = new mysqli('localhost', 'root', '', 'perpustakaan');
if($conn->connect_error) {
    exit('Could not connect');
  }

$id_buku = $_GET['idBuku'];
$judul_buku = $_GET['JudulBuku'];
$nama_pengarang =  $_GET['pengarang'];
$penerbit = $_GET['penerbit'];
$tahun_terbit = $_GET['tahunTerbit'];
$stok_buku =  $_GET['stok'];
$db_querry = "INSERT INTO `stok_buku` (`id_buku`, `judul_buku`, `pengarang`, `penerbit`, `tahun_terbit`, `stok`) VALUES ('$id_buku', '$judul_buku', '$nama_pengarang', '$penerbit', '$tahun_terbit', '$stok_buku')";

$result = mysqli_query($conn, $db_querry);
$conn->close();
/*$nama = $_GET['nama'] ;
$catatan = $_GET['catatan'];


$db_querry ="INSERT INTO `test1` (`nama`, `catatan`) VALUES ('Bamang', 'adsw');" ;
$result = mysqli_query($conn, $db_querry);
$conn->close(); */
?>


