# 12_Fundamental-React

1. Apa itu JSX
- Singkatan dari Javacript XML
- Ekstensi pada Javascript

2. Kenapa menggunakan JSX
- JSX dibuatkan berdasarkan fakta kalau logika rendering sangat terikat dengan logic UI
- Separation of Technology -> Separation of Concerns

3. Komponen React 
- adalah bagian kode yang dapat digunakan kembali yang digunakan untuk menentukan tampilan, behavior, dan state sebagian UI

4. Apa itu Props?
- Singkatan dari properties, membuat kita dapat memberikan argumen / data pada component.
- Props membantu untuk membuat komponen menjadi lebih dinamis
- Props dioper ke component sama seperti memberikan atribut pada tag HTML
- Props pada component adalah read-only dan tidak dapat diubah.

5. React Lifecycle
- Render phase
- Pre-commit phase
- Commit phase

6. Lifecycle method yang umum
- render()
- componentDidMount()
- componentDidUpdate()
- componentWillunmount()

7. Lifecycle method yang lainnya
- shouldComponentUpdate()
- static getDerivedStateFromProp()
- getSnapshotBeforeUpdate()

8. Render Bersyarat : Pada React, Kita dapat membuat komponen berbeda Kcng mencakup perilaku yongbdibutuhkon. Lalu, Kita dapat me-render hanya beberapa bagian saja, berdasarkan state dari aplikasi Anda.
- Menggunakan If
- Inline If dengan operator &&
- Inline If-Else dengan ternary conditional operator
- Mencegah komponen untuk rendering

9. Render List
- Kita dapat membun?un koleksi dari beberapa elemen dan menyertakannya dalam JSX menggunakan tanda kurung kurawal {}.

10. Key
- Key membantu React untuk mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihilangkan.

11. Struktur Direktori
- React tidak memiliki pendapat (unopinionated) tentang bagaimana cara memasukkan file ke folder.

12. Styling
- Classes dan CSS
- Atribut style
- Modul CSS