function bukaToko(jam) {
    let result;
    if (jam < 22 ) {
        result = "Toko Buka"
    } else {
        result = "Toko Tutup"
    }
    return result;
 }
 
    console.log(bukaToko(10))