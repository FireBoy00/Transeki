import { Link } from '@inertiajs/react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function SearchBar() {
    return (
        <div className="flex w-full max-w-md items-center rounded-full bg-accent/20 px-3 py-0.5 hover:bg-accent/20">
            <div className="relative flex w-full max-w-md items-center">
                <Search className="mr-2 h-5 w-5 cursor-pointer text-primary/75 opacity-75" />
                <Input
                    type="text"
                    placeholder="Search manga..."
                    className="w-full max-w-md border-0 bg-transparent p-0 placeholder:font-mono placeholder:text-primary/75 placeholder:opacity-75 focus-visible:ring-0"
                />
                <span className="absolute right-0 font-mono text-sm text-primary/75 opacity-55">
                    Ctrl + /
                </span>
            </div>
            <Link
                href="/search"
                className="ml-2 rounded-full bg-accent/20 px-3 py-1 text-sm text-primary/75 hover:bg-accent/30 hover:text-primary/90 hover:underline"
            >
                Filter
            </Link>
        </div>
    );
}
