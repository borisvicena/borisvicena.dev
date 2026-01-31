"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/resources", label: "Resources" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between mb-16 md:mb-24">
      <Link
        href="/"
        className="text-[15px] font-medium text-primary hover:text-secondary transition-colors"
      >
        Boris Vicena
      </Link>

      <div className="flex items-center gap-6">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                isActive ? "text-primary" : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
