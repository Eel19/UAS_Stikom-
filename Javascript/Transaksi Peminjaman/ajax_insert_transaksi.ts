function SUBMIT(){
    var IDnama = (<HTMLInputElement>document.getElementById('txt_nama'));
    var IDbuku = (<HTMLInputElement>document.getElementById('txt_judul'));
    var tglPinjam = (<HTMLInputElement>document.getElementById('txt_waktu_pinjam'));
    var tglKembali = (<HTMLInputElement>document.getElementById('txt_waktu_kembali'));
    var xhr : any= new XMLHttpRequest();
        //cek status AJAX
        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4 && xhr.status == 200)
            {
            alert("success")
            }
        }

        //eksekusi ajax
        xhr.open('GET', 'PHP/insert_transaksi.php?nama=' + IDnama.value + "&" + 'buku=' + IDbuku.value + "&" + 'tglPinjam=' + tglPinjam.value + "&" + 'tglKembali=' + tglKembali.value, true);
        xhr.send();
}