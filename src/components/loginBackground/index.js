import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  image: {
    backgroundColor: "#43425d"
  }
}));

function LoginBackground() {
  const classes = useStyles();
  return <Grid item xs={false} sm={4} md={6} className={classes.image} />;
}

export default LoginBackground;
