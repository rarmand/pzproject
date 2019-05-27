import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
  input: {
    fontSize: "14px",
    textTransform: "capitalize",
    color: "black"
  },
  textfield: {
    width: "100%",
    maxWidth: "400px",
    margin: "5px"
  }
});

class LoginInput extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <TextField
        className={classes.textfield}
        margin="normal"
        label={
          <Typography className={classes.input} color="primary">
            {classes.label}
          </Typography>
        }
        id={classes.label}
        name={classes.label}
      />
    );
  }
}

export default withStyles(useStyles)(LoginInput);
