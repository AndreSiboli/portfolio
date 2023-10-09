import { useEffect, useState } from 'react';
import { Inter } from 'next/font/google';

import styles from '@/styles/bars/Footer.module.scss';

import LinkEffect from '@/components/links/LinkEffect';
import Container from '@/components/utils/Container';
import SocialMedia from '@/components/styles/SocialMedia';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export default function Footer() {
    const [year, setYear] = useState(2023);

    useEffect(() => {
        const date = new Date();
        const currentYear = date.getFullYear();
        setYear(currentYear);
    }, []);

    return (
        <footer className={`${styles.footer} ${inter.className}`}>
            <Container>
                <div className={styles.footer_container}>
                    <div className={styles.footer_logo}>
                        <h1>Portfolio</h1>
                        <div className={styles.socialMedia}>
                            <SocialMedia />
                        </div>
                    </div>
                    <div className={styles.footer_links}>
                        <div className={styles.footer_about}>
                            <h3>About me</h3>
                            <p>
                                I&apos;m excited to see where the future of technology takes us and to
                                continue creating meaningful online experiences for users around the
                                globe.
                            </p>
                        </div>
                        <div className={styles.group_links}>
                            <h3>Mention</h3>
                            <nav className={styles.nav_links}>
                                <LinkEffect link="https://undraw.co/" content="UnDraw" />
                            </nav>
                        </div>
                    </div>
                    <div className={styles.footer_copyright}>
                        <p>Copyright &copy; {year} All rights reserved.</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
