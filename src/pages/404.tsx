import styles from '@/styles/pages/404.module.scss';

import Container from '@/components/layout/Container';

import { Roboto } from 'next/font/google';
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] });

export default function Error404() {
    return (
        <div className={`${styles.error404} ${roboto.className}`}>
            <Container>
                <div className={styles.error404_container}>
                    <div className={styles.error404_title}>
                        <h1>
                            404.<span>Page not found</span>
                        </h1>
                    </div>
                </div>
            </Container>
        </div>
    );
}
