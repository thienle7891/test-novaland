
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import './responsive.css';
import SlideContent from '../SlideContent';


function SlideHome () {
    const count = ['0','1','2','3','4','5','6','7','8','9'];
    const [slideActive, setSlideActive] = useState(0);

    const handleChangeSlide = (number) => {
        setSlideActive(Number(number));
        document.querySelector('.slide').style.animation = 'none';
        
    };
    return (    
        <div>
            <div className='slideHome' >

                <div className='slide' 
                    style={{
                        animation: `animateSlide  30s ease-in 2s infinite`,
                        transform: `translateX(-${slideActive}0%)`
                    }}>
                    {count.map(number => (
                        <span 
                            key={number}
                            className={`slideItem slide${number}`}
                        >

                        </span>
                    ))}
                        
                </div>
                <SlideContent/>

                <span className='controlsSlide'>
                    <span>
                        {count.map(number => (
                            <div
                                key={number}
                                className={`btnSlide${number} ${slideActive === Number(number) && "active"}` }
                                onClick={() =>handleChangeSlide(number)}
                            ></div>
                            
                        ))}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default SlideHome;