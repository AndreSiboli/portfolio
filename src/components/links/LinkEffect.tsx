import styles from '@/styles/links/LinkEffect.module.scss';
import Link from 'next/link';

interface PropTypes {
    link: string;
    content: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
}

export default function LinkEffect(props: PropTypes) {
    const { link, content, target = '_self' } = props;

    return (
        <Link className={styles.link} href={link} target={target}>
            {content}
        </Link>
    );
}
