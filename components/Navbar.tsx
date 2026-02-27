"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/classes' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'BMI Calculator', href: '/bmi-calculator' },
  { label: 'Transformations', href: '/transformations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">ELITE<span className="text-primary">FITNESS</span></Link>
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-white/80 hover:text-primary transition-colors">{item.label}</Link>
          ))}
          <Button className="bg-primary text-black">Free Trial</Button>
        </div>
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block text-white/80 hover:text-primary" onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
          <Button className="w-full bg-primary text-black">Free Trial</Button>
        </div>
      )}
    </nav>
  );
}
