
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import './responsive.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NewsInforList from '../NewsInforList';
import NewsMarket from '../NewsMarket';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function NewInfor () {
    const classes = useStyles();
    return (    
        <div style={{backgroundColor: '#2D3C61',
            width: '100%',
            padding: '30px 0'
        }}>
            <Container maxWidth="lg">
                <div className="newsTitle"> 
                    <h1>Thông tin mới</h1>
                    <div className="newsLine"></div>
                </div>
                <div className="newsContent"> 
                <Grid container spacing={3}>
                    <NewsInforList/>
                    <NewsMarket/>
                </Grid>
                </div>
                
            </Container>
        </div>
    )
}

export default NewInfor;