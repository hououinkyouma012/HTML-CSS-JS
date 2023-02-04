const nama = "Salman Al Faridzi";
let usia = 15;

let biodata = document.getElementById('biodata');

function generateBiodata() {
let golongan;    
    
    if(usia >= 13 && usia < 20) {
        golongan = "golongan remaja";
    } 
    else if(usia >= 20 && usia < 35){
        golongan = "golongan dewasa";
    }
    else if(usia >= 35){
        golongan = "golongan TUA";
    } 
    else if(usia >= 2 && usia < 13){
        golongan = "golongan anak-anak";
    } 
    else {
        golongan = "golongan bayi";
    }
    return biodata.innerHTML = golongan;
}

console.log(nama);
console.log(usia);

generateBiodata();