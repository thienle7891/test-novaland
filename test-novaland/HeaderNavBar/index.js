import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./style.css";
import "./responsive.css";
import HeaderNavItem from '../HeaderNavItem';




function HeaderNavBar () {

    const navs = [
        {
            title:'trang chủ',
        }, 
        {
            title:'giới thiệu',
        }, 
        {
            title:'dự án',
            list: ['bất động sản đô thị', 'bất động sản đô thị du lịch'],
        }, 
        {
            title:'quan hệ đầu tư',
            list: [
                'thông tin về tập đoàn novaland',
                'quản trị doanh nghiệp',
                'công bố thông tin',
                'đại hội đồng cổ đông',
                'hoạt động nhà đầu tư',
                'giá cổ phiếu và thông tin thị trường',
            ],
        }, 
        {
            title:'tin tức',
            list: [
                'thông tin thị trường',
                'thông tin novaland',
                'thông tin báo chí',
                'video'
            ],
        }, 
        {
            title:'phát triển bền vững',
            list: [
                'thông điệp novaland',
                'hội đồng phát triển bền vững',
                'quản trị tập đoàn',
                'quản trị nguồn nhân lực',
                'quản trị thương hiêu novaland',
                'môi trường',
                'hoạt động cộng đồng',
                'thông tin phát triển bền vững'
            ],
        }, 
        {
            title:'tuyển dụng',
        }, 
        {
            title:'liên hệ',
        },
    ]
    return (
        <ul className="headerNav">
            {navs.map((nav, index) => (
                <li className="headerNavLi"
                    key={index}>
                    <h4>{nav.title.toUpperCase()}</h4>
                    {nav.list && <span className="rightIcon">
                        <i className="fas fa-chevron-right"></i>
                    </span>}
                    <span className="navItemLine"></span>
                    {nav.list && <HeaderNavItem navs={navs} index={index}/>}
                </li>
            ))}
            <span className="navSearch hideSearch">
                <i className="fas fa-search"></i>
            </span >
            <span className="navSearch">EN</span>
        </ul>
    )
}

export default HeaderNavBar;