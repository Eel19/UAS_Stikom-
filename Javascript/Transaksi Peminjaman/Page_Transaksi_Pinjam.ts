class textboxt{
    tipe: string;
    id: string;

    constructor(tipe: string, id: string ){
        this.tipe = tipe;
        this.id = id;
    }

    output(){
        return `<input type="${this.tipe}" id="${this.id}">`
    }
}

class text extends textboxt{
    constructor(id:string){
        super("text", id);
}

class date extends textboxt{
    constructor(id:string){
        super("date", id);
}

class email extends textboxt{
    constructor(id:string){
        super("email", id);
}

class button{
    tipe: string;
    onclick: string;
    teks: string;

    constructor(tipe: string, teks: string, onclick: string ){
        this.tipe = tipe;
        this.teks= teks;
        this.onclick = onclick;
    }

    output(){
        return `<input type="${this.tipe}" value="${this.teks}" onclick="${this.onclick}">`
    }

}

var namaPinjam = new text("txt_nama");
var Judul_buku = new text( "txt_judul");
var waktu_pinjam = new date( "txt_waktu_pinjam");
var waktu_kembali = new date( "txt_waktu_kembali");


let btnInput = new button("button", "SUBMIT", "SUBMIT()");

let html = document.getElementById("transaksi");

html.innerHTML = `
<form>
    ID Nama : ${namaPinjam.output()} <br/>
    ID Buku : ${Judul_buku.output()} <br/>
    Waktu Peminjaman : ${waktu_pinjam.output()} <br/>
    Waktu Kembali : ${waktu_kembali.output()} <br/>
    ${btnInput.output()}
</form>
`;

