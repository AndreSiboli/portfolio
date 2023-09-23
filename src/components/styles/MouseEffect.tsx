import styles from '@/styles/styles/MouseEffect.module.scss';
import { ChangeEvent, useEffect, useRef } from 'react';

export default function MouseEffect() {
    const mouse = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function move(e: any) {
            const pos = {
                X: e.pageX,
                Y: e.pageY,
            };

            setTimeout(() => {
                if (!mouse.current) return;
                mouse.current.style.display = 'block';
                mouse.current.style.opacity = '1';

                mouse.current.style.top = `${pos.Y}px`;
                mouse.current.style.left = `${pos.X}px`;
            }, 75);
        }

        // function disapear() {
        //     if (!mouse.current) return;
        //     mouse.current.style.display = 'none';
        // }

        function scroll() {
            if (!mouse.current) return;
            mouse.current.style.opacity = '0';
        }

        document.onmousemove = move;
        // window.onmouseout = disapear;
        window.onscroll = scroll;

        return () => {
            document.removeEventListener('mousemove', move);
            // window.removeEventListener('mouseout', disapear);
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    return <div className={styles.mouseEffect} ref={mouse}></div>;
}
