"use client";

import {
  Activity,
  ArrowUpRight,
  BookUser,
  KeyRound,
  School,
  Users,
  BarChart,
  UserCheck,
  UserX,
} from "lucide-react";
import Image from "next/image";
import {
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Line,
  LineChart
} from "recharts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const teacherAccounts = [
  { name: "Budi Santoso", email: "budi.s@sekolah.id", class: "VII A" },
  { name: "Ani Yudhoyono", email: "ani.y@sekolah.id", class: "VIII B" },
  { name: "Citra Kirana", email: "citra.k@sekolah.id", class: "IX C" },
];

const studentAccounts = [
  { name: "Dewi Lestari", class: "VII A", parent: "Rudi Hartono" },
  { name: "Eka Kurniawan", class: "VII A", parent: "Susi Susanti" },
  { name: "Fitriani", class: "VIII B", parent: "Taufik Hidayat" },
];

const habitData = [
  { student: "Siswa A", month: "Jan", score: 65, behavior: 70 },
  { student: "Siswa A", month: "Feb", score: 72, behavior: 75 },
  { student: "Siswa A", month: "Mar", score: 80, behavior: 82 },
  { student: "Siswa A", month: "Apr", score: 78, behavior: 75 },
  { student: "Siswa A", month: "May", score: 85, behavior: 88 },
];

export default function DashboardPage() {
  return (
    <Tabs defaultValue="guru">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="guru">Guru</TabsTrigger>
        <TabsTrigger value="siswa">Siswa</TabsTrigger>
        <TabsTrigger value="admin">Admin</TabsTrigger>
      </TabsList>
      <TabsContent value="guru">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Siswa
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">150</div>
              <p className="text-xs text-muted-foreground">
                +2 dari bulan lalu
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Kebiasaan Rata-rata
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82.5</div>
              <p className="text-xs text-muted-foreground">
                +5.1% dari bulan lalu
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Siswa Meningkat</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Minggu ini
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Siswa Menurun</CardTitle>
              <UserX className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">3</div>
              <p className="text-xs text-muted-foreground">
                Butuh perhatian
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-6">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Grafik Perkembangan Siswa</CardTitle>
              <CardDescription>Perkembangan kebiasaan 5 siswa teratas bulan ini.</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
               <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={habitData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                            }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" name="Skor Akademik" />
                        <Line type="monotone" dataKey="behavior" stroke="hsl(var(--accent))" name="Skor Perilaku" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Input Data Kebiasaan</CardTitle>
              <CardDescription>
                Masukkan data perkembangan kebiasaan siswa.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div>
                  <Label htmlFor="student-name">Nama Siswa</Label>
                  <Input id="student-name" placeholder="Contoh: Budi" />
                </div>
                <div>
                  <Label htmlFor="habit-score">Skor Kebiasaan (1-100)</Label>
                  <Input id="habit-score" type="number" placeholder="85" />
                </div>
                 <div>
                  <Label htmlFor="notes">Catatan</Label>
                  <Textarea id="notes" placeholder="Siswa menunjukkan peningkatan dalam kedisiplinan." />
                </div>
            </CardContent>
            <CardFooter>
              <Button>Simpan Data</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="siswa">
         <Card>
            <CardHeader>
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="student avatar" />
                        <AvatarFallback>DL</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-2xl">Grafik Perkembangan Pribadi</CardTitle>
                        <CardDescription>Dewi Lestari - Kelas VII A</CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={habitData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} domain={[60, 100]} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "hsl(var(--card))",
                                border: "1px solid hsl(var(--border))",
                            }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="score" name="Skor Akademik" stroke="hsl(var(--primary))" strokeWidth={2} />
                        <Line type="monotone" dataKey="behavior" name="Skor Perilaku" stroke="hsl(var(--accent))" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="admin">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Akun Guru</CardTitle>
              <BookUser className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Akun Siswa</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">256</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Kelas</CardTitle>
              <School className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Password Resets</CardTitle>
              <KeyRound className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Bulan ini</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Manajemen Akun Guru</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Kelas Wali</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teacherAccounts.map((teacher, index) => (
                    <TableRow key={index}>
                      <TableCell>{teacher.name}</TableCell>
                      <TableCell>{teacher.email}</TableCell>
                      <TableCell>{teacher.class}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Reset Password
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
             <CardFooter>
                <Button>Tambah Guru Baru</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Manajemen Akun Siswa</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama</TableHead>
                    <TableHead>Kelas</TableHead>
                    <TableHead>Wali Murid</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentAccounts.map((student, index) => (
                    <TableRow key={index}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.class}</TableCell>
                      <TableCell>{student.parent}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
             <CardFooter>
                <Button>Tambah Siswa Baru</Button>
            </CardFooter>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}
