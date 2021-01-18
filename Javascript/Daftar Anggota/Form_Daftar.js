"use strict";
var txtNIS, txtNama, TxtTglLahir, txtTempatTinggal, txtNoHP;
var txtEmail, selectJurusan;
var xhr;
function daftar() {
    txtNIS = document.getElementById('txtNIS');
    txtNama = document.getElementById('txtNama');
    txtTempatTinggal = document.getElementById('TxtTglLahir');
    TxtTglLahir = document.getElementById('txtTempatTinggal');
    txtNoHP = document.getElementById('txtNoHP');
    txtEmail = document.getElementById('txtEmail');
    SelectJurusan = document.getElementById('selectJurusan');
    if (txtNIS.value.length == 0) {
        alert("isi NIS");
    }
    else if (txtNama.value.length == 0) {
        alert("isi Nama");
    }
    else if (txtTempatTinggal.value.length == 0) {
        alert("isi Tempat Tinggal");
    }
    else if (TxtTglLahir.value.length == 0) {
        alert("isi Tanggal Lahir");
    }
    else if (txtNoHP.value.length == 0) {
        alert("isi No HP");
    }
    else if (txtEmail.value.length == 0) {
        alert("isi Email");
    }
    else if (SelectJurusan.value.length == 0) {
        alert("isi Jurusan");
    }
    else {
        xhr = new XMLHttpRequest();
        //cek status AJAX
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.responseText);
                alert("Sending Data Successful");
            }
        };
        //eksekusi ajax
        xhr.open('GET', 'PHP/insert_anggota.php?NIS=' + txtNIS.value + "&" + 'Nama=' + txtNama.value + "&" + 'TTG=' + txtTempatTinggal.value + "&" + 'TTL=' + TxtTglLahir.value + "&" + 'noHP=' + txtNoHP.value + "&" + 'email=' + txtEmail.value
            + "&" + 'jurusan=' + SelectJurusan.value, true);
        xhr.send();
        window.location.reload();
    }
}
