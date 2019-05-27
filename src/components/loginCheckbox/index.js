import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = theme => ({
  checkbox: {
    display: "flex",
    flex: 1,
    fontSize: "0.875rem"
  }
});

class LoginCheckbox extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <FormControlLabel
        control={<Checkbox />}
        label={
          <Typography className={classes.checkbox}>
            {this.props.text}
          </Typography>
        }
        color="primary"
        className={classes.checkbox}
      />
    );
  }
}

export default withStyles(useStyles)(LoginCheckbox);
