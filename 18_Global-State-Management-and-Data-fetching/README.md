# 18_Global-State-Management-and-Data-fetching

1. Redux
    - Adalah library untuk manajemen state global
    - Kapan saat yang tepat untuk menggunakan Redux
        - Banyak state yang perlu ditaruh di banyak tempat
        - State pada app sering berubah
        - Logic untuk mengubah state kompleks
        - Ukuran codebase yang sedang-besar, dan dikerjakan oleh banyak orang
        - Perlu untuk mengetahui bagaimana state diupdate seiring dengan waktu
    - Redux Libraries dan Tools
        - React-Redux
        - Redux toolkit
        - Redux DevTools Extension
    - Komponen Penting di Redux
        - Action
            - Digunakan untuk memberikan informasi aplikasi ke store
        - Reducer
            - Pure JavaScript functions yang mengambil state aplikasi saat ini dan object action lalu mengembalikan state aplikasi terbaru
        - Store
            - Objek sentral yang menyimpan state pada aplikasi
    - Memakai dan mengubah state
        - Hooks
        - Connect
2. Redux Thunk
    - Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action
    - Kenapa perlu Redux Thunk
        - Untuk menghandle side effect logic yang kompleks
        - Untuk logic async seperti request data
3. Data Fetching
    - Cara-cara untuk fetching data di React
        - Fetch API
        - Axios
        - React Query Library

## RECOMMIT
