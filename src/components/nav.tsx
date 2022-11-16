import React, { FC, useState } from 'react';

import '../css/Nav.css';

import { FaAlignJustify } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";

const Nav: FC = () => {

    const [show, setShow] = useState<boolean>(false);

    const handleChange = () => {
        setShow(!show);
    }


    return (
        <nav className="nav-section">
            <h1 className="nav-h">DASHBOARD</h1>

            <div className="nav-b-menu">
                <FaAlignJustify className={!show ? "b-m-close" : "diss"} onClick={() => handleChange()} />
                <FaAlignRight className={show ? "b-m-open" : "diss"} onClick={() => handleChange()} />
            </div>

            <div className={show ? "nav-drop-b" : "diss"}>
                <ul className="n-d-u">
                    <li className="n-d-l">1</li>
                    <li className="n-d-l">2</li>
                    <li className="n-d-l">3</li>
                </ul>

            </div>
        </nav>
    );
}

export default Nav;
