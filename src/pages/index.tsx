import styles from '@/styles/Home.module.scss';
import { projects } from '@/data/projects';

import Head from 'next/head';
import Skill from '@/components/styles/Skill';
import Container from '@/components/layout/Container';

import Img from '@/components/utils/Img';
import SocialMedia from '@/components/styles/SocialMedia';
import Carousel from '@/components/styles/Carousel';

import Main from '@/components/pages/home/Main';
import About from '@/components/pages/home/About';
import Skills from '@/components/pages/home/Skills';
import Projects from '@/components/pages/home/Projects';

export default function Home() {
    return (
        <>
            <Head>
                <title>André Siboli | Home</title>
                <meta name="description" content="My personal portfolio" />
                <meta name="author" content="André Siboli" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <Main />
            <About />
            <Skills />
            <Projects />
        </>
    );
}
