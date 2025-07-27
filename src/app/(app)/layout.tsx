"use client";

import Link from "next/link";
import {
  Bell,
  Contact,
  FileDown,
  HelpCircle,
  Home,
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
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarContent>
            <SidebarHeader>
              <div className="flex items-center gap-2">
                <Logo className="w-8 h-8 text-primary" />
                <h1 className="text-2xl font-bold text-primary font-headline">HabitTrack</h1>
              </div>
            </SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <Link href="/dashboard">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/data">
                    <FileDown />
                    <span>Data</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/notifications">
                    <Bell />
                    <span>Notifikasi</span>
                    <Badge
                      variant="destructive"
                      className="ml-auto"
                    >
                      3
                    </Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/help">
                    <HelpCircle />
                    <span>Bantuan</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/about">
                    <Info />
                    <span>Tentang Sistem</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/contact">
                    <Contact />
                    <span>Kontak Admin</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
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
                 <h1 className="text-xl font-semibold">Dashboard</h1>
                 <Button variant="outline" size="icon">
                    <Settings className="h-5 w-5"/>
                 </Button>
            </header>
            <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
                {children}
            </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
