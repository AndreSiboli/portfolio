import { ReactNode } from 'react';
import Footer from '../bars/Footer';

import Navbar from '../bars/Navbar';
import MouseEffect from '../styles/MouseEffect';

export default function MainContainer({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
            <MouseEffect />
            <Footer />
        </>
    );
}
