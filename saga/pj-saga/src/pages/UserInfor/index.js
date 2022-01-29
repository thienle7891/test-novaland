import { Box, Grid,Button } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'; 
import styles from "./styles.module.scss";
const UserInfor = () => {
  const { users, loggingId } = useSelector(state => state.data)
  const navigator = useNavigate()
  const user = users.find(item => item.id === Number(loggingId))
  return (
      
          <div stlye={{
            display: 'flex',
            width:"100%",
          }}>
            <Grid container spacing={3}  style={{
              width:"600px",
              backgroundColor: "rgb(246, 246, 246)",
              margin: '20px auto 20px',
              padding: "20px",
              boxShadow: "6px 6px 6px rgba(0,0,0, 0.6)"
              
            }}>
              <Grid item md={12}>
                <h3
                  style={{margin: "0 auto 12px"}}
                >User Infor</h3>
              </Grid>
              <Grid align="right" item md={4}>
                <div className={styles.userImg}>
                  <img src=""/>
                </div>
              </Grid>
              <Grid align="left" item md={8}>
                <input
                  accept="image/*"
                  
                  style={{ display: 'none' }}
                  id="raised-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="raised-button-file">
                  <Button variant="contained" color="secondary" component="span"   >
                    Upload
                  </Button>
                </label> 
              </Grid>
              <Grid align="right" item md={4}>ID: </Grid>
              <Grid align="left" item md={8}>{user.id}</Grid>
              <Grid align="right" item md={4}>Name: </Grid>
              <Grid align="left" item md={8}>{user.name}</Grid>
              <Grid align="right" item md={4}>Email: </Grid>
              <Grid align="left" item md={8}>{user.email}</Grid>
              <Grid align="right" item md={4}>Phone: </Grid>
              <Grid align="left" item md={8}>{user.phone}</Grid>
              <Grid align="right" item md={4}>Address: </Grid>
              <Grid align="left" item md={8}>{user.address}</Grid>
            </Grid>
            <Button variant="contained" color="secondary" 
                onClick={()=> navigator("/")}
              >Go Back</Button>

          </div>
  );
};

export default UserInfor;