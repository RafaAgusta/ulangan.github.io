// soal 1 (membuat function dengan return string)
function cetakFunction(a){
  return `Hallo Nama Saya` + a
}

console.log(cetakFunction(" Rafa"));

// soal 2 (membuat function dengan rumus penjumlahan didalamnya)
function myFunction(angka1, angka2) {
  return angka1 + angka2;
} 
let angka1 = 20;
let angka2 = 7;
let output =  myFunction(angka1, angka2);

console.log(output);

// soal 3 (mengubah dalam bentuk arrow function)
function hello(){
  return "Hello";
}
console.log(hello());

// soal 4 (memanggil key dalam sebuah objek)
let obj = {
  nama: "john",
  umur: 22,
  bahasa: "Indonesia"
}
console.log(obj.bahasa);

// soal 5 (mengubah array menjadi objek)
let arrayDaftarPeserta = ["John Doe", "Laki-Laki", "Baca Buku", 1992]
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  lahir: arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta);

//soal 6 (membuat sebuah array of object dan melakukan filter)
let buah = [
  {
    nama: "Nanas",
    warna: "Kuning",
    bijinya: "Tidak Ada",
    harga: 9000,
  },{
    nama: "Jeruk",
    warna: "Orange",
    bijinya: "Ada",
    harga: 8000,
  },{
    nama: "Semangka",
    warna: "Hijau & Merah",
    bijinya: "Ada",
    harga: 10000,
  },{
    nama: "Pisang",
    warna: "Kuning",
    bijinya: "Tidak Ada",
    harga: 7000,
  }
];
let berbiji = buah.filter((biji) => biji.bijinya === "Tidak Ada");
console.log(berbiji);