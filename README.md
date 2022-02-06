# WebServer1
Membuat aplikasi berbasis Web Server menggunakan NodeJS

01. Membuat File Entri app.js
02. Memanggil core module yang akan digunakan membuat Web Server, yaitu "http". Bisa disimpan di variabel const http.
03. Membuat server dengan Metode createServer(), yang berisi collback funstion dengan parameter req dan res.
04. Jalankan server dengan metode listen()

//Penjelasan Poin 03
05. Buat respon yang akan tampil di halaman web. Kali ini yang akan ditampilkan adalah halaman sederhana yang bertuliskan hello word! saja. Oleh karena itu didalam callback function dituliskan perintah res.write()
06. Akhiri Proses yang ada didalam server dengan res.end()

//Penjelasan Poin 04
06. Didalam metode listen() bisa berisi 3 parameter.
a. Parameter pertama adalah port. Parameter ini optional, boleh diisi boleh tdak. Jika tidak diisi maka NodeJS akan secara default menjalankan di Port 3000.
b. Parameter kedua adalah Host. Parameter ini juga bersifat optional, dan secara default akan mengarahkan ke localhost
c. Parameter ketiga berisi callback. Biasanya dengan parameter kosong dan berisi perintah console.log() yang mencetak informasi bahwa server sedang berjalan pada port yang sudah ditentukan.

Sampai sini pembuatan server yang sederhana sudah selesai.

07. Menjalankan server
a. Masuk terminal
b. Jalankan file entri point dengan perintah node app

08. Cek dengan browser, kemudian tulis alamat "localhost:3000"
Jika muncul tulisan "Hello World!" maka server yang dibuat sudah berhasil.

================================================================
MEMANIPULASI HALAMAN WEB

Apa yang sudah dibuat diatas hanya menampilakn plain text saja, bukan html.
Jadi jika ingin menampilkan html ada bebera hal yang harus dilakukan

01. Gunakan metode res.writeHeade() didalam createServer(), dengan parameter:
a. StatusCode
b. Bisa diisi dengan object

02. Cek apakah berjalan atau tidak. Buka terminal dan refresh browser.
Tampilan hello word! berubah menjadi font khasnya html. Apabila di klik kanan kemudian inspect, maka akan ada structur html nya.

================================================================
MENERIMA PERMINTAAN USER

Permintaan dari USER biasa kita kenal sebagai request. Salah satu bentuk request adalah link(url) yang diketikkan oleh user.

01. Ambil URL yang diketikkan oleh user dengan metode req.url(), simpan dalam variabel const url.
02. Jalankan terminal dengan node app 
03. Cek apakah URL yang dikirim sudah masuk pada variabel atau belum, caranya:
Kembali ke halaman browser. Ketik URL nya, misal: localhost:3000/about. Kemudian tekan enter, setelah proses selesai silahkan cek pada terminal.
Maka akan muncul url yang sudah dituliskan, yaitu '/about'

================================================================
MEMBUAT LEBIH DARI SATU HALAMAN (URL)

01. Gunakan if atau switch untuk memvalidasi kecocokan URL dengan tmpilan yang sudah disetting.


 


