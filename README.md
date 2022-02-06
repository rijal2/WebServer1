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