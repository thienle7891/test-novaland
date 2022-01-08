
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import './responsive.css';


function HeaderNavItem ({ navs, index }) {

    return (    
        <ul className="navsItem">
            {navs[index].list.map((item) => (
                <li key={item}>{item.toUpperCase()}</li>
            ))}
        </ul>
    )
}

export default HeaderNavItem;