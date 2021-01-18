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
/*class date extends textboxt{
    constructor(id:string){
        super("date", id);
}


class email extends textboxt{
    constructor(id:string){
        super("email", id);
}
*/
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
var id_buku = new text("txt_id_buku");
var judul_buku = new text("txt_judul_buku");
var pengarang = new text("txt_pengarang");
var penerbit = new text("txt_penerbit");
var tahun_terbit = new text("txt_tahun_terbit");
var stok_buku = new text("txt_stok_buku");
var btnSubmit = new button("button", "SUBMIT", "daftar_buku()");
var html_stok_buku = document.getElementById("form_stok_buku");
html_stok_buku.innerHTML = "\n<form>\n    ID buku : " + id_buku.output() + " <br/>\n    Judul Buku : " + judul_buku.output() + " <br/>\n    Pengarang : " + pengarang.output() + " <br/>\n    Penerbit : " + penerbit.output() + " <br/>\n    Tahun Terbit : " + tahun_terbit.output() + " <br/>\n    Stok : " + stok_buku.output() + " <br/>\n    " + btnSubmit.output() + "\n</form>\n";
