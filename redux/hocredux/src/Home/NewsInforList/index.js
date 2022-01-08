
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import './responsive.css';
import { Grid } from '@material-ui/core';


function NewsInforList () {

    return (    
        <Grid item xs={12} sm={8} lg={8}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <div className="newsContentItem newsContent1">
                        <div className="inforContent">
                            <div className="inforContentBg">
                                <div className="inforImg inforImg1">
                                </div>
                            </div>
                            <h3 className="inforTimes">
                                <i className="far fa-clock"></i>
                                06/01/2022
                            </h3>
                            <a className="inforTitle" href="#">
                                <h2>
                                    NOVALAND KÝ KẾT ĐỒNG HÀNH CÙNG CÁC ĐỐI TÁC TRONG LĨNH VỰC XÂY DỰNG
                                    <i className="fas fa-caret-right"></i>
                                </h2>
                            </a>
                            <h4>Ngày 05 - 06/01/2022, tại Novaland Gallery (2Bis Nguyễn Thị Minh Khai, Q.1, TP.HCM), 
                                Novaland đã tiến hành ký kết hợp tác lâu dài với các đối tác trong việc xây dựng các dự án trọng điểm của Novaland.
                            </h4>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <div className="newsContentItem newsContent2">
                        <div className="inforContent">
                            <div className="inforContentBg">
                                <div className="inforImg inforImg2">
                                </div>
                            </div>
                            <h3 className="inforTimes">
                                <i className="far fa-clock"></i>
                                06/01/2022
                            </h3>
                            <a className="inforTitle" href="#">
                                <h2>
                                    PHAN VŨ TIẾP TỤC ĐỒNG HÀNH CÙNG NOVALAND THI CÔNG CÁC CỤM DỰ ÁN NOVAWORLD PHAN THIET VÀ AQUA CITY
                                    <i className="fas fa-caret-right"></i>
                                </h2>
                            </a>
                            
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <div className="newsContentItem newsContent3">
                        <div className="inforContent">
                            <div className="inforContentBg">
                                <div className="inforImg inforImg3">
                                </div>
                            </div>
                            <h3 className="inforTimes">
                                <i className="far fa-clock"></i>
                                06/01/2022
                            </h3>
                            <a className="inforTitle" href="#">
                                <h2>
                                    NOVAGROUP ĐÓNG GÓP Ý TƯỞNG PHÁT TRIỂN KINH TẾ CHO KHU VỰC BIÊN GIỚI CỦA ĐỒNG THÁP
                                    <i className="fas fa-caret-right"></i>
                                </h2>
                            </a>
                            
                        </div>
                    </div>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default NewsInforList;