var xhr : any= new XMLHttpRequest();
//cek status AJAX

xhr.onreadystatechange = function()
{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        (<InnerHTML>document.getElementById("tabelBuku")).innerHTML = this.responseText;
    }
}

//eksekusi ajax
xhr.open('GET', 'PHP/show_table_transaksi.php', true);
xhr.send();
