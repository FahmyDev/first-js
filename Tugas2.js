function CekSkor(Skor) {
    let result;
  
  if (Skor >= 90) {
  result = 'Selamat! Anda mendapatkan nilai A.';
  }
  else if (skor >= 80) {
  result = 'Anda mendapatkan nilai B.';
  }
  else if (skor >= 70) {
  result = 'Anda mendapatkan nilai C.';
  }
  else if (skor >= 60 ) {
  result = 'Anda mendapatkan nilai D.';
  }
  else if (skor >= 60 ){
  result = 'Anda mendapatkan nilai E.';
  }
    return result;
  }
  console.log(CekSkor(80));
  console.log(CekSkor(50));
  console.log(CekSkor(60));
  console.log(CekSkor(90));
