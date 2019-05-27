import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
  footer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "10px"
  }
}));

function LoginFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p>Terms of use. Privacy policy.</p>
    </footer>
  );
}

export default LoginFooter;
