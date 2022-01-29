import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import styles from "./styles.module.scss";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { loginStart } from '../../redux/actions';

const Login = () => {
    const { users } = useSelector(state => state.data);
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [formValue, setFormValue] = useState({email: "", password: ""}) 
    const {email, password} = formValue;
    const [validationMsg, setValidationMsg] = useState({});

    const onChangeInput = (e) => {
        let {name, value} = e.target;
        setFormValue({...formValue, [name]: value});
    }
    const validatorAll = () => {
        const msg = {}
        const userLogging = users.find(item => item.email === email);
        if(isEmpty(email)) {
          msg.email = "Please input your email"
        }else if(!isEmail(email)) {
          msg.email= "Your email is incorrect"
        }else if(!userLogging) {
          msg.email= "Error. Please enter your email again!"
        }   
        if(isEmpty(password)) {
          msg.password = "Please enter your password"
        } else if(userLogging) {
          if(userLogging.password !== password) {
            msg.password = "Error. Please enter your password again!"
          }
        }
        setValidationMsg(msg)
        if(Object.keys(msg).length > 0) return false;
        return true
    }
    const handleSubmit = () => {
        const isValid = validatorAll();
        if (!isValid) return
        if (isValid) {
          const  userLogging = users.find(item => item.email === email);
          console.log(userLogging.id)
          toast.success("Login Successfully!!");
          setTimeout(() => navigator("/"), 500);
          dispatch(loginStart(userLogging.id));
        }
    }
    return (
        <div className={styles.root}>
            <form className={styles.form} noValidate  autoComplete="true"
            // onSubmit={handleSubmit}
            >
              <h2 className={styles.title}>LOGIN</h2> 
              <TextField id="outlined-basic" label="Email" variant="outlined" 
                type="text"
                value={email || ""}
                onChange={onChangeInput}
                name="email"
                error={validationMsg.email && true}
                helperText={validationMsg.email}
                className={styles.input} />
              <TextField id="outlined-basic" label="Password" variant="outlined" 
                type="password"
                value={password || ""}
                onChange={onChangeInput}
                name="password"
                error={validationMsg.password && true}
                helperText={validationMsg.password}
                className={styles.input} />
              <Button variant="contained" 
                color="secondary" 
                style={{marginTop: "20px"}}
                // type="submit"
                onClick={handleSubmit}
              >Login</Button>
            </form>
        </div>        
  );
};

export default Login;