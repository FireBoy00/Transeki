import { Link } from '@inertiajs/react';

export default function Logo() {
    return (
        <Link
            className="flex cursor-pointer items-center gap-1"
            href="/home"
            aria-label="Home"
        >
            <img
                className="w-8"
                src="/assets/logo/Transeki-logo.png"
                alt="Transeki Logo"
            />
            <span className="text-xl font-bold text-primary/85">Transeki</span>
        </Link>
    );
}
