import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/styles/CarouselItem.module.scss';

import Img from '../utils/Img';
import Link from 'next/link';

interface PropTypes {
    data: {
        name: string;
        link: string;
        image: StaticImport;
        type: string
    };
    item: any
}

export default function CarouselItem(props: PropTypes) {
    const { data, item } = props;
    const { name, link, image, type } = data;

    return (
        <div className={styles.project} ref={item}>
            <Link href={link} target="_blank">
                <div className={styles.project_image}>
                    <Img
                        src={image}
                        style={{
                            objectFit: 'cover',
                            borderRadius: '1em',
                            objectPosition: 'center center',
                        }}
                    />
                </div>
                <div className={styles.project_info}>
                    <h3>{name}</h3>
                    <span>{type}</span>
                </div>
            </Link>
        </div>
    );
}
