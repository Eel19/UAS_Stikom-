"use strict";
var xhr = new XMLHttpRequest();
//cek status AJAX
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        /*var html: string = "";
        var data = JSON.parse(this.responseText);
        

            /*for(var a =0 ; a<data.length; a++){
            var nis = data[a].NIS;
            var nama = data[a].Nama;
            var tglLahir = data[a].Tmpt_Tinggal;
            var tempatTinggal = data[a].Tmpt_Tinggal;
            var email = data[a].email;
            var noTelepon = data[a].no_HP;
            var jurusan = data[a].jurusan;
            */
        //============html============
        /*html += "<tr>" + "<td>" + nis + "</td>" + "<td>" + nama + "</td>" + "<td>" + tglLahir + "</td>" + "<td>" + tempatTinggal + "</td>" + "<td>" + noTelepon + "</td>" + "<td>" + email + "</td>" + "<td>" + jurusan + "</td>" + "</tr>";
        html += "<tr>";
            html += "<td>" + nis + "</td>";
            html += "<td>" + nama + "</td>";
            html += "<td>" + tglLahir + "</td>";
            html += "<td>" + tempatTinggal + "</td>";
            html += "<td>" + noTelepon + "</td>";
            html += "<td>" + email + "</td>";
            html += "<td>" + jurusan + "</td>";
        html += "<tr>";
            */
        document.getElementById("tabelAnggota").innerHTML = this.responseText;
    }
};
//eksekusi ajax
xhr.open('POST', 'PHP/show_table_anggota.php', true);
xhr.send();
