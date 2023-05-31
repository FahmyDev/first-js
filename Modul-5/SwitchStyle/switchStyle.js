var sekarang = new Date();
var jam = sekarang.getHours();

var pesan;

switch (jam) {
  case 0:
  case 1:
  case 2:
  case 3:
    pesan = "Sudah larut malam, sebaiknya istirahat.";
    break;
  case 4:
  case 5:
  case 6:
  case 7:
    pesan = "Selamat pagi! Selamat memulai hari!";
    break;
  case 8:
  case 9:
  case 10:
  case 11:
    pesan = "Selamat pagi! Semoga harimu menyenangkan.";
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
    pesan = "Selamat siang! Semangat terus!";
    break;
  case 17:
  case 18:
  case 19:
    pesan = "Selamat sore! Nikmati sisa hari!";
    break;
  case 20:
  case 21:
  case 22:
  case 23:
    pesan = "Selamat malam! Semoga tidur nyenyak.";
    break;
  default:
    pesan = "Waktu tidak valid.";
}

console.log(pesan);;