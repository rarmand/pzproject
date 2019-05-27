import React from "react";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
  input: {
    fontSize: "14px"
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
            {this.props.name}
          </Typography>
        }
        id={this.props.label}
        name={this.props.label}
        type={this.props.type}
      />
    );
  }
}

export default withStyles(useStyles)(LoginInput);
