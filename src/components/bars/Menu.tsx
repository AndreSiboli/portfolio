import { Inter } from 'next/font/google';
import styles from '@/styles/bars/Menu.module.scss';

import Link from 'next/link';
import LinkEffect from '../links/LinkEffect';

import { FaLinkedinIn, FaSquareGithub } from 'react-icons/fa6';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });


export default function Menu(props: any) {
    const { active } = props;

    return (
        <div className={`${styles.menu} ${active ? styles.active : ''} ${inter.className}`}>
            <div className={styles.menu_container}>
                <div className={styles.menu_wrapper}>
                    <div className={styles.menu_links}>
                        <LinkEffect link="#" content="Início" />
                        <LinkEffect link="#" content="Sobre" />
                        <LinkEffect link="#" content="Projetos" />
                        <LinkEffect link="#" content="Jogos" />
                    </div>
                    <div className={styles.menu_social}>
                        <div>
                            <Link href="#">
                                <FaSquareGithub />
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
