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
/*class nis extends textboxt{
    constructor(tipe: string, id:string){
        super(tipe, id);
    }
}

class nama extends textboxt{
    constructor(tipe: string, id:string){
        super(tipe, id);
    }
}


class tglLahir extends textboxt{
    constructor(tipe: string, id:string){
        super(tipe, id);
    }
}

class tempatTinggal extends textboxt{
    constructor(tipe: string, id:string){
        super(tipe, id);
    }
}

class email extends textboxt{
    constructor(tipe: string, id:string){
        super(tipe, id);
    }
}

class noHP extends textboxt{
    constructor(tipe: string, id:string){
        super(tipe, id);
    }
}
*/
var selectTag = /** @class */ (function () {
    function selectTag(name, id) {
        this.name = name;
        this.id = id;
    }
    selectTag.prototype.output1 = function () {
        return "<select type=\"" + this.name + "\" id=\"" + this.id + "\">";
    };
    return selectTag;
}());
var option = /** @class */ (function () {
    function option(value, teks) {
        this.value = value;
        this.teks = teks;
    }
    option.prototype.option = function () {
        return "<option value=\"" + this.value + "\">" + this.teks + "</option>";
    };
    return option;
}());
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
var NIS = new text("txtNIS");
var Nama = new text("txtNama");
var TglLahir = new date("TxtTglLahir");
var Tempat = new text("txtTempatTinggal");
var Email = new email("txtEmail");
var NoHP = new text("txtNoHP");
var SelectJurusan = new selectTag("submit", "selectJurusan");
var optionMM = new option("Multimedia", "Multimedia");
var optionAK = new option("Akuntansi", "Akuntansi");
var optionTKJ = new option("Teknik Komputer & Jaringan", "Teknik Komputer dan Jaringan");
var optionKosong = new option("", "=======");
var btnSubmit = new button("button", "SUBMIT", "daftar()");
var daftar = document.getElementById("daftar");
daftar.innerHTML = "\n<form>\n    NIS : " + NIS.output() + " <br/>\n    Nama : " + Nama.output() + " <br/>\n    Tgl Lahir : " + TglLahir.output() + " <br/>\n    Tempat Tinggal : " + Tempat.output() + " <br/>\n    E-mail : " + Email.output() + " <br/>\n    Nomor Telepon :" + NoHP.output() + " <br/>\n    Jurusan : " + SelectJurusan.output1() + "\n        " + optionKosong.option() + " \n        " + optionMM.option() + "\n        " + optionAK.option() + " \n        " + optionTKJ.option() + "  \n        </select>\n    </br>\n    " + btnSubmit.output() + "\n</form>\n";
