import { useState } from 'react';
import { Inter } from 'next/font/google';

import styles from '@/styles/bars/Navbar.module.scss';

import LinkEffect from '../links/LinkEffect';
import Container from '../utils/Container';
import Menu from '@/components/bars/Menu';

import SocialMedia from '../styles/SocialMedia';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Navbar() {
    const [active, setActive] = useState(false);

    function openMenu() {
        console.log(active);
        if (!active) document.body.style.overflowY = 'hidden';
        else document.body.style.overflowY = 'auto';
        defineActive();
    }

    function defineActive() {
        setActive((prevState) => !prevState);
    }

    return (
        <header className={`${styles.header} ${inter.className}`}>
            <Container>
                <div className={styles.header_container}>
                    <div className={styles.header_title}>
                        <h1>Portifolio</h1>
                    </div>
                    <div className={styles.header_links}>
                        <LinkEffect link="/#home" content="Home" />
                        <LinkEffect link="/#about" content="About" />
                        <LinkEffect link="/#skills" content="Skills" />
                        <LinkEffect link="/#projects" content="Projects" />
                    </div>
                    <div className={styles.header_social}>
                        <SocialMedia />
                    </div>
                    <div
                        className={`${styles.header_menu} ${active ? styles.active : ''}`}
                        onClick={openMenu}
                    >
                        <div className={styles.menu}>
                            <div className={styles.trace}></div>
                            <div className={styles.trace}></div>
                            <div className={styles.trace}></div>
                        </div>
                    </div>

                    <Menu active={active} />
                </div>
            </Container>
        </header>
    );
}
