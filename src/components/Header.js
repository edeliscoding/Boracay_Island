import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Righteous",
  },

  appbar: {
    background: "none",
    fontFamily: "Righteous",
    boxShadow: "none",
  },
  icon: {
    color: "#ffff",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarwrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#5AFF3d",
  },
  heroText: {
    fontSize: "3rem",
    color: "#00000",
    letterSpacing: ".2rem",
  },
  title: {
    textAlign: "center",
  },
  goDown: {
    color: "#5aFF3d",
    fontSize: "4rem",
  },
}));

const Header = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarwrapper}>
          <h1 className={classes.appbarTitle}>
            Boracay <span className={classes.colorText}>Island</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <div className={classes.title}>
          <h2 className={classes.heroText}>
            Welcome to <br />
            Boracay <span className={classes.colorText}>Island</span>
          </h2>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
