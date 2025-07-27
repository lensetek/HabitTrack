import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const faqItems = [
    {
        question: "Bagaimana cara menambahkan data kebiasaan baru untuk siswa?",
        answer: "Masuk ke Dashboard Guru, temukan panel 'Input Data Kebiasaan', isi nama siswa, skor, dan catatan, lalu klik 'Simpan Data'."
    },
    {
        question: "Di mana saya bisa melihat rekap perkembangan semua siswa?",
        answer: "Navigasikan ke halaman 'Data'. Di sana Anda dapat melihat tabel lengkap, mencari siswa, dan mengekspor data."
    },
    {
        question: "Bagaimana cara admin mereset password seorang guru?",
        answer: "Admin dapat masuk ke Dashboard Admin, pilih tab 'Manajemen Akun Guru', temukan guru yang bersangkutan, dan klik tombol 'Reset Password'."
    },
    {
        question: "Apakah siswa bisa melihat perkembangan mereka sendiri?",
        answer: "Ya, ketika siswa login, mereka akan langsung diarahkan ke Dashboard Siswa yang berisi grafik perkembangan pribadi mereka."
    }
];

export default function HelpPage() {
    return (
        <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
                <h1 className="text-2xl font-bold font-headline mb-2">Pusat Bantuan</h1>
                <p className="text-muted-foreground">
                    Temukan jawaban atas pertanyaan Anda dan pelajari cara menggunakan sistem HabitTrack secara efektif.
                </p>
            </div>
            <div className="md:col-span-2 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Cara Menggunakan Sistem</CardTitle>
                        <CardDescription>Panduan langkah demi langkah untuk fitur utama.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <h3 className="font-semibold">1. Login Sesuai Peran</h3>
                            <p className="text-sm text-muted-foreground">Gunakan email dan password Anda, lalu pilih peran (Guru, Siswa, atau Admin) untuk masuk ke sistem.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">2. Input Data (Untuk Guru)</h3>
                            <p className="text-sm text-muted-foreground">Di dashboard, gunakan form input untuk mencatat skor kebiasaan dan catatan perkembangan siswa secara berkala.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">3. Pantau Perkembangan</h3>
                            <p className="text-sm text-muted-foreground">Lihat grafik di dashboard untuk memantau tren perkembangan siswa secara visual. Siswa juga dapat melihat grafik pribadinya.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">4. Export Data</h3>
                            <p className="text-sm text-muted-foreground">Pergi ke halaman 'Data' untuk mengunduh laporan lengkap dalam format PDF atau Excel untuk keperluan dokumentasi.</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Frequently Asked Questions (FAQ)</CardTitle>
                        <CardDescription>Jawaban untuk pertanyaan yang sering diajukan.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {faqItems.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger>{item.question}</AccordionTrigger>
                                    <AccordionContent>{item.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
