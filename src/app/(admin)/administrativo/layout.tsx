"use client";

import {
  FileText,
  Home,
  LogOut,
  Menu,
  PanelLeft,
  Shield,
  User,
  Users,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Dashboard", href: "/administrativo", icon: Home },
  { label: "Projetos", href: "/administrativo/projetos", icon: FileText },
  {
    label: "Transparência",
    href: "/administrativo/transparencia",
    icon: Shield,
  },
  { label: "Voluntários", href: "/administrativo/voluntarios", icon: Users },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-100">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col bg-white sm:flex">
        <nav className="flex flex-col gap-4 p-4">
          <Link
            href="/administrativo"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-4"
          >
            <PanelLeft className="h-8 w-8" />
            <span>APDESP</span>
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100 hover:text-blue-600"
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 flex-col bg-white sm:hidden
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="flex flex-col gap-4 p-4">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/administrativo"
              className="flex items-center gap-2 text-2xl font-bold text-blue-600"
            >
              <PanelLeft className="h-8 w-8" />
              <span>APDESP</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 transition-all hover:bg-slate-100 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/30 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div className="flex flex-col sm:pl-64">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between gap-4 bg-white px-4 sm:justify-end sm:px-6">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="sm:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-200">
              <User className="h-6 w-6 text-slate-600" />
            </div>
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-600"
            >
              <LogOut className="h-4 w-4" />
              Sair
            </Link>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
