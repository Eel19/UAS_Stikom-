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

/*class date extends textboxt{
    constructor(id:string){
        super("date", id);
}


class email extends textboxt{
    constructor(id:string){
        super("email", id);
}
*/

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

let id_buku = new text("txt_id_buku");
let judul_buku = new text( "txt_judul_buku");
let pengarang = new text( "txt_pengarang");
let penerbit = new text( "txt_penerbit");
let tahun_terbit = new text("txt_tahun_terbit")
let stok_buku = new text("txt_stok_buku")

let btnSubmit = new button("button" "SUBMIT", "daftar_buku()");

let html_stok_buku = document.getElementById("form_stok_buku");

html_stok_buku.innerHTML = `
<form>
    ID buku : ${id_buku.output()} <br/>
    Judul Buku : ${judul_buku.output()} <br/>
    Pengarang : ${pengarang.output()} <br/>
    Penerbit : ${penerbit.output()} <br/>
    Tahun Terbit : ${tahun_terbit.output()} <br/>
    Stok : ${stok_buku.output()} <br/>
    ${btnSubmit.output()}
</form>
`;

