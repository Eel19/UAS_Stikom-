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

class selectTag{
    name: string;
    id: string;
    

    constructor(name: string, id: string){
        this.name = name;
        this.id = id;
    }

    output1(){
        return `<select type="${this.name}" id="${this.id}">`
    }
}

class option{
    value: string;
    teks: string

    constructor(value: string, teks: string){
        this.value = value;
        this.teks = teks;
    }
    option(){
        return `<option value="${this.value}">${this.teks}</option>`
    }
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

let NIS = new text( ,"txtNIS");
let Nama = new text( "txtNama");
let TglLahir = new date( "TxtTglLahir");
let Tempat = new text( "txtTempatTinggal");
let Email = new email( "txtEmail");
let NoHP = new text( "txtNoHP");

let SelectJurusan = new selectTag("submit", "selectJurusan");
let optionMM = new option("Multimedia", "Multimedia");
let optionAK = new option("Akuntansi", "Akuntansi");
let optionTKJ = new option("Teknik Komputer & Jaringan", "Teknik Komputer dan Jaringan");
let optionKosong = new option( "", "=======");

let btnSubmit = new button("button" "SUBMIT", "daftar()");

let daftar = document.getElementById("daftar");

daftar.innerHTML = `
<form>
    NIS : ${NIS.output()} <br/>
    Nama : ${Nama.output()} <br/>
    Tgl Lahir : ${TglLahir.output()} <br/>
    Tempat Tinggal : ${Tempat.output()} <br/>
    E-mail : ${Email.output()} <br/>
    Nomor Telepon :${NoHP.output()} <br/>
    Jurusan : ${SelectJurusan.output1()}
        ${optionKosong.option()} 
        ${optionMM.option()}
        ${optionAK.option()} 
        ${optionTKJ.option()}  
        </select>
    </br>
    ${btnSubmit.output()}
</form>
`;

