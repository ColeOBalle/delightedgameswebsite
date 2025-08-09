import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@/app/globals.css';
import './navbar.css';
import { defaultConfig } from 'next/dist/server/config-shared';

const navigation = [
    { name: 'FrontPage', href: '#', current: true},
    { name: 'AboutUs', href: '#', current: false},
    { name: 'Projects', href:  "#", current: false},
    { name: 'Contact', href: '#', current: false}
]

function Logo() {
    return (
        <Link href='/' className='logo-link'>
            <Image
                className='logo-img'
                src='/logo.png'
                alt='Delighted Games Logo'
                fill
                priority
            />
        </Link>
    )
}

export default function NavBar() {
    return (
        <header>
            <section id="logoSection">
                <figure id="logo">
                    <Logo />
                </figure>
                <h1 id='logoText'>Delighted Games</h1>
            </section>
            <nav>
                <a className="navOption">Home</a>
                <a className="navOption">About Us</a>
                <a className="navOption">Projects</a>
                <a className="navOption">Contact</a>
            </nav>
        </header>

    )
}