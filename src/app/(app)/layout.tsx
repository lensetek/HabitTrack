"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation'
import {
  Bell,
  Contact,
  FileDown,
  HelpCircle,
  Info,
  LayoutDashboard,
  LogOut,
  Settings,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/icons";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case '/dashboard':
        return 'Dashboard';
      case '/data':
        return 'Data Siswa';
      case '/notifications':
        return 'Notifikasi';
      case '/help':
        return 'Bantuan';
      case '/about':
        return 'Tentang Sistem';
      case '/contact':
        return 'Kontak Admin';
      default:
        return 'Dashboard';
    }
  }

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { href: "/data", icon: FileDown, label: "Data" },
    { href: "/notifications", icon: Bell, label: "Notifikasi", badge: "3" },
    { href: "/help", icon: HelpCircle, label: "Bantuan" },
    { href: "/about", icon: Info, label: "Tentang Sistem" },
    { href: "/contact", icon: Contact, label: "Kontak Admin" },
  ];


  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarHeader>
            <div className="flex items-center gap-2">
              <Logo className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-primary font-headline">HabitTrack</h1>
            </div>
          </SidebarHeader>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                    {item.badge && <Badge variant="destructive" className="ml-auto">{item.badge}</Badge>}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://placehold.co/100x100.png" alt="@user" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold">Admin User</span>
              <span className="text-sm text-muted-foreground">admin@example.com</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" asChild>
              <Link href="/login">
                <LogOut />
              </Link>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex items-center justify-between p-4 border-b bg-card">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">{getTitle()}</h1>
          <Button variant="outline" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
