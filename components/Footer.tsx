import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-4 text-center border-t border-border bg-card text-card-foreground">
      <span>Elite Fitness &copy; {new Date().getFullYear()}</span>
    </footer>
  );
}
