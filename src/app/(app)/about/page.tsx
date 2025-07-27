import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/icons";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
    return (
        <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
                <div className="inline-flex justify-center items-center gap-3 mb-4">
                    <Logo className="h-12 w-12 text-primary" />
                    <CardTitle className="text-4xl font-headline">HabitTrack</CardTitle>
                </div>
                <CardDescription className="text-lg">
                    Membantu Mendidik dan Membentuk Kebiasaan Positif Siswa.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-6">
                <p className="text-center">
                    HabitTrack adalah sebuah aplikasi web inovatif yang dirancang untuk membantu para pendidik, siswa, dan administrator sekolah dalam memantau dan mengembangkan kebiasaan positif siswa. Kami percaya bahwa pembentukan karakter sama pentingnya dengan pencapaian akademis, dan aplikasi ini adalah alat untuk mewujudkan hal tersebut.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-foreground">Fitur Utama</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span>
                                    <span className="font-semibold">Dashboard Berbasis Peran:</span> Tampilan yang disesuaikan untuk Guru, Siswa, dan Admin.
                                </span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span>
                                    <span className="font-semibold">Pelacakan Visual:</span> Grafik yang mudah dibaca untuk memantau perkembangan dari waktu ke waktu.
                                </span>
                            </li>
                             <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                <span>
                                    <span className="font-semibold">Notifikasi Otomatis:</span> Peringatan dini untuk siswa yang menunjukkan penurunan agar dapat segera ditindaklanjuti.
                                </span>
                            </li>
                        </ul>
                    </div>
                     <div className="space-y-4">
                        <h3 className="font-semibold text-lg text-foreground">Misi Kami</h3>
                        <p>
                            Misi kami adalah menyediakan platform yang mudah digunakan namun kuat, yang menjembatani komunikasi antara guru dan siswa mengenai perkembangan karakter. Dengan data yang terstruktur, kami berharap dapat membantu menciptakan intervensi yang lebih efektif dan personal untuk setiap siswa.
                        </p>
                    </div>
                </div>

                 <div className="text-center pt-6">
                    <p className="text-sm">Versi 1.0.0</p>
                    <p className="text-sm">© 2024 HabitTrack. All rights reserved.</p>
                </div>
            </CardContent>
        </Card>
    );
}
