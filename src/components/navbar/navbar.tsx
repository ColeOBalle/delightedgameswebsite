'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from '@mui/material/Icon'
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Spin as Hamburger } from 'hamburger-react';
import '@/app/globals.css';
import styles from './navbar.module.css';
import { defaultConfig } from 'next/dist/server/config-shared';

function Logo() {
    return (
        <Link href='/' className={styles.logoLink}>
            <Image
                className={styles.logoImg}
                src='/logo.png'
                alt='Delighted Games Logo'
                fill
                objectFit='contain'
            />
        </Link>
    );
}

function StandardNavBar() {
    return (
        <header className={styles.header}>
            <section className={styles.logoSection}>
                <figure className={styles.logo}>
                    <Logo />
                </figure>
                <h1 className={styles.logoText}>Delighted Games</h1>
            </section>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navOption}>Home</Link>
                <Icon>flare</Icon>
                <Link href="/games" className={styles.navOption}>Games</Link>
                <Icon>flare</Icon>
                <Link href="/contact" className={styles.navOption}>Contact</Link>
            </nav>
        </header>
    );
}

function HamburgerNavBar(){
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    
    return (
        <header className={styles.header}>
            <section className={styles.logoSection}>
                <figure className={styles.logo}>
                    <Logo />
                </figure>
                <h1 className={styles.logoText}>Delighted Games</h1>
            </section>
            <nav className={styles.nav}>
                <Hamburger direction='left' size={20} toggled={hamburgerOpen} toggle={setHamburgerOpen}/>
            </nav>
        </header>
    );
}

export default function NavBar() {
    const screenWidth = useWindowWidth();

    if(screenWidth >= 600){
        // width screen = standard nav bar
        return (<StandardNavBar/>);

    } else {
        // small screen = hamburger menu
        return (<HamburgerNavBar/>);
    }
}