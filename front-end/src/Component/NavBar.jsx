import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="/" exact>
          All Record
        </NavLink>
        <NavLink className={classes.tabs} to="add" exact>
          Add Record
        </NavLink>
        <NavLink className={classes.tabs} to="list" exact>
          Track-Item
        </NavLink>
        <NavLink className={classes.tabs} to="result" exact>
          Add-Item
        </NavLink>
        <NavLink className={classes.tabs} to="scan" exact>
          Scan QR
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
