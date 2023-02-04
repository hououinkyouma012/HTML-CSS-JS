const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1';
const port = 3002


// request adalah data masuk dari luar
// response adalah data keluar dari sistem

const server = http.createServer(function (request, response) {
    const nama = "KURO NEKO";
    let uang = 100000;
    let jajan = 50000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisauang.txt', sisa, () =>{
        console.log('data uang sudah berhasil disimpan')
    });

    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();

    function checkCPU(){
        let myCPU = [];
        jumlahCPU.map((cpu, i) => {
            myCPU.push(cpu.model)
        })
        return myCPU;
    }

    console.log('tipe CPU');

    const hasil = `
    <html>
    <head>
    <title>TES NODE JS</title>
    </head>
    <body>
    <h1>TES NODE JS UANG JAJAN</h1>
    <p>halo nama saya ${nama}, Saya jajan sebanyak ${jajan}, uang Saya sisa ${sisa}, uang saya tadinya ${uang}.
    <h3>Sisa ram PC saya = ${sisaRAM}</h3>
    <h3>Jumlah CPU PC saya = ${jumlahCPU}</h3>
    <h3>tipe CPU PC saya = ${checkCPU()}</h3>
    </body>

    <style>
    *,
    html{
        margin: 0;
        padding: 0;
    }
    
    body{
        background-color: red; 
        color: white;
    }

    h1{
        background-color: black; 
        color: white; 
        text-align: center; 
        padding: 20px;
    }

    </style>

    </html>
    `

    response.statusCode = 203;
    response.end(hasil);
});

server.listen(port, host, '', function(){
    console.log(`server menyala di ${host}:${port}`);
});

