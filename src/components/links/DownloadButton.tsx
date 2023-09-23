import styles from '@/styles/links/DownloadButton.module.scss';
import Link from 'next/link';

interface PropTypes {
    content: string;
    archive: string;
}

export default function LinkEffect(props: PropTypes) {
    const { content, archive } = props;

    return (
        <Link className={styles.link} href={archive} download>
            {content}
        </Link>
    );
}
