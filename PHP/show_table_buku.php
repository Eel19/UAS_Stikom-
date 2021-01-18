<?php
$con=mysqli_connect("localhost","root","","perpustakaan");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM `stok_buku`");
$data = array();

//while ($row = mysqli_fetch_array($result))
//{

//}
echo "<table border='1'>
<tr>
<th>ID Buku</th>
<th>Judul Buku</th>
<th>Pengarang Buku</th>
<th>Penerbit</th>
<th>Tahun Terbit</th>
<th>Stok Buku</th>
</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['id_buku'] . "</td>";
echo "<td>" . $row['judul_buku'] . "</td>";
echo "<td>" . $row['pengarang'] . "</td>";
echo "<td>" . $row['penerbit'] . "</td>";
echo "<td>" . $row['tahun_terbit'] . "</td>";
echo "<td>" . $row['stok'] . "</td>";
echo "</tr>";
}
echo "</table>";

?>