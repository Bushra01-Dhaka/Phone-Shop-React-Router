import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-6 px-5 shadow-lg">
            <div className="logo">
                <h2 className="text-3xl py-4 md:py-0 font-bold ">Phone<span className="text-green-500">Shop</span></h2>
            </div>
            <nav>
                <ul className="flex gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-green-500" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/favorites"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-green-500" : ""
                        }
                    >
                        Favorites
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "underline text-green-500" : ""
                        }
                    >
                        Login
                    </NavLink>

                </ul>
            </nav>
        </div>
    );
};

export default Navbar;