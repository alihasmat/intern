"use client"
import { useState } from "react";
import MenuBar from "../icons/MenuBar";
import Close from "../icons/CloseIcon";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative pt-4 pb-12">
            <section className="flex justify-between items-center">
                <button onClick={() => setIsMenuOpen(prev => !prev)}>
                    <MenuBar />
                </button>
                <Link href="/" className="text-white-700 absolute left-1/2 transform -translate-x-1/2">
                    <Image 
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />
                </Link>
            </section>
            {isMenuOpen && ( 
            <nav className="bg-black p-6 w-3/4 h-screen z-20 absolute top-0">
                <ul className="uppercase text-2xl md:text-3xl font-bold text-white">
                    <li className="flex justify-between items-center mb-10">
                        <Link href="/">
                            <Image 
                                src="/logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                            />
                        </Link>
                        <button onClick={() => setIsMenuOpen(prev => !prev)}>
                            <Close />
                        </button>
                    </li>
                    <li>
                        <a href="/">Set Times</a>
                    </li>
                    <li>
                        <a href="/artists">Artists</a>
                    </li>
                    <li>
                        <a href="/">Competition</a>
                    </li>
                    <li>
                        <a href="/">My Schedule</a>
                    </li>
                    <li>
                        <a href="/">Map</a>
                    </li>
                    <li>
                        <Link href="/">Info</Link>
                    </li>
                    <li>
                        <Link href="/partners">Partners</Link>
                    </li>
                    <li>
                        <Link href="/">Playlist</Link>
                    </li>
                    <li>
                        <Link href="/">Settings</Link>
                    </li>
                </ul>
            </nav>
            )}
        </header>
    );
    }