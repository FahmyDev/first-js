function tampilkanPesanSelamatDatang() {
    var namaInput = document.getElementById('nama');
    var nama = namaInput.value;
  
    if (nama !== null && nama !== '') {
      var pesan = document.createElement('p');
      pesan.textContent = 'Halo, ' + nama + '! Selamat datang di halaman web kami.';
      document.body.appendChild(pesan);
  
      // Menghapus prompt setelah pengguna mengklik OK
      var promptContainer = document.querySelector('.prompt-container');
      promptContainer.parentNode.removeChild(promptContainer);
    }
  }
  