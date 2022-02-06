const http = require('http');//memanggil Core Module http yang ada di NodeJS

//Membuat server cengan methode CreateServer(), kemudian jalankan dengan methode listen()
http.createServer((req, res) => {
    res.write('Hello Word!');//Tulisan yang akan tampipl di halaman web
    res.end();//>metode res.end() berfungsi untuk menghentikan proses yang ada di dalam server
}).listen(3000, () => {
    console.log(`Server sedang berjalan pada port 3000`)
})
