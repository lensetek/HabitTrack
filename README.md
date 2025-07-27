# 7 Kebiasaan Anak Hebat

## Pemanfaatan Teknologi AI Berbasis Web untuk Monitoring 7 Kebiasaan Anak Indonesia Hebat di SMPN 1 Sampit

### Nama Peneliti:
#### 1.Asadel Adi Liamsi
#### 2. Khairil Azmi


## Deskripsi

Aplikasi web ini dibangun menggunakan Next.js. Aplikasi ini berfungsi sebagai titik awal untuk membangun aplikasi web yang terintegrasi dengan Firebase. Dengan menggunakan Firebase, Anda dapat dengan mudah menambahkan berbagai fitur seperti otentikasi pengguna, database real-time, penyimpanan file, dan banyak lagi.

Aplikasi ini menyediakan struktur dasar dan contoh implementasi untuk membantu Anda memulai proyek web dengan cepat. Beberapa fasilitas yang disediakan meliputi:

*   **Struktur Proyek yang Jelas:** Organisasi kode yang rapi dan mudah dipahami.
*   **Integrasi Firebase:** Pengaturan awal untuk menghubungkan aplikasi Anda dengan proyek Firebase Anda.
*   **Contoh Halaman:** Beberapa contoh halaman untuk memulai pengembangan, seperti halaman beranda, login, dan tata letak dasar aplikasi.
*   **Komponen UI:** Penggunaan komponen antarmuka pengguna (UI) yang dapat digunakan kembali untuk mempercepat pembangunan tampilan aplikasi.

Anda dapat memperluas aplikasi ini dengan menambahkan fitur-fitur spesifik sesuai kebutuhan proyek Anda, memanfaatkan berbagai layanan yang disediakan oleh Firebase.

## Instalasi

1.  Gandakan repositori ini:

    ```bash
    git clone <url_repositori>
    ```

2.  Masuk ke direktori proyek:

    ```bash
    cd firebase-studio
    ```

3.  Instal dependensi:

    ```bash
    npm install
    ```

4.  Siapkan Firebase:

    *   Buat proyek Firebase di konsol Firebase.
    *   Dapatkan detail konfigurasi Firebase Anda.
    *   Buat file `.env.local` di akar proyek dan tambahkan konfigurasi Firebase Anda:

    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=API_KEY_ANDA
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=AUTH_DOMAIN_ANDA
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=PROJECT_ID_ANDA
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=STORAGE_BUCKET_ANDA
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=MESSAGING_SENDER_ID_ANDA
    NEXT_PUBLIC_FIREBASE_APP_ID=APP_ID_ANDA
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=MEASUREMENT_ID_ANDA
    ```

## Menjalankan Aplikasi

Untuk menjalankan aplikasi secara lokal:

```bash
npm run dev
```

Aplikasi akan tersedia di `http://localhost:3000`.
