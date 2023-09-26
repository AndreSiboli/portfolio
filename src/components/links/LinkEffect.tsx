import styles from '@/styles/links/LinkEffect.module.scss';
import Link from 'next/link';

interface PropTypes {
    link: string;
    content: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    handleLink?: Function;
}

export default function LinkEffect(props: PropTypes) {
    const { link, content, target = '_self', handleLink } = props;

    return (
        <Link
            className={styles.link}
            href={link}
            target={target}
            onClick={() => {
                if (!handleLink) return;
                handleLink();
            }}
        >
            {content}
        </Link>
    );
}
