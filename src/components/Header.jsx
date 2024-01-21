import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import { filterData, setSearchQuery } from "../redux/reducers/courseSlice";

const Header = () => {

    const location = useLocation();
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    useEffect(() => {
        dispatch(filterData(query));
        dispatch(setSearchQuery(query));
    }, [dispatch, query]);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src="https://www.alemeno.com/static/assets/images/logo.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <input type="text" placeholder="Search course" value={query} onChange={e => setQuery(e.target.value)} className="input input-bordered w-full md:w-auto" />
                </div>
            </div>
        </div>
    )
};

export default Header