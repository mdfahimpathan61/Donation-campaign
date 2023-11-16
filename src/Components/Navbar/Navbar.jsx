
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="max-w-6xl m-auto">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/public/Logo.png" alt="" />
                </div>

                <ul className="text-lg font-bold flex gap-12 ">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-[#FF444A]" : ""
                        }
                    >
                        HOME
                    </NavLink>
                    
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "mx-12" : isActive ? "text-[#FF444A] border-b-4 border-[#FF444A]" : ""
                        }
                    >
                        DONATION
                    </NavLink>
                    
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-b-4 border-[#FF444A]" : ""
                        }
                    >
                        STATISTICS
                    </NavLink>


                </ul>
            </div>

        </div>
    );
};

export default Navbar;