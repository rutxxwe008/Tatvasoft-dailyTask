import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Tab, Tabs, TextField, makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  button: {
    backgroundColor: 'yellow',
    color: 'black',
  },
});

export const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <h1>This is profile component.</h1>
      <br></br>
      <h1>
        <NavLink to="/">Home</NavLink>
      </h1>
      <br></br>
      <Button variant="contained" className={classes.button}>
  Click me!
</Button>
      <br></br>
      <button> normal html </button>
      <br></br>
      <TextField className="input-element"></TextField>
      <br></br>
      <br></br>
      <input></input> <br></br>
      <br></br>
     <Tabs className="tabs">
      <Tab>Hello</Tab>
     </Tabs>
    </>
  );
};
