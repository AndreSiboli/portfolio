import styles from '@/styles/pages/Home/Main.module.scss';

import DownloadButton from '@/components/links/DownloadButton';
import Container from '@/components/layout/Container';
import Img from '@/components/utils/Img';

import Image from '@/assets/home/program.svg';

export default function Main() {
    return (
        <main className={`${styles.main}`} id="home">
            <Container>
                <div className={styles.main_container}>
                    <div className={styles.main_info}>
                        <div className={styles.info}>
                            <div className={styles.info_title}>
                                <h1>
                                    What&apos;s up? I&apos;m
                                    <div className={styles.words}>
                                        <span>Size</span>
                                        <span>André Siboli.</span>
                                        <span>Web Developer.</span>
                                    </div>
                                </h1>
                            </div>
                            <div className={styles.info_description}>
                                <p>
                                    If you&apos;re looking for a web developer who&apos;s
                                    passionate, skilled, and committed to making your online vision
                                    a reality, you&apos;ve come to the right place. Let&apos;s
                                    connect and turn your ideas into a web presence that truly
                                    stands out.
                                </p>
                            </div>
                            <div className={styles.info_download}>
                                <DownloadButton
                                    archive={'./curriculo.pdf'}
                                    content="Download my CV"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.main_image}>
                        <div className={styles.image}>
                            <Img src={Image} style={{ objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    );
}
