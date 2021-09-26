import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div className="header p-3 ">
            <h2 className="text-center">Choose your 5 favourite series from the list.</h2>
            <h6 className="text-center">Movie and series always give us joy. Keep watching movie and stay connected with us</h6>
            <h2 className="text-center">Total Cost: <span className="fw-bold">1045 Million</span></h2>
        </div>
    );
};

export default Header;