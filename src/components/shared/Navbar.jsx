import { Menu } from 'lucide-react';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ThemeController from './ThemeController';

const Navbar = () => {
    const navItems = <>
    <NavLink><li>Home</li></NavLink>
    <NavLink><li>All Sports Equipment</li></NavLink>
    <NavLink><li>Add Equipment</li></NavLink>
    <NavLink><li>My Equipment</li></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-2 md:px-4 md:rounded-3xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden bg-gray-200 p-2 mr-2">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="text-xl text-accent uppercase font-semibold">Sports Arena</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <ThemeController />
                <Link to={'/login'} className="btn btn-accent">Login</Link>
                <Link to={'/register'} className="btn btn-accent">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;