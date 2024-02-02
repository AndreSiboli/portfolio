import { projects } from '@/data/projects';
import styles from '@/styles/pages/Home/Projects.module.scss';

import Container from '@/components/layout/Container';
import Carousel from '@/components/styles/Carousel';

export default function Projects() {
    return (
        <section className={`${styles.projects}`} id="projects">
            <Container>
                <div className={styles.projects_container}>
                    <div className={styles.projects_title}>
                        <h2>Projects</h2>
                    </div>
                    <div className={styles.project_carousel}>
                        <Carousel datas={projects} />
                    </div>
                </div>
            </Container>
        </section>
    );
}
