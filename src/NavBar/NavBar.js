import React from 'react';
import "./styles.css"

function NavBar(props) {
    return (
        <nav className="nav">
            <a href="/" className="site-title" > Comic Collector</a>
            <ul>
                <li className="active">
                    <a href="/heroes">heroes</a>
                </li>
                <li>
                    <a href="/comics">comics</a>
                </li>
                <li>
                    <a href="/events">events</a>
                </li>
                <li>
                    <a href="/login"> login</a>
                </li>
                <li>
                    <a href="/profile">profile</a>
                </li>
                <li>
                    <a href="/logout">logout</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;