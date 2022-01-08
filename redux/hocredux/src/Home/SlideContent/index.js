
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import './responsive.css';


function SlideContent () {

    const contentList = [
        {
            title: 'sứ mệnh',
            content: ['- kiến tạo cộng đồng', '- xây dựng điểm đến', '- vun đắpniềm vui']
        },
        {
            title: 'tầm nhìn',
            content: ['tập đoàn kinh tế hàng đầu trong các lĩnh vực', 'bất động sản - kiến tọa du lịch - phát triển hạ tầng giao thông']
        },
        {
            title: 'giá trị cốt lõi',
            content: ['hiệu quả - chính trực - chuyên nghiệp']
        },
        {
            title: 'tập đoàn kinh tế hàng trong các lĩnh vực',
            content: ['- bất động sản', '- kiến tạo điểm đến du lịch', '- phát triển hạ tầng giao thông']
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(()=> {
        setInterval(()=> {
            const active = Math.floor(Math.random() * 4);
            setActiveIndex(active)
        }, 5000)
    }, [])
    return (    
        <div>
            {contentList.map((content, index)=> (
                <div key={index} 
                    className={activeIndex ===Number(index) ? 'contentSlideItem active' : 'contentSlideItem'}>
                    <h2>{content.title.toUpperCase()}</h2>
                    {contentList[index].content.map((item, index) => (
                        <h3 key={index}>{item.toUpperCase()}</h3>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SlideContent;