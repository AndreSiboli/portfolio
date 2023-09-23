import styles from '@/styles/styles/Skill.module.scss';
import { useEffect, useRef, useState } from 'react';

interface PropTypes {
    name: string;
    percent: number;
}

export default function Skill(props: PropTypes) {
    const { name, percent } = props;
    const skillReference = useRef<HTMLDivElement>(null);

    const [curPercent, setCurPercent] = useState(0);
    const [percents, setPercents] = useState(0);

    useEffect(() => {
        if (!skillReference.current) return;

        const option: IntersectionObserverInit = {
            rootMargin: '0px',
            threshold: 0.1,
        };

        const callback: IntersectionObserverCallback = (entry, observer) => {
            entry.forEach((entries) => {
                if (!skillReference.current) return;

                if (entries.isIntersecting) {
                    setCurPercent(percent);
                    increasePercent();
                    observer.unobserve(skillReference.current);
                }
            });
        };

        const observer = new IntersectionObserver(callback, option);
        observer.observe(skillReference.current);
    }, []);

    function increasePercent() {
        let percentCont = 0;
        const time = Math.round(1800 / percent);

        let interval: any = setInterval(() => {
            if (percentCont >= percent) return clearInterval(interval);
            percentCont++;
            setPercents(percentCont);
        }, time);
    }

    // useEffect(() => {
    //     let percentCont = 0;
    //     const time = Math.round(1800 / percent);

    //     let interval: any = setInterval(() => {
    //         if (percentCont >= percent) return clearInterval(interval);
    //         percentCont++;
    //         setPercents(percentCont);
    //     }, time);
    // }, []);

    // console.log(percents)

    return (
        <div className={styles.skill} ref={skillReference}>
            <div className={styles.skill_name}>
                <span>{name}</span>
            </div>
            <div className={styles.skill_loading}>
                <div className={styles.loading_percent}>
                    <span style={{ left: `${curPercent}%` }}>{percents}%</span>
                    <span>height</span>
                </div>
                <div className={styles.loading_bar}>
                    <div className={styles.loading_load} style={{ width: `${curPercent}%` }}></div>
                </div>
            </div>
        </div>
    );
}
