var nilai = 75;
var absen = 80;

if (nilai >= 80 && absen >= 75) {
  console.log("Selamat, Anda lulus!");
} else if (nilai >= 60 && absen >= 75) {
  console.log("Anda mendapatkan kesempatan untuk remedial.");
} else {
  console.log("Anda tidak lulus.");
}