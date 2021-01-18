"use strict";
function daftar_buku() {
    var id_buku = document.getElementById("txt_id_buku");
    var judul_buku = document.getElementById("txt_judul_buku");
    var pengarang = document.getElementById("txt_pengarang");
    var penerbit = document.getElementById("txt_penerbit");
    var tahun_terbit = document.getElementById("txt_tahun_terbit");
    var stok_buku = document.getElementById("txt_stok_buku");
    if (id_buku.value.length == 0) {
        alert("Isi ID Buku");
    }
    else if (judul_buku.value.length == 0) {
        alert("Isi Judul Buku");
    }
    else if (pengarang.value.length == 0) {
        alert("Isi Nama Pengarang");
    }
    else if (penerbit.value.length == 0) {
        alert("Isi Penerbit");
    }
    else if (tahun_terbit.value.length == 0) {
        alert("Isi Tahun Terbit");
    }
    else if (stok_buku.value.length == 0) {
        alert("Isi Stok Buku");
    }
    else {
        //objek AJAX
        var xhr = new XMLHttpRequest();
        //cek status AJAX
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                alert("Sending Data Buku Successful");
            }
        };
        //eksekusi AJAX
        xhr.open('GET', 'PHP/insert_stok_buku.php?idBuku=' + id_buku.value + "&" + 'JudulBuku=' + judul_buku.value + "&"
            + 'pengarang=' + pengarang.value + "&" + 'penerbit=' + penerbit.value + "&" + 'tahunTerbit=' + tahun_terbit.value + "&" + 'stok=' + stok_buku.value, true);
        xhr.send();
        window.location.reload();
    }
}
