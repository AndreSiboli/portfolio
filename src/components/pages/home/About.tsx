import styles from '@/styles/pages/Home/About.module.scss';

import Container from '@/components/layout/Container';
import Img from '@/components/utils/Img';
import SocialMedia from '@/components/styles/SocialMedia';

import me from '@/assets/home/me.jpg';

export default function About() {
    return (
        <section className={`${styles.about}`} id="about">
            <Container>
                <div className={styles.about_container}>
                    <div className={styles.about_image}>
                        <div className={styles.card}>
                            <div className={styles.card_image}>
                                <Img
                                    src={me}
                                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                                />
                            </div>
                            <div className={styles.card_social}>
                                <SocialMedia style={{ color: '#fff' }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.about_info}>
                        <div className={styles.info_title}>
                            <h2>About me</h2>
                        </div>

                        <div className={styles.info_content}>
                            <span>Web Developer</span>
                            <p>
                                What&apos;s up? My name is André Siboli. I was born and live in
                                Brazil. I graduated in Information Technology from Universidade
                                Cruzeiro do Sul. I&apos;ve always been interested in programming
                                since I was a child. I love this world and how a simple line of code
                                can change lives. For me, web development is a blend of art and
                                technology, where every line of code is a stroke on the canvas of
                                the digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
