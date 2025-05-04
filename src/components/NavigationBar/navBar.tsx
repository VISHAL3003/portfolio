'use client'

import { navLinks } from "@/lib/placeholders-data";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function NavBar() {
        const [isMenuOpen, setIsMenuOpen] = useState(false);

        return (
            <nav className="flex justify-between gap-10 items-center p-8 w-full">
                <div className="w-1/6 h-1 rounded-full bg-nav-line hidden md:block" />
                <div className="md:hidden flex justify-end w-full">
                    {isMenuOpen ? (
                        <XMarkIcon
                            className="h-6 w-6 text-gray-400 cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    ) : (
                        <Bars3Icon
                            className="h-6 w-6 text-gray-400 cursor-pointer"
                            onClick={() => setIsMenuOpen(true)}
                        />
                    )}
                </div>
                <ul
                    className={`${
                        isMenuOpen ? "flex" : "hidden"
                    } flex-col gap-5 text-lg text-gray-400 bg-white md:flex md:flex-row md:static md:gap-20 md:bg-transparent`}
                >
                    {navLinks.map((link) => (
                        <li key={link.id} className="hover:text-nav-element">
                            <a href={`#${link.name.toLowerCase()}`}>{link.name}</a>
                        </li>
                    ))}
                </ul>
                <div className="w-1/2 h-1 rounded-full bg-nav-line hidden md:block" />
            </nav>
        );
    }

