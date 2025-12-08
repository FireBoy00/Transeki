import { BellIcon } from 'lucide-react';
import Account from './Account';
import Logo from './Logo';
import SearchBar from './SearchBar';

export default function NavBar() {
    return (
        <nav className="grid grid-cols-3 items-center border-b-2 border-primary/10 bg-primary/5 p-2">
            <div className="flex justify-start">
                <Logo />
            </div>
            <div className="flex justify-center">
                <SearchBar />
            </div>
            <div className="flex items-center justify-end gap-2">
                <BellIcon className="box-content h-6 w-6 cursor-pointer rounded-full p-2 text-primary/75 hover:bg-gray-600 hover:text-primary/90" />
                <Account onlyAvatar username="Test User" />
            </div>
        </nav>
    );
}
