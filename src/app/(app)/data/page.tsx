import { FileDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const studentData = [
  { id: 1, name: "Ahmad Dahlan", class: "VII A", averageScore: 88, trend: "up" },
  { id: 2, name: "Bunga Citra", class: "VIII B", averageScore: 76, trend: "down" },
  { id: 3, name: "Candra Wijaya", class: "IX C", averageScore: 92, trend: "up" },
  { id: 4, name: "Dian Sastro", class: "VII A", averageScore: 81, trend: "stable" },
  { id: 5, name: "Eko Prasetyo", class: "VIII B", averageScore: 79, trend: "up" },
  { id: 6, name: "Fira Basuki", class: "IX C", averageScore: 85, trend: "stable" },
];

export default function DataPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Perkembangan Siswa</CardTitle>
        <CardDescription>
          Filter, cari, dan export data perkembangan kebiasaan seluruh siswa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input placeholder="Cari nama siswa..." className="pl-10" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FileDown className="h-4 w-4" />
                Export Data
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Export as PDF</DropdownMenuItem>
              <DropdownMenuItem>Export as Excel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nama Siswa</TableHead>
                <TableHead>Kelas</TableHead>
                <TableHead>Skor Rata-rata</TableHead>
                <TableHead>Tren</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentData.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.averageScore}</TableCell>
                  <TableCell>
                    <Badge variant={student.trend === 'down' ? 'destructive' : 'secondary'}>
                      {student.trend === 'up' ? 'Meningkat' : student.trend === 'down' ? 'Menurun' : 'Stabil'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Lihat Detail</Button>
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
