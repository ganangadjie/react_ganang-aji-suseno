# 20_React-Testing

1. Testing
    - adalah proses memverifikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.
    - Manfaat Testing
        - Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
        - Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.
    - Kategori Testing
        - __Rendering component trees__ di dalam environment tes yang sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus pada bagian ini.
        - __Menjalankan aplikasi lengkap__ di dalam environment peramban (browser) asli. Ini dikenal sebagai tes “end-to-end”.
    - Pertimbangan memilih perkakas
        - Kecepatan iterasi vs environment yang realistis
            - Beberapa kakas menawarkan feedback loop yang sangat cepat antara membuat sebuah perubahan dan melihat hasilnya, tetapi tidak memodelkan sifat dari peramban dengan tepat. Tools lain mungkin menggunakan environment peramban yang asli, tetapi mengurangi kecepatan iterasi dan lebih flakier pada server integrasi berkelanjutan.
    - Seberapa banyak mock
        - Dengan komponen, perbedaan antara tes “unit” dan tes “integrasi” bisa tidak sesuai. Jika kita mengetes sebuah form, haruskah tes yang dilakukan juga menguji tombol yang ada di dalamnya? Atau haruskah komponen memiliki rangkaian tes sendiri? Haruskah refactoring pada tombol merusak tes pada form?
    - Rekomendasi Tools
        - Jest
            - Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom.
        - React testing library
            - Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya.
2. Create basic testing with RTL
    - Rendering Componen
        - Render dan Debug
            - Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX suda terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa hasil dari fungsi render RTL.
            - React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. ltulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.
        - Memilih Elemen
            - React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih.
        - Kategori Testing
            - LabelText: getByLabelText: < label for="search" />
            - PlaceholderText: getByPlaceholderText: < input placeholder="Search" />
            - AltText: getByAltText: < img alt="profile" />
            - DisplayValue: getByDisplayValue: < input value="JavaScript" />
    - Handle Event
    - Handle Asynchronous
        - Untuk kasus apa?
            - Ini digunakan ketika hendak mengetes fetch sebuah API. Pada kasus ini kita perlu membuat mock untuk axios (atau yang lain). Selanjutnya kita perlu membuat mock promise hasilnya ketika resolve atau reject. Ini dikembalikan lagi kepada skenario kita.
3. Testing Custom Hook
    - Library yang digunakan
        - Untuk mengetes custom hook, kita menggunakan React Hooks Testing Library. Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen

## RECOMMIT
