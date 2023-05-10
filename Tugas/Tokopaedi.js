let daftarBelanja = [];

function tambahBarang() {
    let barang = document.getElementById("barang").value;
    let jumlah = document.getElementById("jumlah").value;

    daftarBelanja.push({
        barang: barang,
        jumlah: jumlah
    });

    let daftarBelanjaElem = document.getElementById("daftar_belanja");
    let li = document.createElement("li");
    li.textContent = `${jumlah} x ${barang}`;
    daftarBelanjaElem.appendChild(li);
}

function hitungTotal() {
    let totalHarga = 0;
    for (let i = 0; i < daftarBelanja.length; i++) {
        let barang = daftarBelanja[i].barang;
        let jumlah = daftarBelanja[i].jumlah;
        let harga = 0;
        switch (barang) {
            case "Samsung Galaxy A10s":
                harga = 1500000;
                break;
            case "Samsung Galaxy A23":
                harga = 1800000;
                break;
            case "Samsung Z Fold":
                harga = 2500000;
                break;
            case "Xiaomi Redmi note 8":
                harga = 3500000;
                break;
            case "MI Poco F4":
                harga = 4000000;
                break;
        }
        totalHarga += harga * jumlah;
    }

    let member = confirm("Apakah Anda member?");
    if (member) {
        totalHarga *= 0.9; // diskon 10% untuk member
    }
    let totalHargaElem = document.getElementById("total_harga");
    totalHargaElem.textContent = totalHarga;

    let checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Checkout";
    checkoutButton.style.display = "block";
    checkoutButton.style.margin = "0 auto";
    checkoutButton.addEventListener("click", function() {
        alert(`Total harga yang harus dibayar: Rp ${totalHarga}`);
    });
    document.body.appendChild(checkoutButton);
}