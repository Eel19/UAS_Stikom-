"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var textboxt = /** @class */ (function () {
    function textboxt(tipe, id) {
        this.tipe = tipe;
        this.id = id;
    }
    textboxt.prototype.output = function () {
        return "<input type=\"" + this.tipe + "\" id=\"" + this.id + "\">";
    };
    return textboxt;
}());
var text = /** @class */ (function (_super) {
    __extends(text, _super);
    function text(id) {
        return _super.call(this, "text", id) || this;
    }
    return text;
}(textboxt));
var date = /** @class */ (function (_super) {
    __extends(date, _super);
    function date(id) {
        return _super.call(this, "date", id) || this;
    }
    return date;
}(textboxt));
var email = /** @class */ (function (_super) {
    __extends(email, _super);
    function email(id) {
        return _super.call(this, "email", id) || this;
    }
    return email;
}(textboxt));
var button = /** @class */ (function () {
    function button(tipe, teks, onclick) {
        this.tipe = tipe;
        this.teks = teks;
        this.onclick = onclick;
    }
    button.prototype.output = function () {
        return "<input type=\"" + this.tipe + "\" value=\"" + this.teks + "\" onclick=\"" + this.onclick + "\">";
    };
    return button;
}());
var namaPinjam = new text("txt_nama");
var Judul_buku = new text("txt_judul");
var waktu_pinjam = new date("txt_waktu_pinjam");
var waktu_kembali = new date("txt_waktu_kembali");
var btnInput = new button("button", "SUBMIT", "SUBMIT()");
var html = document.getElementById("transaksi");
html.innerHTML = "\n<form>\n    ID Nama : " + namaPinjam.output() + " <br/>\n    ID Buku : " + Judul_buku.output() + " <br/>\n    Waktu Peminjaman : " + waktu_pinjam.output() + " <br/>\n    Waktu Kembali : " + waktu_kembali.output() + " <br/>\n    " + btnInput.output() + "\n</form>\n";
