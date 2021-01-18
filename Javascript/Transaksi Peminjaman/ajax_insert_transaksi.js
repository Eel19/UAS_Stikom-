"use strict";
function SUBMIT() {
    var IDnama = document.getElementById('txt_nama');
    var IDbuku = document.getElementById('txt_judul');
    var tglPinjam = document.getElementById('txt_waktu_pinjam');
    var tglKembali = document.getElementById('txt_waktu_kembali');
    var xhr = new XMLHttpRequest();
    //cek status AJAX
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert("success");
        }
    };
    //eksekusi ajax
    xhr.open('GET', 'PHP/insert_transaksi.php?nama=' + IDnama.value + "&" + 'buku=' + IDbuku.value + "&" + 'tglPinjam=' + tglPinjam.value + "&" + 'tglKembali=' + tglKembali.value, true);
    xhr.send();
}
