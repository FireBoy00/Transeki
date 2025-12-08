import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import { Head } from '@inertiajs/react';

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <NavBar />
            <Hero />
        </>
    );
}
