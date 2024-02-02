# Kategori Component

## 1. Stateless / Presentational Component
- Tidak memiliki state
- Menerima props untuk menampilkan data / konten
- Biasanya komponen kecil dan reusable

## 2. Stateful Component
- Memiliki state
- Bisa dibuat reusable

## 3. Structural Component
- Berperan untuk membuat struktur aplikasi (layout, screen, pages)
- Dihasilkan dari komposisi
- Berukuran besar dan biasanya non-reusable (ex: Main / App)

# Component Composition
- Sebuah teknik untuk merancang/membuat komponen
- Proses memecah bagian-bagian menjadi komponen kecil, lalu menggabungkannya menjadi komponen yang lebih besar
- Bertujuan agar komponen-komponen tersebut mudah untuk dikelola dan digunakan kembali

## Manfaat
- Reusability : Komponen dapat dengan mudah digunakan kembali di berbagai tempat pada aplikasi kita
- Modularity : Memecah UI menjadi kelompok kecil agar mudah untuk dikelola dan dipahami
- Separation of Concerns : Setiap komponen dapat fokus pada fungsionalitasnya yang spesifik, agar mudah untuk ditesting/debug
- Code Maintainability : Mudah untuk diubah dikemudian hari

## Caranya ?
- Buat komponen agar mengerjakan hal yang spesifik
- Gunakan Container Component
    - Memanfaatkan prop spesial : children
    - Bisa digunakan untuk memperbaiki prop drilling 
