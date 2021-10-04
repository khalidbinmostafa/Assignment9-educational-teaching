import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <><><div className="mb-5">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/service">Service</Link>
                    <Link className="navbar-brand" to="/feature">Feature</Link>
                </div>
            </nav>

        </div><div className="container text-center">
                <div>
                    <h1><span className="header-text">Web Development</span> - Education
                        <br /> HTML Template</h1>
                </div>
                <div className="mt-4">
                    <button type="button" className="header-btn fw-bolder">Preview Demos</button>
                    <p className="mt-3">More Demos Coming Soon</p>
                </div>
            </div></></>
    );
};

export default Header;