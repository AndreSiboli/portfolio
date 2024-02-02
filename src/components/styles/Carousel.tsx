import { useRef, useEffect, useState } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import styles from '@/styles/styles/Carousel.module.scss';

import CarouselItem from './CarouselItem';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

interface PropTypes {
    datas: { name: string; link: string; image: StaticImport; type: string; postedAt: string }[];
}

export default function Carousel(props: PropTypes) {
    const { datas } = props;

    const carousel = useRef<HTMLDivElement>(null);
    const item = useRef<HTMLDivElement>(null);

    const [current, setCurrent] = useState(0);
    const [maxRoll, setMaxRoll] = useState(0);
    const [button, setButton] = useState({
        r: true,
        l: false,
    });

    useEffect(() => {
        function defineMaxRoll() {
            if (!carousel.current) return;

            const child = carousel.current.childNodes;
            const width = window.innerWidth;
            let calc;

            if (width > 1000) calc = Math.ceil(child.length / 4 - 1);
            else if (width > 768) calc = Math.ceil(child.length / 3 - 1);
            else if (width > 550) calc = Math.ceil(child.length / 2 - 1);
            else calc = Math.ceil(child.length - 1);

            if (calc === undefined) return;

            setMaxRoll(calc);
            disableButton(0, calc);
        }

        defineMaxRoll(); //run at least one time;

        window.addEventListener('resize', defineMaxRoll);

        return () => {
            window.removeEventListener('resize', defineMaxRoll);
        };
    }, []);

    useEffect(() => {
        function resize() {
            if (!carousel.current) return;

            const car = carousel.current;

            car.style.scrollBehavior = 'auto';

            car.scrollLeft = 0;
            setCurrent(0);

            car.style.scrollBehavior = 'smooth';
        }

        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    function disableButton(cur: number, mRoll: number) {
        if (mRoll === 0) setButton({ r: true, l: true });
        else if (cur >= mRoll) setButton({ l: false, r: true });
        else if (cur <= 0) setButton({ l: true, r: false });
        else setButton({ r: false, l: false });
    }

    function moveCarousel(num: number) {
        if (!carousel.current) return;
        const car = carousel.current;

        const next = current + num;
        const width = car.offsetWidth;

        disableButton(next, maxRoll);

        if (next >= maxRoll + 1) {
            return;
        } else if (next <= -1) {
            return;
        }

        car.scrollLeft = next * width;
        setCurrent(next);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_buttons}>
                <div className={styles.carousel_button}>
                    <button
                        aria-label="button previous"
                        onClick={() => moveCarousel(-1)}
                        disabled={button.l}
                    >
                        <FaAngleLeft />
                    </button>
                </div>
                <div className={styles.carousel_button}>
                    <button
                        aria-label="button next"
                        onClick={() => moveCarousel(1)}
                        disabled={button.r}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <div className={styles.carousel_projects} ref={carousel}>
                {datas.map((data) => (
                    <CarouselItem data={data} key={data.link} item={item} />
                ))}
            </div>
        </div>
    );
}
