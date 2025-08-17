import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from '@mui/material/Icon'
import '@/app/globals.css';
import './navbar.css';
import { defaultConfig } from 'next/dist/server/config-shared';

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
                <Link href="/" className="navOption">Home</Link>
                <Icon>flare</Icon>
                <Link href="/games" className="navOption">Games</Link>
                <Icon>flare</Icon>
                <Link href="/contact" className="navOption">Contact</Link>
            </nav>
        </header>

    )
}