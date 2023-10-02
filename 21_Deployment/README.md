# 21_Deployment

1. Build React App
    - Kenapa perlu build?
        - Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi.
        - Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.
    - Build React App
        - Karena proyek kita dibangun menggunakan Create React App
        ```
        npm run build
        ```
        Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum mend-deploy ke produksi. Untuk pengembangan normal, gunakan `npm start`
    - Run Optimizied App
        - Untuk menjalankan aplikasi yang optimal di lokal komputer kita, kita bisa menggunakan __serve__
        - Install serve
        ```
        npm install -g serve
        ```
        - Jalankan serve di lokal
        ```
        serve -s build
        ```
2. Deployment
    - Introduction with Vercel
        - Vercel adalah platform ujung ke ujung untuk developer, yang memungkinkan Anda membuat dan deployment aplikasi web Anda.
    - Teams and Accounts
    - Deploy to Vercel
    