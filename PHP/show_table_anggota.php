<?php
$con=mysqli_connect("localhost","root","","perpustakaan");
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM `anggota_perpus`");
$data = array();

//while ($row = mysqli_fetch_array($result))
//{

//}




echo "<table border='1'>
<tr>
<th>NIS</th>
<th>Nama</th>
<th>Tanggal Lahir</th>
<th>Tempat Tinggal</th>
<th>No Telepon</th>
<th>E-mail</th>
<th>Jurusan</th>
</tr>";

 while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['NIS'] . "</td>";
echo "<td>" . $row['Nama'] . "</td>";
echo "<td>" . $row['Tmpt_Tinggal'] . "</td>";
echo "<td>" . $row['tgl_lahir'] . "</td>";
echo "<td>" . $row['no_HP'] . "</td>";
echo "<td>" . $row['email'] . "</td>";
echo "<td>" . $row['jurusan'] . "</td>";
echo "</tr>";
}
echo "</table>";

?>