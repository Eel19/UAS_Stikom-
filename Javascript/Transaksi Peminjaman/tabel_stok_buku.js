"use strict";
var xhr = new XMLHttpRequest();
//cek status AJAX
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("tabelBuku").innerHTML = this.responseText;
    }
};
//eksekusi ajax
xhr.open('GET', 'PHP/show_table_buku.php', true);
xhr.send();
