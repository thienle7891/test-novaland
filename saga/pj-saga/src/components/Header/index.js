import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import clsx from "clsx";
import { useDispatch, useSelector} from "react-redux"

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";



const Header = () => {
  const { loggingId } = useSelector(state=> state.data);
  const [navAction, setNavACtion ] = useState("home")
  const navs = ["home", "products", "about", "contact"]

  const handleClickNav = (nav) => {
    setNavACtion(nav)
    console.log(loggingId)
  }
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            News
          </Typography>
          <ul className={styles.navList}>
              {navs.map(nav=> (
                <Link to={nav === "home"? "/" : `/${nav}`} key={nav}
                  className={styles.navLink}
                >
                  <li className={clsx({
                    [styles.action] : nav === navAction
                  })}
                    onClick={()=> handleClickNav(nav)}
                  >
                      {`${nav[0].toUpperCase()}${nav.slice(1)}`}
                  </li>
                </Link>
              ))}
          </ul>
          <Link to={`/userinfor/${loggingId}`} className={clsx(styles.userImg, {
            [styles.active]: loggingId !== null
          })}></Link>
          <Link to="/register" className={styles.btnForm}>
            <Button 
              className={clsx({
                [styles.hidden]: loggingId !== null
              })}
              color="inherit">Register</Button>
          </Link>
          <Link to="/login" className={styles.btnForm}>
            <Button color="inherit"
              className={clsx({
                [styles.hidden]: loggingId !== null
              })}
            >Login</Button>
          </Link>
          <Link to="/cart" className={styles.btnForm}>
            <Button 
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              color="inherit"><ShoppingCartIcon/></Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
