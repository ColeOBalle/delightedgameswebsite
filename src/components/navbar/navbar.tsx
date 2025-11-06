'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Icon from '@mui/material/Icon'
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Spin as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';
import '@/app/globals.css';
import styles from './navbar.module.css';

function Logo() {
    return (
        <Link href='/' className={styles.logoLink}>
            <Image
                className={styles.logoImg}
                src={`/logo.png`}
                alt='Delighted Games Logo'
                fill
                objectFit='contain'
                unoptimized
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
    const routes = [
        {
            title: 'Home',
            href: '/'
        },
        {
            title: 'Games',
            href: '/games'
        },
        {
            title: 'Contact',
            href: '/contact'
        }
    ];

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
                {hamburgerOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={styles.dropdown}
                    >
                        <ul className={styles.dropdownUL}>
                            {routes.map((route, index) => {        
                                return(
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + index / 10
                                        }}
                                        key={route.title}
                                        className={styles.dropdownItem}
                                    >
                                        <a
                                            href={route.href}
                                            onClick={() => setHamburgerOpen((prev) => !prev)}
                                            className={styles.dropdownItemLink}
                                        >
                                            <p>{route.title}</p>
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
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