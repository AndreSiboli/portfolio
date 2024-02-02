import { CSSProperties } from 'react';
import styles from '@/styles/styles/SocialMedia.module.scss';

import Link from 'next/link';

import { FaLinkedinIn, FaSquareGithub } from 'react-icons/fa6';

interface PropTypes {
    style?: CSSProperties;
}

export default function SocialMedia(props: PropTypes) {
    const { style } = props;

    return (
        <div className={styles.socialMedia}>
            <div className={styles.socialMedia_link}>
                <Link
                    href="http://www.github.com/andresiboli"
                    target="_blank"
                    style={style}
                    aria-label="Link to Github"
                >
                    <FaSquareGithub />
                </Link>
            </div>
            <div className={styles.socialMedia_link}>
                <Link
                    href="https://www.linkedin.com/in/andr%C3%A9-siboli-81b969244/"
                    target="_blank"
                    style={style}
                    aria-label="Link to Linkedin "
                >
                    <FaLinkedinIn />
                </Link>
            </div>
        </div>
    );
}
