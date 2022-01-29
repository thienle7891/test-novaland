import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart,  loadUsersStart } from "../../redux/actions";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

 

const Home = () => {
  const { users, loading, error } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadUsersStart());
  }, []);

  useEffect(() => error && toast.error(error), [error])

  if (loading) {
    return (
      <div className={styles.root}>
        <CircularProgress className={styles.progressing}/>
      </div>
    )
  }

  const handleDelete = (id) => {
    console.log(id)
    if (window.confirm("You are sure that you wanted to delete that user?")) {
      dispatch(deleteUserStart(id));
      toast.success("User deleted successfully")
    }
  }

  const handleEdit = (id) => {

  }
  const handleView = (id) => {

  }
  return (

    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((item, index)=> (
              <TableRow key={index}>
                <TableCell align="center">{item.id}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.phone}</TableCell>
                <TableCell align="center">{item.address}</TableCell>
                <TableCell align="center">
                  <DeleteForeverIcon 
                    className={styles.btnDelete}
                    color="secondary"
                    onClick={()=>handleDelete(item.id)}
                  />  
                  <Link to={`/edit/${item.id}`}>
                    <BorderColorIcon 
                      color="primary" 
                      style={{
                        marginLeft: "10px",
                      }}
                      onClick={()=>handleEdit(item.id)}
                    />  
                  </Link>
                  <Link to={`/userinfor/${item.id}`}>
                    <VisibilityIcon 
                      style={{
                        marginLeft: "10px",
                      }}
                      onClick={()=>handleView(item.id)}
                    />  
                  </Link>

                </TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
