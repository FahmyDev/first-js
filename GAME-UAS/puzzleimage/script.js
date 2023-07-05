// Daftar gambar puzzle
var puzzleImages = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    // Tambahkan gambar lainnya di sini
  ];
  
  // Variabel global
  var puzzleSize = 3; // Ukuran default level
  var puzzleContainer = document.getElementById("puzzle-container");
  
  // Fungsi untuk memulai permainan
  function startGame() {
    puzzleSize = parseInt(document.getElementById("level-select").value);
    createPuzzle();
  }
  
  // Fungsi untuk membuat puzzle
  function createPuzzle() {
    // Bersihkan puzzle sebelumnya (jika ada)
    puzzleContainer.innerHTML = "";
  
    // Hitung jumlah total kotak puzzle
    var totalPieces = puzzleSize * puzzleSize;
  
    // Buat array indeks acak
    var randomIndexes = [];
    for (var i = 0; i < totalPieces; i++) {
      randomIndexes.push(i);
    }
    randomIndexes.sort(() => Math.random() - 0.5); // Acak indeks
  
    // Loop untuk membuat kotak-kotak puzzle
    for (var i = 0; i < totalPieces; i++) {
      var puzzlePiece = document.createElement("div");
      puzzlePiece.className = "puzzle-piece";
      puzzlePiece.style.backgroundImage = "url('" + puzzleImages[i] + "')";
      puzzlePiece.style.order = randomIndexes[i];
      puzzlePiece.addEventListener("click", movePiece);
      puzzleContainer.appendChild(puzzlePiece);
    }
  }
  
  // Fungsi untuk memindahkan kotak puzzle
  function movePiece() {
    var emptyPiece = document.querySelector("#puzzle-container .puzzle-piece:last-child");
    var clickedPiece = this;
  
    // Cek apakah kotak yang diklik adalah tetangga dari kotak kosong
    if (isNeighbor(clickedPiece, emptyPiece)) {
      var tempOrder = clickedPiece.style.order;
      clickedPiece.style.order = emptyPiece.style.order;
      emptyPiece.style.order = tempOrder;
    }
  }
  
  // Fungsi untuk mengecek apakah dua kotak adalah tetangga
  function isNeighbor(piece1, piece2) {
    var order1 = parseInt(piece1.style.order);
    var order2 = parseInt(piece2.style.order);
  
    // Cek jika kotak berada di baris atau kolom yang sama
    if (order1 === order2 - 1 || order1 === order2 + 1) {
      return true;
    }
    if (order1 === order2 - puzzleSize || order1 === order2 + puzzleSize) {
      return true;
    }
  
    return false;
  }
  