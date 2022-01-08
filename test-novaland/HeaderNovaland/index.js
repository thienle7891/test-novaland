import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderNavBar from '../HeaderNavBar';
import Container from '@material-ui/core/Container';
import "./style.css";
import "./responsive.css";




function HeaderNovaland () {

    const [isNavBar, setIsNavBar] = useState(false);
    const handdeShowNav = () => {
        setIsNavBar(!isNavBar)
    }
    const handleCloseBars = () => {
        setIsNavBar(!isNavBar)
    }
    return (
        
        <Container maxWidth='lg'>
            <div className="headerNovaland">
                <div className="logoImage">
                    <img src="https://www.novaland.com.vn/Data/Sites/1/media/Default/logo-nvl.jpg"/>
                </div>
                <div className={isNavBar ? "headerContent showBars" :"headerContent"}>
                    <button type="button" className="closeIcon"
                        onClick={handleCloseBars}
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <span className="numberPhone">
                        <h4>Tổng đài CSKH:</h4>
                        <h3>1900 63 6666</h3>
                    </span>
                    <HeaderNavBar/>
                </div>
                <span className="barIcon"
                    onClick={handdeShowNav}
                >
                    <i className="fas fa-bars"></i>
                </span>
            </div>
        </Container>
    )
}

export default HeaderNovaland;