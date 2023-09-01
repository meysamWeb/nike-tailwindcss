import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from "../constants/index.js";
import Button from "./Button.jsx";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full max-xl:px-10">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}

                    />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="max-lg:hidden">
                    <li>
                        <Button
                            label="Sing in / Explore Now"
                            backgroundColor="transparent"
                            borderColor="border-slate-gray"
                            textColor="text-slate-gray"
                        />
                    </li>
                </ul>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="Hamnurger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Nav;