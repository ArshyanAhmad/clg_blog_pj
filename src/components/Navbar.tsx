"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="w-full shadow-md  bg-[#1A1A1A]" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo or Brand */}
                    <div className="flex-shrink-0 text-xl font-bold text-gray-900">
                        <Link href="/">
                            <Image src="/assets/logo/logo.png" alt="logo" width={100} height={100} />
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-1 items-center">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={
                                        isActive
                                            ? "text-white text-[13px] font-medium px-4 py-2 rounded-md border-solid border-[#262626] border-[2px] bg-[#141414]"
                                            : "text-gray-400 text-[13px] font-medium px-5 py-2 rounded-md border-solid border-[2px] border-transparent hover:text-gray-300"
                                    }
                                    style={{ transition: 'all 0.2s' }}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                    </div>

                    {/* button contact us */}
                    <button className="md:block hidden bg-[#FFD11A] text-black px-4 py-2 rounded-md ml-4">
                        Contact Us
                    </button>

                    {/* Mobile Hamburger */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden shadow-lg" style={{ backgroundColor: "#1A1A1A" }}>
                    <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={
                                        isActive
                                            ? "text-white text-[15px] font-medium px-3 py-2 rounded-md border-solid border-[#262626] border-[2px] bg-[#141414]"
                                            : "block text-gray-300 text-[15px] font-medium px-3 py-2 rounded-md border-solid border-[2px] border-transparent hover:bg-[#141414] hover:text-white hover:border-[#262626] transition-colors"
                                    }
                                    style={{ transition: 'all 0.2s' }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <button className="bg-[#FFD11A] text-black px-4 py-2 rounded-md mt-2">
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

