# Dokumentasi Pembelajaran React + Vite  
## Penggabungan React dan Vite sebagai Media Pembelajaran  
### Mata Kuliah Pemrograman Sisi Klien

## 📌 Deskripsi Proyek
Repository ini dibuat sebagai bagian dari **Ujian Akhir Semester (UAS)** Mata Kuliah **Pemrograman Sisi Klien**.  
Proyek ini bertujuan untuk mempelajari dan mengimplementasikan **React JS** menggunakan **Vite** sebagai build tool modern, dengan fokus pada pengelolaan komponen, state, dan komunikasi data dari API.

Aplikasi yang dikembangkan berupa **Dashboard Web** dengan beberapa komponen utama seperti:
- Balance
- Goals
- Statistik Pengeluaran
- Transaksi
- Upcoming Bills

---

## 🎯 Tujuan Pembelajaran
Melalui proyek ini, diharapkan mahasiswa dapat:
1. Memahami konsep dasar **React (Component, Props, State, Hooks)**  
2. Menggunakan **Vite** sebagai environment pengembangan React  
3. Mengimplementasikan **fetch data API menggunakan Axios**  
4. Mengelola autentikasi berbasis **JWT (JSON Web Token)**  
5. Membuat tampilan dashboard modular dan reusable  
6. Menerapkan struktur folder React yang rapi dan terorganisir  

---

## 🛠️ Teknologi yang Digunakan
- **React JS**
- **Vite**
- **JavaScript (ES6+)**
- **Axios**
- **Material UI (MUI)**
- **MUI X Charts (Gauge)**
- **CSS / Tailwind Utility**
- **JWT Authentication**

---

## 📂 Struktur Folder
Struktur utama proyek adalah sebagai berikut:

    src
    	assets
    		icons
    			react.svg
    	components
    		Elements
    			BarsDataset.jsx
    			Button.jsx
    			Card.jsx
    			CheckBox.jsx
    			CompositionExample.jsx
    			DotsMobileStepper.jsx
    			con.jsx
    			input.jsx
    			LabeledInput.jsx
    			Logo.jsx
    		Fragments
    			CardBalance.jsx
    			CardExpenseBreakdown.jsx
    			CardGoal.jsx
    			CardRecentTransaction.jsx
    			CardStatistic.jsx
    			CardUpcomingBill.jsx
    			FormSignln.jsx
    			FormSignUp.jsx
    		Layouts
    			AuthLayout.jsx
    			MainLayout.jsx
    		context
    			authContext.jsx
    			themeContext.jsx
    		pages
    			balance.jsx -
    			bill.jsx - 
    			dashboard.jsx
    			error.jsx
    			expense.jsx - 
    			goal.jsx -
    			setting.jsx - 
    			Signln.jsx
    			SignUp.jsx
    			transaction.jsx -
    		services
    			authService.jsx
    			dataService.jsx
    App.css
    App.jsx
    data.jsx
    index.css
    main.jsx
    .gitignore

    
---

## 🔐 Autentikasi
Aplikasi menggunakan **JWT (JSON Web Token)** untuk autentikasi user.
- Token disimpan di `localStorage`
- Token digunakan pada request API menggunakan header:
  ```js
  Authorization: Bearer <token>
---
## 📊 Komponen Goals
Fitur Goals menampilkan:
- Target Amount
- Present Amount
- Visualisasi progres menggunakan Gauge Chart
Data goals diambil dari API dan disesuaikan pada level Dashboard sebelum dikirim ke komponen CardGoal.

---
## 🚀 Cara Menjalankan Proyek
Pastikan Node.js sudah terinstall, kemudian jalankan perintah berikut:

    npm install
    npm run dev

Aplikasi akan berjalan pada:

    http://localhost:5173
---
## 📎 Catatan Pengembangan
- Proyek ini difokuskan pada pembelajaran frontend, bukan produksi
- Tidak menggunakan seeding database
- Beberapa data masih bersifat dinamis dari API
- Tampilan disesuaikan dengan kebutuhan pembelajaran mata kuliah

---
## 👤 Author
Nama: Faris
Program Studi: Teknik Informatika
Mata Kuliah: Pemrograman Sisi Klien

📜 Lisensi

Proyek ini dibuat untuk keperluan akademik dan pembelajaran.


---

## 🔥 Bonus (opsional tapi kelihatan niat)
Kalau mau tambah dikit biar dosen makin senang, kamu bisa tambahkan:

---
```md
## 📸 Preview Aplikasi


