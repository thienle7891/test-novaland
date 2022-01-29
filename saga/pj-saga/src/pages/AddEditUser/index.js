
import React, { useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import { useDispatch, useSelector} from "react-redux" 

import styles from "./styles.module.scss";
import { Button } from '@material-ui/core';
import { createUserStart, editUserStart } from '../../redux/actions';
import { toast } from 'react-toastify';


const initialState = {
  name: "", 
  email: "",
  phone: "",
  address: "",
  password: "",
}


const AddEditUser = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.data);
  const {id} = useParams();
  const [isEdit, setIsEdit] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  
  const {name, email, phone, address, password} = formValue;
  const [rePassword, setRePassword] = useState("")
  const [validationMsg, setValidationMsg] = useState({});
  
  useEffect(() => {
    if(id) {
      setIsEdit(true)
      const user = users.find(item => item.id === Number(id));
      setFormValue({...user})
    }
  }, [id])

  const onChangeInput = (e) => {
    let {name, value} = e.target
    setFormValue({...formValue, [name]: value})
  }

  const validatorAll = () => {
    const msg = {}
    if(isEmpty(name)) {
      msg.name = "Please input User Name";
      // setIsPass(true)
    }
    // ----check email
    if(isEmpty(email)) {
      msg.email = "Please input your email"
    }else if(!isEmail(email)) {
      msg.email= "Your email is incorrect"
    } 
    if(isEmpty(password)) {
      msg.password = "Please enter your password"
    }else if (isLength(password)) {
      msg.email= "Your password is incorrect"
    }
    if(rePassword !== password) {
      msg.rePassword ="Error. Please enter again!!"
    }

    if(isEmpty(phone)) {
      msg.phone = "Please input User Phone";
      // setIsPass(true)
    }
    if(isEmpty(address)) {
      msg.address = "Please input User Address";
      // setIsPass(true)
    }

    setValidationMsg(msg)
    if(Object.keys(msg).length > 0) return false;
    return true
  }

  const handleSubmit = () => {
    const isValid = validatorAll();
    if (!isValid) return
    if (isValid) {
      if(!isEdit) {
        dispatch(createUserStart(formValue));
        toast.success("Added User Successfully!!")
        setTimeout(() => navigator("/"), 500)
      } else {
        dispatch(editUserStart(id, formValue));
        toast.success("User Updated Successfully!!")
        setTimeout(() => navigator("/"), 500)
        setIsEdit(false);
      }
    }
  }
  return (
      <div className={styles.root}>
          <form className={styles.form} noValidate  autoComplete="true"
            // onSubmit={handleSubmit}
          >
            <h2 className={styles.title}>{!isEdit ? "Add User Detail": "Update User Detail"}</h2> 
            <TextField id="outlined-basic" label="Name" variant="outlined" 
              value={name || ""}
              onChange={onChangeInput}
              name="name"
              error={validationMsg.name && true}
              helperText={validationMsg.name}
              
              className={styles.input}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" 
              value={email || ""}
              onChange={onChangeInput}
              name="email"
              error={validationMsg.email && true}
              helperText={validationMsg.email}
              className={styles.input} />
            <TextField id="outlined-basic" label="Password" variant="outlined" 
              value={password || ""}
              onChange={onChangeInput}
              name="password"
              error={validationMsg.password && true}
              helperText={validationMsg.password}
              className={styles.input} />
            <TextField id="outlined-basic" label="Required Password" variant="outlined" 
              value={rePassword || ""}
              onChange={e => setRePassword(e.target.value)}
              name="rePassword"
              error={validationMsg.rePassword && true}
              helperText={validationMsg.rePassword}
              className={styles.input} />
            <TextField id="outlined-basic" label="Phone" variant="outlined" 
              value={phone || ""}
              onChange={onChangeInput}
              name="phone"
              error={validationMsg.phone && true}
              helperText={validationMsg.phone}
              className={styles.input} />
            <TextField id="outlined-basic" label="Address" variant="outlined" 
              value={address || ""}
              onChange={onChangeInput}
              name="address"
              error={validationMsg.address && true}
              helperText={validationMsg.address}
              className={styles.input} />
            <div>
              <Button variant="contained" 
                color="primary" 
                style={{marginRight: "30px"}}
                // type="submit"
                onClick={handleSubmit}
              >{!isEdit ? "Add": "Update"}</Button>
              <Button variant="contained" color="secondary" 
                onClick={()=> navigator("/")}
              >Go Back</Button>
            </div>

          </form>
      </div>
  );
};

export default AddEditUser;