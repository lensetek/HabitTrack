"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Logo } from "@/components/icons"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher");

  const handleLogin = () => {
    if (email === "admin" && password === "admin123" && role === "admin") {
      router.push("/dashboard");
    } else {
      toast({
        variant: "destructive",
        title: "Login Gagal",
        description: "Email, password, atau peran salah. Silakan coba lagi.",
      })
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center items-center gap-2">
            <Logo className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold font-headline">HabitTrack</CardTitle>
          </div>
          <CardDescription>Masukkan email Anda di bawah untuk masuk ke akun Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
             <div className="space-y-2">
                <Label>Role</Label>
                <RadioGroup value={role} onValueChange={setRole} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="teacher" id="teacher" />
                    <Label htmlFor="teacher">Guru</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="student" id="student" />
                    <Label htmlFor="student">Siswa</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin">Admin</Label>
                  </div>
                </RadioGroup>
              </div>
            <Button onClick={handleLogin} className="w-full">
              Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
