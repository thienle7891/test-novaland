
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import './responsive.css';
import { Container, Grid } from '@material-ui/core';


function PjSpecial () {
    const pjList = [
        {
            name: 'aqua city',
            image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-aqua.jpg',
        },
        {
            name: 'novaworld phan thiet',
            image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nologo-centara.jpg',
        },
        {
            name: 'aqua city',
            image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
        },
        {
            name: 'novaworld phan thiet',
            image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/tgm.jpg',
        },
        {
            name: 'aqua city',
            image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/nvw-pt.jpg',
        },
        {
            name: 'novaworld phan thiet',
            image: 'https://www.novaland.com.vn/Data/Sites/1/media/du-an/du-an-tieu-bieu-2021/lagoon-1600x1111.jpg',
        },

        
    ]

    return (
        <div style={{width: '100%',}}>
            <Container maxWidth="md" className="pjSpecial">
                <div className="pjSpecialTitle">
                    <h2>Dự án tiêu biểu</h2>
                    <div className="newsLine"></div>
                </div>
                <div className="row">
                    {pjList.map((item, index) => (
                        <Grid key={index} className="pjSpecialItem"
                            item xs={6} sm={6} lg={4}>
                            <span className="pjSpecialImg">
                                <img src={item.image}/>
                                <h3>
                                    {item.name.toUpperCase()}
                                    <i className="fas fa-caret-right"></i>
                                </h3>
                            </span>
                        </Grid>
                    ))}
                </div>
            </Container>    
        </div>   

        
    )
}

export default PjSpecial;