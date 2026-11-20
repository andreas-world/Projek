const spedo = document.createElement('h1');
const tombol = document.createElement('button');

const body = document.body;
tombol.append('tekan saya')
body.append(spedo, tombol);
// cari tau bedanya append dan appendchild
let angka = 0;
spedo.append(angka); // kenapa ga bisa appendchild tapi append bisa (ternyata appenchild cuman bisa 1 dan append bisa banyak(ini hipotesa))

tombol.addEventListener('click', function(){
    angka++;

})