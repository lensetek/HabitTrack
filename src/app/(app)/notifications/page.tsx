import { AlertCircle, ArrowDown, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const decliningStudents = [
  { name: "Bunga Citra", class: "VIII B", scoreChange: -8, lastScore: 76, contactParent: "Hubungi Wali" },
  { name: "Gilang Dirga", class: "VII C", scoreChange: -5, lastScore: 68, contactParent: "Hubungi Wali" },
  { name: "Hesti Purwadinata", class: "IX A", scoreChange: -12, lastScore: 80, contactParent: "Hubungi Wali" },
];

export default function NotificationsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
            <AlertCircle className="text-destructive"/>
            Notifikasi Penurunan Nilai
        </CardTitle>
        <CardDescription>
          Daftar siswa yang menunjukkan penurunan nilai kebiasaan pada periode terakhir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Siswa</TableHead>
                        <TableHead>Kelas</TableHead>
                        <TableHead>Penurunan Skor</TableHead>
                        <TableHead>Skor Terakhir</TableHead>
                        <TableHead className="text-right">Aksi</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {decliningStudents.map((student, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={`https://placehold.co/40x40.png?text=${student.name.charAt(0)}`} data-ai-hint="student avatar" />
                                        <AvatarFallback>{student.name.substring(0,2)}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-medium">{student.name}</span>
                                </div>
                            </TableCell>
                             <TableCell>{student.class}</TableCell>
                             <TableCell className="text-destructive font-semibold flex items-center gap-1">
                                <ArrowDown className="h-4 w-4"/>
                                {student.scoreChange}
                             </TableCell>
                             <TableCell>{student.lastScore}</TableCell>
                             <TableCell className="text-right">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <User className="h-4 w-4"/>
                                    {student.contactParent}
                                </Button>
                             </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
}
