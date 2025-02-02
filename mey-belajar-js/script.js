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
