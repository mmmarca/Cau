'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Pages } from './page';

export interface INavigationProps {
    activePage?: string;
}

export function Navigation({ activePage }: INavigationProps) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-base-300">
            <nav className="navbar max-w-[85rem] w-full mx-auto px-4 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-row w-full sm:w-auto justify-between">
                    <Link className="font-bold text-lg py-4" href="/">
                        BookQuest
                    </Link>

                    <div>
                        <button onClick={toggleMobileMenu} className="btn btn-square btn-ghost sm:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-5 h-5 stroke-current"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <ul className="menu menu-horizontal px-1">
                        {Pages.map((page: any) => (
                            <li key={page.title}>
                                <Link
                                    shallow={true}
                                    key={page.title}
                                    href={page.route}
                                    className={activePage === page.title ? 'font-bold' : ''}
                                >
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {isMobileMenuOpen && (
                    <ul className="menu menu-vertical items-start sm:hidden">
                        {Pages.map((page: any) => (
                            <li key={page.title}>
                                <Link
                                    shallow={true}
                                    key={page.title}
                                    href={page.route}
                                    className={activePage === page.title ? 'font-bold' : ''}
                                >
                                    {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </div>
    );
}