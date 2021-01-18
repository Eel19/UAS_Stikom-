let txtNIS, txtNama, TxtTglLahir, txtTempatTinggal, txtNoHP ;
let txtEmail, selectJurusan ;
var  xhr;
    

function daftar(){
     txtNIS = (<HTMLInputElement>document.getElementById('txtNIS'));
     txtNama = (<HTMLInputElement>document.getElementById('txtNama'));
     txtTempatTinggal = (<HTMLInputElement>document.getElementById('TxtTglLahir'));
     TxtTglLahir = (<HTMLInputElement>document.getElementById('txtTempatTinggal'));
     txtNoHP = (<HTMLInputElement>document.getElementById('txtNoHP'));
     txtEmail = (<HTMLInputElement>document.getElementById('txtEmail'));
     SelectJurusan = (<HTMLInputElement>document.getElementById('selectJurusan'));
     

     if (txtNIS.value.length == 0)
     {
         alert("isi NIS");
     }

     else if(txtNama.value.length == 0)
     {
        alert("isi Nama");
     }
     else if(txtTempatTinggal.value.length == 0)
     {
        alert("isi Tempat Tinggal");
     }
     else if(TxtTglLahir.value.length == 0)
     {
        alert("isi Tanggal Lahir");
     }
     else if(txtNoHP.value.length == 0)
     {
        alert("isi No HP");
     }
     else if(txtEmail.value.length == 0)
     {
        alert("isi Email");
     }
     else if(SelectJurusan.value.length == 0)
     {
        alert("isi Jurusan");
     }
     else
     {
        xhr = new XMLHttpRequest();


        //cek status AJAX

        xhr.onreadystatechange = function()
        {
            if(xhr.readyState == 4 && xhr.status == 200)
            {
                console.log(xhr.responseText)
                alert("Sending Data Successful")   
            }
        }

        //eksekusi ajax
        xhr.open('GET', 'PHP/insert_anggota.php?NIS=' + txtNIS.value + "&" + 'Nama=' + txtNama.value + "&" + 'TTG=' + txtTempatTinggal.value + "&" + 'TTL=' +  TxtTglLahir.value + "&" + 'noHP=' + txtNoHP.value + "&"+ 'email=' + txtEmail.value 
        + "&"+ 'jurusan=' + SelectJurusan.value, true);
        xhr.send()
        window.location.reload();
    }
    
}


