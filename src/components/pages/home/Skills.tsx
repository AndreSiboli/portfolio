import styles from '@/styles/pages/Home/Skills.module.scss';

import Container from '@/components/layout/Container';
import Skill from '@/components/styles/Skill';

export default function Skills() {
    return (
        <section className={`${styles.skills}`} id="skills">
            <Container>
                <div className={styles.skills_container}>
                    <div className={styles.skills_title}>
                        <h2>Skills</h2>
                    </div>
                    <div className={styles.skills_skills}>
                        <div className={styles.skills_group}>
                            <Skill name="HTML5" percent={90} />
                            <Skill name="CSS3/SASS" percent={80} />
                            <Skill name="React/NextJs" percent={75} />
                            <Skill name="Typescript" percent={75} />
                        </div>
                        <div className={styles.skills_group}>
                            <Skill name="NodeJs" percent={55} />
                            <Skill name="Git/GitHub" percent={70} />
                            <Skill name="MySQL/MongoDb" percent={70} />
                            <Skill name="English" percent={60} />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
