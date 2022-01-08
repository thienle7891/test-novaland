

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderNovaland from '../Home/HeaderNovaland';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import SlideHome from '../Home/SlideHome';
import NewInfor from '../Home/NewInfor';
import PjSpecial from '../Home/PjSpecial';



function HomePage (props) {

    return (
        <>
            <CssBaseline />
            <div style={{backgroundColor: '#fff'}}>

                <HeaderNovaland/>
                <SlideHome/>
                <NewInfor/>
                <PjSpecial/>
            </div>
        </>
        
        
    )
}

export default HomePage;