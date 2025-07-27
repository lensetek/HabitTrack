import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Building } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold font-headline">Hubungi Kami</h1>
                <p className="text-muted-foreground">
                    Jika Anda mengalami kendala teknis, memiliki pertanyaan, atau ingin memberikan masukan terkait sistem HabitTrack, jangan ragu untuk menghubungi tim administrasi kami melalui informasi di samping atau dengan mengisi formulir.
                </p>
                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href="mailto:admin@habittrack.id" className="text-muted-foreground hover:text-primary">admin@habittrack.id</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Telepon</p>
                            <p className="text-muted-foreground">(021) 123-4567</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Alamat</p>
                            <p className="text-muted-foreground">Jl. Pendidikan No. 1, Jakarta, Indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Kirim Pesan</CardTitle>
                    <CardDescription>Tim kami akan merespon pesan Anda secepatnya.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div>
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" placeholder="Nama Anda" />
                    </div>
                     <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Email Anda" />
                    </div>
                    <div>
                        <Label htmlFor="message">Pesan Anda</Label>
                        <Textarea id="message" placeholder="Tuliskan pesan Anda di sini..." />
                    </div>
                    <Button className="w-full">Kirim Pesan</Button>
                </CardContent>
            </Card>
        </div>
    );
}
