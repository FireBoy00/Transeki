import Logo from "./logo";
import { Input } from "./ui/input";

const NavBar = () => {
    return (
        <nav className="p-4 bg-gray-800 grid grid-cols-3 items-center">
            <div className="flex justify-start">
                <Logo />
            </div>
            <div className="flex justify-center">
                <Input type="text" placeholder="Search..." className="bg-gray-700 border-0 w-full max-w-md" />
            </div>
            <div className="flex justify-end">
                {/* Right side space for future content */}
            </div>
        </nav>
    )
}

export default NavBar;