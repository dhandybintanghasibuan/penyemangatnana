// Daftar kutipan cinta & hubungan. Kamu bisa tambah atau ganti sesukamu!
const quotes = [
  "Melihat senyum Nana adalah bagian terbaik dari hari Masbi. Terima kasih sudah hadir.",
  "Apapun tantangannya, kita hadapi bersama. Karena kita adalah insan yang dipertemukan.",
  "Dunia menjadi tempat yang jauh lebih indah saat masbi bersama nana.",
  "Terima kasih telah menjadi penyemangat setiap hari.",
  "Setiap hari bersama nana adalah petualangan favorit masbi. ❤️",
  "Masbi sangat beruntung dapat berjumpa dengan Nana.",
  "Berkat Nana, Masbi ingin menjadi versi terbaik dari sebelumnya.",
  "Kalau Nana butuh pengingat: Masbi selalu memikirkan nana dan ada di sini untuk nana.",
  "Nana adalah cahaya bagi Masbi di hari yang paling mendung sekalipun. ✨",
];

// Mengambil elemen dari HTML
const quoteTextElement = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Fungsi untuk menampilkan kutipan baru
function showNewQuote() {
  // Pilih kutipan acak dari daftar
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Tampilkan kutipan di halaman
  quoteTextElement.innerText = randomQuote;
}

// Menambahkan 'event listener' ke tombol
// Saat tombol diklik, jalankan fungsi showNewQuote
newQuoteBtn.addEventListener("click", showNewQuote);

// Tampilkan kutipan acak pertama kali saat halaman dimuat
showNewQuote();
