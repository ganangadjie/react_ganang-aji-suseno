# 17_React-Form

1. Form 
    - Merupakan salah satu hal krusial dalam pengembangan aplikasi website. Form dapat digunakan untuk menghandle inputan dari user.
    - Macam Form :
        - Elemen < input >
            - biasanya digunakan inputan yang tidak terlalu panjang
        - Elemen < textarea >
            - biasanya digunakan inputan yang cukup panjang. Semisal deskripsi
        - Elemen < select >
            - biasanya digunakan inputan yang pilihannya sudah ditentukan
        - Radio Button
            - merupakan salah satu type elemen < input >. Kita hanya bisa memilih 1 pilihan menggunakan radiobutton
        - Checkbox
            - merupakan salah satu type di elemen < input >. Kita bisa memilih lebih dari 1 pilihan menggunakan checkbox
2. Controlled Component
    - Sebuah elemen masukan form yang nilainya dikontrol oleh React melalui cara seperti ini disebut sebagai "controlled component".
3. Uncontrolled Component
    - adalah alternatif lain dari controlled component, dimana data form akan ditangani oleh DOM-nya sendiri. Untuk menulis uncontrolled component, alih-alih menulis event handler untuk setiap pembaruan state, kita bisa menggunakan ref untuk mendapatkan nilai form dari DOM.
4. Basic Validation learning
    - Buat apa validasi?
        - Mencari input data yang benar dan sesuai format. Sebuahweb/aplikasi tidak dapat berjalan dengan benar, jika data yangdiolah tidak sesuai dengan kebutuhan aplikasi
        - Melindungi akun pengguna. Misalnya, membuat pengguna untuk memasukkan data password yang aman.
        - Melindungi sistem/aplikasi. Validasi form yang kuat dapat meminimalisir perilaku pengguna yang ingin meretas sistem/aplikasi
    - Tipe validasi data formulir
        - Client-side validation
            - Validasi yang dilakukan pada sisi klien (browser). Validasi ini dilakukan agar data input sesuai dengan kebutuhan form, sebelum data form dikirimkan ke server.
        - Server-side validation
            - Validasi yang dilakukan pada sisi server. Sisi server bertugas untuk memvalidasi data kembali, sebelum disimpan di database. Jika ditemukan kesalahan, maka response akan dikirim kembali ke client berupa koreksi atas kesalahan yang dibuat oleh pengguna.
        - Built-in form validation
            - required
                - digunakan untuk menentukan field form perlu diisi sebelum formulir dapat dikirimkan
            - minlength dan maxlength
                - digunakan untuk menentukan jumlah karakter minimal dan maksimal yang bisa dimasukkan. Jika kurang dari minlength akan muncul pemberitahuan, dan tidak bisa melebihi maxlength.
            - min dan max
                - digunakan untuk menentukan nilai minimum dan maksimum dari angka yang bisa dimasukkan.
            - type
                - digunakan untuk menentukan apakah data berupa angka, email, atau type yang lainnya.
            - pattern 
                - digunakan untuk menentukan regular expression (regex) yang mendefinisikan pola data yang boleh dimasukkan.
        