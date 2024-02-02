import { useEffect, useState } from 'react';

import styles from '@/styles/bars/Footer.module.scss';

import LinkEffect from '@/components/links/LinkEffect';
import Container from '@/components/layout/Container';
import SocialMedia from '@/components/styles/SocialMedia';


export default function Footer() {
    const [year, setYear] = useState(2024);

    useEffect(() => {
        const date = new Date();
        const currentYear = date.getFullYear();
        setYear(currentYear);
    }, []);

    return (
        <footer className={`${styles.footer}`}>
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
                            <span>About me</span>
                            <p>
                                I&apos;m excited to see where the future of technology takes us and
                                to continue creating meaningful online experiences for users around
                                the globe.
                            </p>
                        </div>
                        <div className={styles.group_links}>
                            <span>Mention</span>
                            <nav className={styles.nav_links}>
                                <LinkEffect
                                    link="https://pexels.com/"
                                    content="Pexel"
                                    target="_blank"
                                />
                                <LinkEffect
                                    link="https://undraw.co/"
                                    content="UnDraw"
                                    target="_blank"
                                />
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
