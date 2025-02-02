// ambil semua elemen video dengan DOM
const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(videos);

// saring elemen javascript lanjutan dari semua elemen video

const javascriptLanjutan = videos
  .filter((videos) => videos.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing masing video

  .map((videos) => videos.dataset.duration)

  // ubah durasi menjadi int, ubah menit ke detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  .reduce((total, detik) => total + detik);

// kemudian ubah format menjadi jam menit detik
const jam = Math.floor(javascriptLanjutan / 3600);
const menit = Math.floor((javascriptLanjutan % 3600) / 60);
const detik = javascriptLanjutan % 60;

console.log(jam, menit, detik);
// simpan ke DOM

const pDurasi = document.querySelector(".total-durasi");

// console.log(pDurasi);

pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

// console.log(javascriptLanjutan);

const jmlVideo = videos.filter((videos) => videos.textContent.includes("JAVASCRIPT LANJUTAN")).length;

const pJmlVideo = document.querySelector(".jumlah-video");

pJmlVideo.textContent = `${jmlVideo} Video`;

// Buat prototype Kendaraan dengan metode klakson().

function Kendaraan() {}

Kendaraan.prototype.klakson = function () {
  console.log("Tin!!");
};

// Buat objek Mobil yang mewarisi Kendaraan dan punya properti merk.

function Mobil(merk) {
  this.merk = merk;
}

Mobil.prototype = Object.create(Kendaraan.prototype);

// Coba pakai metode klakson() di objek Mobil!

const mobilBaru = new Mobil("Toyota");

mobilBaru.klakson();

// Menambahkan Properti atau Metode ke Prototype

function Mahasiswa(nama, jurusan) {
  this.nama = nama;
  this.jurusan = jurusan;
}

Mahasiswa.prototype.perkenalan = function () {
  console.log(`halo nama saya adalah ${this.nama} dari jurusan ${this.jurusan}`);
};

let Ali = new Mahasiswa("Ai", "informatika");

Ali.perkenalan();

//menambahkan properti ke prototype

function Kendaraan(merk) {
  this.merk = merk;
}
//tambah properti
Kendaraan.prototype.roda = 4;

let mobil = new Kendaraan("toyota");

console.log(mobil.roda);

//pewarisan dengan prototype
function Hewan(nama) {
  this.nama = nama;
}
//tambah metode
Hewan.prototype.suara = function () {
  console.log(`${this.nama} bersuara`);
};

//membuat sub-class kucing yang mewarisi dari hewan
function Kucing(nama, warna) {
  Hewan.call(this, nama); // memanggil constructor hewan
  this.warna = warna;
}

//menghubungkan prototype kucing dengan hewan
Kucing.prototype = Object.create(Hewan.prototype);

// tambah metode pada kucing
Kucing.prototype.skin = function () {
  console.log(`kucing ini berwarna ${this.warna}`);
};

let zhou = new Kucing("zhou", "oren");

zhou.skin();
zhou.suara();

// buat constructor Pegawai yang punya metode kerja(), lalu buat pewarisan ke Manajer yang punya metode tambahan rapat().

function Pegawai(nama, jabatan) {
  this.nama = nama;
  this.jabatan = jabatan;
}

// tambah metode kerja
Pegawai.prototype.kerja = function () {
  console.log(`${this.nama} bekerja sebagai ${this.jabatan}`);
};

function Manager(nama, divisi) {
  Pegawai.call(this, nama);
  this.divisi = divisi;
}

//pewarisan protoype dari pegawai
Manager.prototype = Object.create(Pegawai.prototype);

//metode rapat pada manager

Manager.prototype.rapat = function () {
  console.log(`${this.nama} dari divisi ${this.divisi} sedang melakukan rapat`);
};

let pegawai1 = new Pegawai("Mei", "Tata usaha");
let manager1 = new Manager("didil", "divilkom");

pegawai1.kerja();
manager1.rapat();
