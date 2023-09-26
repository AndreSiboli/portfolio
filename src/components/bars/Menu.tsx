import { Inter } from 'next/font/google';
import styles from '@/styles/bars/Menu.module.scss';

import Link from 'next/link';
import LinkEffect from '../links/LinkEffect';

import { FaLinkedinIn, FaSquareGithub } from 'react-icons/fa6';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

interface PropTypes {
    active: boolean;
    handleMenu: Function;
}

export default function Menu(props: PropTypes) {
    const { active, handleMenu } = props;

    return (
        <div className={`${styles.menu} ${active ? styles.active : ''} ${inter.className}`}>
            <div className={styles.menu_container}>
                <div className={styles.menu_wrapper}>
                    <div className={styles.menu_links} onClick={() => handleMenu()}>
                        <LinkEffect link="/#home" content="Início" />
                        <LinkEffect link="/#about" content="Sobre" />
                        <LinkEffect link="/#skills" content="Skills" />
                        <LinkEffect link="/#projects" content="Projetos" />
                    </div>
                    <div className={styles.menu_social}>
                        <div>
                            <Link href="http://www.github.com/andresiboli" target="_blank">
                                <FaSquareGithub />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://www.linkedin.com/in/andr%C3%A9-siboli-81b969244/"
                                target="_blank"
                            >
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
